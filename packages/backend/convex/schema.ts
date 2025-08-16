import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";


export default defineSchema({
  contactSessions: defineTable({
    name: v.string(),
    email: v.string(),
    organizationId: v.string(),
    expiredAt: v.number(),
    metadata: v.optional(v.object({
      userAgent: v.string(),
      language: v.string(),
      languages: v.optional(v.string()),
      platform: v.optional(v.string()),
      vendor: v.optional(v.string()),
      screenResolution: v.optional(v.string()),
      viewportSize: v.optional(v.string()),
      timezone: v.optional(v.string()),
      timezoneOffset:v.optional(v.number()),
      cookieEnabled: v.optional(v.boolean()),
      referrer: v.optional(v.string()),
      currentUrl: v.optional(v.string()),
    })),
  })
  .index('by_organization_id', ['organizationId'])
  .index('by_expires_at',['expiredAt']),
  users: defineTable({
    name: v.string(),
  }),
});
