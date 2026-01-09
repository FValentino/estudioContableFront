import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {

    const body = await request.json();
    const { subject, html } = body;

    if (!subject || !html) {
      return NextResponse.json(
        { success: false, message: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: `I&M <${process.env.FROM_EMAIL}>`,
      to: [process.env.USER_EMAIL as string],
      subject: `[web] ${subject}`,
      html: html,
    });

    if (data.error) {
      return NextResponse.json(
        { success: false, message: "Error de Resend", error: data.error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Email enviado correctamente!" },
      { status: 200 }
    );

  } catch (err) {
    console.error("Error enviando email:", err);
    return NextResponse.json(
      { success: false, message: "Error interno al enviar el email" },
      { status: 500 }
    );
  }
}