"use client";

import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";

const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "Custom App Development", label: "Custom App Development" },
  { value: "Store Setup & Configuration", label: "Store Setup & Configuration" },
  { value: "Consulting & Strategy", label: "Consulting & Strategy" },
  { value: "Other", label: "Other" },
];

const inputClass =
  "w-full rounded-lg border border-card-border bg-[#0e0e0e] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-accent";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      serviceType: formData.get("serviceType") as string,
      message: formData.get("message") as string,
    };

    const result = await submitContactForm(data);

    if (result.success) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error || "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 py-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
          <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-mono text-lg font-semibold text-white">Message sent!</p>
        <p className="text-sm text-gray-400">We&apos;ll get back to you soon.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm text-accent transition-colors hover:text-orange-400"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-4 text-left">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className={inputClass}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className={inputClass}
        />
      </div>
      <select
        name="serviceType"
        required
        className={`${inputClass} appearance-none`}
        defaultValue=""
      >
        {serviceOptions.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            disabled={opt.value === ""}
            className="bg-[#0e0e0e]"
          >
            {opt.label}
          </option>
        ))}
      </select>
      <textarea
        name="message"
        placeholder="Tell us about your project"
        required
        rows={4}
        className={`${inputClass} resize-none`}
      />

      {status === "error" && (
        <p className="text-sm text-red-400">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-black transition-all hover:bg-orange-400 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
