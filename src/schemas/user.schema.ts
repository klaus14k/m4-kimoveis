import { z } from "zod";

export const userSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45),
    email: z.string().email().max(45),
    password: z.string().max(120),
    admin: z.boolean().default(false),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable(),
})

export const createUserSchema = userSchema.pick({
    name: true,
    email: true,
    password: true,
    admin: true
})
export const userWithouAdmin = createUserSchema.omit({admin: true})
export const updateUserSchema = userWithouAdmin.partial()
export const userReturnSchema = userSchema.omit({password: true})
export const userReadSchema = userReturnSchema.array()
export const userLoginSchema = userSchema.pick({
    email: true,
    password: true
})