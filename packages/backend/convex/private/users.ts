import { query } from "../_generated/server";

/**
 * List all users (admin only)
 */
export const getAllUsers = query({
  handler: async (ctx) => {
    return await ctx.db.query("users").collect();
  },
});
