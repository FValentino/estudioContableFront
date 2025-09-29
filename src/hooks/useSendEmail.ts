import { useMutation } from "@tanstack/react-query";
import { sendEmail} from "../services/emailService";

export function useSendEmail() {
  return useMutation({
    mutationFn: ({
      subject,
      message,
    }: {
      subject: string;
      message: string;
    }) => sendEmail(subject, message),
  });
}