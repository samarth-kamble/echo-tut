import { v } from "convex/values";
import { createClerkClient } from "@clerk/backend";

import { action } from "../_generated/server";

const clerkClient = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
});

export const validate = action({
  args: {
    organizationId: v.string(),
  },
  handler: async (_, args) => {
    try {
      const organization = await clerkClient.organizations.getOrganization({
        organizationId: args.organizationId,
      });

      if (organization) {
        return { valid: true };
      }
      return { valid: true };
    } catch (error) {
      return { valid: false, reason: "Organization not found" };
    }
  },
});
