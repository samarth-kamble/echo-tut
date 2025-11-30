import { v } from "convex/values";
import { internalMutation } from "../_generated/server";

export const createOrganization = internalMutation({
  args: {
    clerkOrgId: v.string(),
    name: v.string(),
    createdBy: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("organizations", {
      clerkOrgId: args.clerkOrgId,
      name: args.name,
      createdBy: args.createdBy,
    });
  },
});

export const updateOrganization = internalMutation({
  args: {
    clerkOrgId: v.string(),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const org = await ctx.db
      .query("organizations")
      .filter((q) => q.eq(q.field("clerkOrgId"), args.clerkOrgId))
      .unique();

    if (!org) return;

    await ctx.db.patch(org._id, { name: args.name });
  },
});

export const deleteOrganization = internalMutation({
  args: { clerkOrgId: v.string() },
  handler: async (ctx, args) => {
    const org = await ctx.db
      .query("organizations")
      .filter((q) => q.eq(q.field("clerkOrgId"), args.clerkOrgId))
      .unique();

    if (org) {
      await ctx.db.delete(org._id);
    }
  },
});

export const addMember = internalMutation({
  args: {
    clerkOrgId: v.string(),
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const org = await ctx.db
      .query("organizations")
      .filter((q) => q.eq(q.field("clerkOrgId"), args.clerkOrgId))
      .unique();

    if (!org) return;

    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("clerkId"), args.userId))
      .unique();

    if (user) {
      const updatedOrgIds = new Set(user.orgIds ?? []);
      updatedOrgIds.add(args.clerkOrgId);
      await ctx.db.patch(user._id, {
        orgIds: Array.from(updatedOrgIds),
      });
    }
  },
});

export const removeMember = internalMutation({
  args: {
    clerkOrgId: v.string(),
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("clerkId"), args.userId))
      .unique();

    if (user && user.orgIds) {
      const updated = user.orgIds.filter((id) => id !== args.clerkOrgId);
      await ctx.db.patch(user._id, { orgIds: updated });
    }
  },
});
