"use client";

import React from "react";
import ContactForm from "@/components/shared/ContactForm";

const ContactPage = () => {
  return (
    <div className="my-10 pb-6 border-b min-h-screen w-screen">
      <h1 className="text-center text-4xl text-deep-green pt-20 lg:pt-[260px] pb-12 font-semibold">
        Contact Drea Dawn Photo + Films
      </h1>
      <section className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <p className="text-slate-600 flex max-w-[550px] min-w-[400px] mx-auto text-lg px-4 italic text-pretty text-clip">
            Drea Dawn Photo + Films is dedicated to communicating effectively
            with our clients. Please fill out your name, email, the subject, and
            a brief message and we will be in contact as soon as possible!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="pt-10 pb-10 shadow-xl w-screen max-w-[550px] rounded-lg mx-auto text-deep-green">
            <p className="pl-3 text-2xl font-bold text-forest-green">
              Contact Us:
            </p>
            <ContactForm onSuccess={() => {}} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
