// hooks/useSendEmail.ts
import { useMutation } from "@tanstack/react-query";
import { sendEmail } from "../services/emailService";

interface SendEmailArgs {
  subject: string;
  message: string;
}

export function useSendEmail() {
  return useMutation({
    mutationFn: ({ subject, message }: SendEmailArgs) => sendEmail(subject, message),
  });
}