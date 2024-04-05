import * as z from "zod";

const MAX_FILE_SIZE = 1024 * 1024 * 5;

const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const productCreateFormSchema = z.object({
  title: z
    .string()
    .min(4, { message: "title minimal 4 karakter" })
    .max(255, { message: "title tidak boleh melebihi 255 karakter" }),
  category_id: z
    .string()
    .min(1, { message: "category minimal 2 karakter" })
    .max(255, { message: "category tidak boleh melebihi 255 karakter" }),
  price: z.string().min(2, { message: "price minimal 2 karakter" }).max(255),
  color: z.array(z.string()).min(1),
  size: z.array(z.string()).min(1),
  status: z.boolean({
    invalid_type_error: "status harus bertipe false atau true",
  }),
  stock: z.string().min(2, { message: "stock minimal 2 karakter" }).max(255),
  description: z
    .string()
    .min(10, { message: "description minimal 10 karakter" })
    .max(300, { message: "description tidak boleh melebihi 300 karakter" }),
  thumbnail: z
    .any()
    .refine((files) => {
      return files?.[0]?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
});
