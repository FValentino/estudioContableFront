import { useMutation } from "@tanstack/react-query";
import { sendEmail, sendEmailNews } from "../services/emailService";

export function useSendEmail() {
  return useMutation({
    mutationFn: ({
      subject,
      name,
      email,
      phone,
      message,
    }: {
      subject: string;
      name: string;
      email: string;
      phone: string;
      message: string;
    }) => sendEmail(subject, name, email, phone, message),
  });
}

export function useSendEmailNews() {
  return useMutation({
    mutationFn: ({
      subject,
      email,
    }: {
      subject: string;
      email: string;
    }) => sendEmailNews(subject, email),
  });
}