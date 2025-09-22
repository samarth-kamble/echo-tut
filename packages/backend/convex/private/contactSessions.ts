import { ConvexError, v } from "convex/values";

import { query } from "../_generated/server";
import { Id } from "../_generated/dataModel";

export const getOneByConversationId = query({
  args: {
    conversationId: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (identity === null) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "Identity not found",
      });
    }

    const orgId = identity.orgId as string;
    if (!orgId) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "Organization not found",
      });
    }
    const conversation = await ctx.db.get(
      args.conversationId as Id<"conversations">
    );

    if (!conversation) {
      throw new ConvexError({
        code: "NOT_FOUND",
        message: "Conversation not found",
      });
    }

    if (conversation.organizationId !== orgId) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "You are not authorized to view this conversation",
      });
    }

    const contactSessions = await ctx.db.get(conversation.contactSessionId);

    return contactSessions;
  },
});
