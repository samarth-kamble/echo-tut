import { v } from "convex/values";
import { ConvexError } from "convex/values";

import { internalMutation } from "../_generated/server";

/**
 * Create a new user in Convex when Clerk sends `user.created`.
 * If the user already exists, do nothing (Clerk might resend events).
 */
export const createUser = internalMutation({
  args: {
    clerkId: v.string(),
    email: v.string(),
    imageUrl: v.string(),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if the user already exists (idempotent)
    const existingUser = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("clerkId"), args.clerkId))
      .unique();

    if (existingUser) {
      console.log(`User with Clerk ID ${args.clerkId} already exists`);
      return existingUser._id;
    }

    // Create a new user record
    const userId = await ctx.db.insert("users", {
      clerkId: args.clerkId,
      email: args.email,
      imageUrl: args.imageUrl,
      name: args.name,
      orgIds: [], // empty array — user may join orgs later
    });

    console.log(`✅ Created user ${args.email} (${args.clerkId})`);
    return userId;
  },
});

/**
 * Update a user when Clerk sends `user.updated`.
 * Handles profile picture, email, and name updates.
 */
export const updateUser = internalMutation({
  args: {
    clerkId: v.string(),
    imageUrl: v.string(),
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("clerkId"), args.clerkId))
      .unique();

    if (!user) throw new ConvexError("User not found");

    await ctx.db.patch(user._id, {
      imageUrl: args.imageUrl,
      email: args.email,
    });

    console.log(`🔄 Updated user ${args.clerkId}`);
  },
});

/**
 * Delete a user when Clerk sends `user.deleted`.
 * This will remove their record (but not the organizations).
 */
export const deleteUser = internalMutation({
  args: { clerkId: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("clerkId"), args.clerkId))
      .unique();

    if (!user) {
      console.log(`⚠️ Tried to delete non-existing user ${args.clerkId}`);
      return;
    }

    await ctx.db.delete(user._id);
    console.log(`🗑️ Deleted user ${args.clerkId}`);
  },
});
