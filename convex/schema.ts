import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    name: v.string(),
    phone: v.string(),
    gender: v.string(),
    church: v.string(),
    attendanceMode: v.string(),
    attendedBefore: v.string(),
    heardFrom: v.string(),
    registrationType: v.string(),
    preferredUnit: v.optional(v.string()),
    // emergencyName: v.string(),
    // emergencyPhone: v.string(),
    // emergencyRelationship: v.string(),
    createdAt: v.string(),
  }),
});
