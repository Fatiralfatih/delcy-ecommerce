import * as z from "zod";

export const productEditSchema = z.object({
    title: z
        .string()
        .min(2, { message: "title minimal 2 karakter" })
        .max(255, { message: "title tidak boleh melebihi 255 karakter" }),
    category_id: z
        .string()
        .min(1, { message: "category minimal 1 karakter" })
        .max(255, { message: "category tidak boleh melebihi 255 karakter" })
    ,
    price: z.string()
        .min(2, { message: "price minimal 2 karakter" })
        .max(255, { message: "price tidak boleh melebihi 255 karakter" })
    ,
    color: z.array(z.string().max(255, { message: "color tidak boleh melebih 255 karakter" })).min(1, { message: "minimal pilih 1 color" }),
    size: z.array(z.string().max(255, { message: "size tidak boleh melebihi 255 karakter" })).min(1, { message: "minimal pilih 1 size" }),
    status: z.boolean({
        invalid_type_error: "status harus bertipe false atau true",
    }),
    stock: z
        .string()
        .min(1, { message: "stock minimal 1 karakter" })
        .max(255, { message: "stock maksimal 255 karakter" })
    ,
    description: z
        .string()
        .min(5, { message: "description minimal 5 karakter" })
        .max(300, { message: "description tidak boleh melebihi 300 karakter" }),
});
