"use server";

import { Resend } from "resend";
import { CreateEmailResponse } from "resend/build/src/emails/interfaces";

const resend = new Resend(process.env.RESEND_API_KEY);
export const sendingEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const name = formData.get("name");
  const email = formData.get("email");

  if (
    !message ||
    typeof message !== "string" ||
    !email ||
    typeof email !== "string"
  ) {
    return Promise.reject("Invalid Message or email");
  }

  return await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: "yassineelhajjamidev@gmail.com",
    subject: "Portfolio Message",
    reply_to: email,
    text: `From ${name} : ${message}`,
  });
};
