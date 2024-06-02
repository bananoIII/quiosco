import { z } from "zod";

export const OrderSchema = z.object({
  name: z.string().min(1, "Por favor, ingrese su nombre."),
  total: z.number().min(1, "Hay errores!"),
  order: z.array(
    z.object({
      id: z.onumber(),
      name: z.string(),
      price: z.number(),
      quantity: z.number(),
      subtotal: z.number(),
    })
  ),
});

export const OrderIdSchema = z.object({
  orderId: z
    .string()
    .transform((value) => parseInt(value))
    .refine((value) => value > 0, { message: "Hubo un errorcillo" }),
});