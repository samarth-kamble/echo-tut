import { ConvexError, v } from "convex/values";
import { internalMutation, internalQuery } from "../_generated/server";
import { AUTO_REFRESH_THRESHOLD_MS, SESSION_DURATION_MS } from "../constants";

export const refresh = internalMutation({
  args: {
    contactSessionId: v.id("contactSessions"),
  },
  handler: async (ctx, args) => {
    const contactSession = await ctx.db.get(args.contactSessionId);

    if (!contactSession) {
      throw new ConvexError({
        code: "NOT_FOUND",
        message: "Contact session not found",
      });
    }

    if (contactSession.expiredAt < Date.now()) {
      throw new ConvexError({
        code: "EXPIRED",
        message: "Contact session has expired",
      });
    }

    const timeRemaining = contactSession.expiredAt - Date.now();

    if (timeRemaining < AUTO_REFRESH_THRESHOLD_MS) {
      const newExpiresAt = Date.now() + SESSION_DURATION_MS;

      await ctx.db.patch(args.contactSessionId, {
        expiredAt: newExpiresAt,
      });

      return { ...contactSession, expiredAt: newExpiresAt };
    }

    return contactSession;
  },
});

export const getOne = internalQuery({
  args: {
    contactSessionId: v.id("contactSessions"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.contactSessionId);
  },
});
