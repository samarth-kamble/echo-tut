import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { createClerkClient, WebhookEvent } from "@clerk/backend";
import { Webhook } from "svix";
import { internal } from "./_generated/api";

const clerkClient = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY || "",
});

const http = httpRouter();

http.route({
  path: "/clerk-webhook",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const event = await validateRequest(request);
    if (!event) {
      return new Response("Error Occured", { status: 400 });
    }

    switch (event.type) {
      case "subscription.updated": {
        const subscription = event.data as {
          status: string;
          payer?: {
            organization_id: string;
          };
        };

        const organizationId = subscription.payer?.organization_id;
        if (!organizationId) {
          return new Response("Missing organization ID", { status: 400 });
        }

        const newMaxAllowedMemberships =
          subscription.status === "active" ? 100 : 1;

        await clerkClient.organizations.updateOrganization(organizationId, {
          maxAllowedMemberships: newMaxAllowedMemberships,
        });

        await ctx.runMutation(internal.system.subscriptions.upsert, {
          organizationId,
          status: subscription.status,
        });

        break;
      }
      default: {
        console.log(`Igonored clerk webhook event: ${event.type}`);
        break;
      }
    }

    return new Response(null, { status: 200 });
  }),
});

async function validateRequest(request: Request): Promise<WebhookEvent | null> {
  const payload = await request.text();

  const svixHeaders = {
    "svix-id": request.headers.get("svix-id") || "",
    "svix-timestamp": request.headers.get("svix-timestamp") || "",
    "svix-signature": request.headers.get("svix-signature") || "",
  };

  const wh = new Webhook(process.env.CLERK_WEBHOOK_KEY || "");

  try {
    return wh.verify(payload, svixHeaders) as unknown as WebhookEvent;
  } catch (error) {
    console.error("Error validating webhook:", error);
    return null;
  }
}

export default http;
