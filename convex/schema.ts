<<<<<<< HEAD
import {defineSchema,defineTable} from "convex/server";
import {v} from "convex/values";

export default defineSchema({
    tasks: defineTable({
        text: v.string(),
        completed: v.boolean(),
    }),
    products: defineTable({
        name: v.string(),
        price : v.number(),
=======
import {defineSchema,defineTable} from 'convex/server';
import { v } from 'convex/values';
export default defineSchema({
    tasks:defineTable({
        text:v.string(),
        completed:v.boolean(),
    }),
    products:defineTable({
        name:v.string(),
        price:v.number(),
>>>>>>> c54f8dd36efeb99493702d55f4a1571d9a7a9b5c
    }),
});