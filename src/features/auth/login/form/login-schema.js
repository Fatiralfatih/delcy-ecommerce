import * as z from "zod";

export const loginSchema = z.object({
    username: z
        .string()
        .min(2, { message: "username minimal 2 karakter" })
        .max(255, { message: "username maksimal 255 karakter" }),
    password: z
        .string()
        .min(5, { message: "password minimal 5 karakter" })
        .max(255, { message: "password maksimal 255 karakter" })
}).required()