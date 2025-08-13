import { query, mutation } from "./_generated/server";

export const getMany = query({
  args: {},
  handler: async (ctx, args) => {
    const users = await ctx.db.query("users").collect();

    return users;
  },
});

export const add = mutation({
  args: {},
  handler: async (ctx, args) => {
    const userId = await ctx.db.insert("users", {
      name: "Samarth",
    });

    return userId;
  },
});
