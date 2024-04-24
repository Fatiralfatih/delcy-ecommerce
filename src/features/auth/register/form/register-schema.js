import * as z from 'zod';

export const registerSchema = z.object({
    username: z
        .string()
        .min(2, { message: "username minimal 2 karakter" })
        .max(255, { message: "username maksimal 255 karakter" }),
    name: z
        .string()
        .min(2, { message: "name minimal 2 karakter" })
        .max(255, { message: "name maksimal 255 karakter" }),
    email: z
        .string()
        .min(2, { message: "email minimal 2 karakter" })
        .max(255, { message: "email maksimal 255 karakter" })
        .email("email tidak valid"),
    password: z
        .string()
        .min(5, { message: "password minimal 5 karakter" })
        .max(255, { message: "password maksimal 255 karakter" })
}).required()