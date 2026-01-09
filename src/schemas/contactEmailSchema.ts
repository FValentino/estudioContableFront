import z from "zod";

export const emailContactSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().min(1, "El correo es obligatorio").email("Correo inválido"),
  phone: z.string().min(1, "El teléfono es obligatorio").regex(/^\d+$/, "Teléfono solo debe contener numeros").min(8, "El teléfono es muy corto").max(10, "El teléfono es muy largo"),
  message: z.string().min(1, "El mensaje es obligatorio").min(10, "El mensaje debe tener al menos 10 caracteres")
});

export type emailContactFormValues = z.infer<typeof emailContactSchema>