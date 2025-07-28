"use client";

import { useState } from "react";
import { sendMail } from "@/lib/mail";
import { Button } from "../ui/button";
import Image from "next/image";
import { Toaster, toaster } from "@/components/ui/toaster";
import { Loader2 } from "lucide-react";
import { usePathname } from "next/navigation";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      console.warn("Please fill in all the fields");
      setIsSubmitting(false);
      return;
    }

    try {
      await sendMail({
        to: "josh@ktlweb.dev",
        name,
        subject,
        body: `<p>${message}</p>`,
      });

      toaster.create({
        title: "Message sent.",
        type: "success",
        duration: 2000,
        closable: true,
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toaster.create({
        title: "Message failed.",
        type: "error",
        duration: 2000,
        closable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={
        isContactPage
          ? "flex flex-col items-center mt-1"
          : "flex flex-col items-center mt-1 bg-deep-green"
      }
    >
      <Toaster />
      {!isContactPage && (
        <Image
          src="/header-logo.svg"
          alt="Drea Dawn Photography logo"
          width={235}
          height={55}
        />
      )}
      <div className="p-2">
        <Image
          src="/assets/images/mail.svg"
          alt="Mail icon"
          width={30}
          height={30}
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-md gap-4 px-4"
      >
        {[
          { id: "name", label: "Name", type: "text" },
          { id: "email", label: "Email", type: "email" },
          { id: "subject", label: "Subject", type: "text" },
        ].map(({ id, label, type }) => (
          <div key={id} className="flex flex-col">
            <label htmlFor={id} className="pb-1">
              {label}:
            </label>
            <input
              id={id}
              name={id}
              type={type}
              value={formData[id as keyof typeof formData]}
              onChange={handleChange}
              required
              className="input-field"
              disabled={isSubmitting}
            />
          </div>
        ))}

        <div className="flex flex-col">
          <label htmlFor="message" className="pb-1">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="textarea"
            disabled={isSubmitting}
          />
        </div>

        <Button
          disabled={isSubmitting}
          className="w-full bg-forest-green shadow-md text-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
          {isSubmitting ? "Sending..." : "Send Email ✉️"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
