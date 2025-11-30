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
      case "user.created":
        await ctx.runMutation(internal.system.users.createUser, {
          clerkId: event.data.id,
          email: event.data.email_addresses[0].email_address,
          imageUrl: event.data.image_url,
          name: event.data.first_name || "Unknown",
        });
        break;

      case "user.updated":
        await ctx.runMutation(internal.system.users.updateUser, {
          clerkId: event.data.id,
          imageUrl: event.data.image_url,
          email: event.data.email_addresses[0].email_address,
        });
        break;

      case "user.deleted":
        if (!event.data.id) {
          return new Response("Missing user ID", { status: 400 });
        }
        await ctx.runMutation(internal.system.users.deleteUser, {
          clerkId: event.data.id,
        });
        break;

      /** ORGANIZATION EVENTS **/
      case "organization.created":
        await ctx.runMutation(
          internal.system.organizations.createOrganization,
          {
            clerkOrgId: event.data.id,
            name: event.data.name,
            createdBy: event.data.created_by || "unknown",
          }
        );
        break;

      case "organization.updated":
        await ctx.runMutation(
          internal.system.organizations.updateOrganization,
          {
            clerkOrgId: event.data.id,
            name: event.data.name,
          }
        );
        break;

      case "organization.deleted":
        if (!event.data.id) {
          return new Response("Missing organization ID", { status: 400 });
        }
        await ctx.runMutation(
          internal.system.organizations.deleteOrganization,
          {
            clerkOrgId: event.data.id,
          }
        );
        break;

      /** ORGANIZATION MEMBERSHIP EVENTS **/
      case "organizationMembership.created":
        await ctx.runMutation(internal.system.organizations.addMember, {
          clerkOrgId: event.data.organization.id,
          userId: event.data.public_user_data.user_id,
        });
        break;

      case "organizationMembership.deleted":
        await ctx.runMutation(internal.system.organizations.removeMember, {
          clerkOrgId: event.data.organization.id,
          userId: event.data.public_user_data.user_id,
        });
        break;

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
