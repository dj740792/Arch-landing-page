"use client";

import Image from "next/image";
import { Lato } from "next/font/google";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
const numFont = Lato({ subsets: ["latin"], weight: "400" });

export default function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (err) => {
          console.error("EmailJS Error:", err);
          setError(true);
        }
      );
  };

  return (
    <section className="w-full min-h-screen pt-28 sm:pt-36 pb-16 px-6 lg:px-16 flex items-center justify-center">
      <div className="w-full max-w-375 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-7">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold tracking-tight">
              We'd love to help
            </h1>
            <p className="text-sm lg:text-xl opacity-80 leading-relaxed max-w-md">
              Tell us a bit about your project, and we'll get back to you with a
              custom proposal tailored to your needs.
            </p>
          </div>

          {/* form */}
          <form
            onSubmit={sendEmail}
            ref={form}
            className="space-y-9 pt-8 w-full"
          >
            <div className="space-y-1.5">
              <label className="text-md lg:text-xl font-semibold uppercase tracking-wider block">
                Full Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Enter your name"
                className={`${numFont.className} w-full text-sm border-b border-current/20 pb-2 lg:text-lg focus:outline-none bg-transparent placeholder:opacity-40`}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-md lg:text-xl font-semibold uppercase tracking-wider block">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="Enter your email"
                className={`${numFont.className} w-full text-sm border-b border-current/20 pb-2 lg:text-lg focus:outline-none bg-transparent placeholder:opacity-40`}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm lg:text-xl font-semibold uppercase tracking-wider block">
                Contact
              </label>
              <input
                type="text"
                name="user_contact"
                placeholder="Enter your contact"
                className={`${numFont.className} font-bold w-full text-sm border-b border-current/20 pb-2 lg:text-lg focus:outline-none bg-transparent placeholder:opacity-40`}
              />
            </div>

            <div className="space-y-3">
              <label className="text-md lg:text-xl font-semibold uppercase tracking-wider block">
                Project Brief
              </label>
              <input
                type="text"
                name="project_scope"
                required
                placeholder="Tell us about your project..."
                className="w-full text-sm border-b border-current/20 pt-10 pb-2 lg:text-lg focus:outline-none bg-transparent placeholder:opacity-40"
              />
            </div>

            <div className="w-full flex flex-col items-center justify-center pt-6 gap-3">
             <button
                type="submit"
                className="w-1/2 cursor-pointer py-5 bg-[#361e13] text-[#f8eee9] font-semibold text-md lg:text-xl transition-colors hover:bg-[#25140d]"
              >
                {success ? "Sent" : error ? "Error, Try Again" : "Lets Connect"}
              </button>
            </div>
          </form>
        </div>

        <div className="w-full lg:w-1/2 relative lg:h-150 xl:h-187.5 overflow-hidden hidden lg:block">
          <Image
            src="/ctaImgs/ctaImg6.jpg"
            alt="OASIS Project showcase"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}