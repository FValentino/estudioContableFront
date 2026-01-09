"use server";

import { Resend } from "resend";

const resend = new Resend("re_HRbcb8xr_3sL3afPbfKp8BxAGe8m9mtaf");

export async function newsEmailAction(email: string) {
  try {
    await resend.emails.send({
      from: `I&M <${process.env.FROM_EMAIL}>`,
      to: [process.env.USER_EMAIL!],
      subject: "[Web] Suscripción a novedades",
      html: `
        <h2>Suscripción desde la web</h2>
        <p>Me interesa recibir novedades.</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Error enviando newsletter email:", error);
    return { success: false };
  }
}
