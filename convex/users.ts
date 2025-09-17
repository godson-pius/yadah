import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getUsers = query({
  args: {},
  handler: async (ctx) => {
    return ctx.db.query("users").collect();
  },
});

export const insertUser = mutation({
  args: {
    data: v.object({
      email: v.string(),
      name: v.string(),
      phone: v.string(),
      church: v.string(),
      createdAt: v.string(),
    }),
  },
  handler: async (ctx, { data }) => {
    await ctx.db.insert("users", data);
  },
});
