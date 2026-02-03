"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import  Link  from "next/link";
import  {ArrowLeft}  from 'lucide-react';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="mt-20 mb-10 grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-6 text-sm font-medium text-white hover:text-[#6366f1] transition"
        >
          <ArrowLeft width={20} /> Back to Home
        </Link>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Contact <span className="text-[#6366f1]">Us</span>
        </h1>

        <p className="mb-10 text-sm sm:text-base text-white">
          Have a question, issue, or feedback about{" "}
          <strong>HoverQR</strong>?
          You can reach us using the form below or by email.
        </p>

        {/* ✅ Success Message */}
        {submitted && (
          <div className="mb-8 rounded-md border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400">
            ✅ Form submitted successfully. We’ll get back to you soon.
          </div>
        )}

        {/* 📩 Contact Form */}
        {!submitted && (
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4">
              Send us a message
            </h2>

            <form
              name="hoverqr-contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-4"
              onSubmit={() => setSubmitted(true)}
            >
              {/* Required hidden fields for Netlify */}
              <input
                type="hidden"
                name="form-name"
                value="hoverqr-contact"
              />
              <input type="hidden" name="bot-field" />

              <div>
                <label className="block text-sm mb-1 text-white">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-slate-700 bg-transparent px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
                />
              </div>

              <div>
                <label className="block text-sm mb-1 text-white">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="How can we help?"
                  className="w-full rounded-md border border-slate-700 bg-transparent px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
                />
              </div>

              <div>
                <label className="block text-sm mb-1 text-white">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Write your message here..."
                  className="w-full rounded-md border border-slate-700 bg-transparent px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-[#6366f1] px-5 py-2 text-sm font-semibold text-white hover:bg-[#4f46e5] transition cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </section>
        )}

        {/* 📧 Support Email */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            Email Support
          </h2>
          <p className="text-sm sm:text-base text-white">
            Prefer email? You can contact us directly at:
            <br />
            <strong className="text-[#6366f1]">
              itzmohammadkhan@gmail.com
            </strong>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
