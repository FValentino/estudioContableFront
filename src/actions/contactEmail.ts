"use server";

import { emailContactSchema } from "@/schemas/contactEmailSchema";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function contactEmailAction(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  const parsed = emailContactSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false };
  }

  const { name, email, phone, message } = parsed.data;

  try {
    await resend.emails.send({
      from: `I&M <${process.env.FROM_EMAIL}>`,
      to: [process.env.USER_EMAIL!],
      replyTo: email,
      subject: "[Web] Nuevo contacto",
      html: `
        <h2>[Web] Nuevo contacto</h2>
        <p><b>Nombre:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Teléfono:</b> ${phone}</p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
