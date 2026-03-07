"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  serviceType: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData) {
  const { name, email, serviceType, message } = data;

  if (!name || !email || !serviceType || !message) {
    return { error: "All fields are required." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  try {
    await resend.emails.send({
      from: "c0deman.com <hello@c0deman.com>",
      to: process.env.CONTACT_EMAIL || "hello@c0deman.com",
      subject: `[c0deman.com] New inquiry from ${name} - ${serviceType}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Service: ${serviceType}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
    });

    return { success: true };
  } catch {
    return { error: "Failed to send message. Please try again." };
  }
}
