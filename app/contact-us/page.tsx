"use client";

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactUs() {
  const [status, setStatus] = useState<Status>("idle");

  // ✅ Auto-hide success / error after 4 seconds
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="mt-16 sm:mt-20 mb-10 grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-6 text-sm font-medium text-white hover:text-[#6366f1] transition"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          Back to Home
        </Link>

        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Contact <span className="text-[#6366f1]">Us</span>
        </h1>

        <p className="mb-8 sm:mb-10 text-sm sm:text-base text-white">
          Have a question, issue, or feedback about{" "}
          <strong>HoverQR</strong>? You can reach us using the form below
          or by email.
        </p>

        {/* ✅ Success Message */}
        {status === "success" && (
          <div className="mb-6 rounded-md border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm sm:text-base text-green-400">
            ✅ Message sent successfully. We’ll get back to you soon.
          </div>
        )}

        {/* ❌ Error Message */}
        {status === "error" && (
          <div className="mb-6 rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm sm:text-base text-red-400">
            ❌ Failed to send message. Please try again.
          </div>
        )}

        {/* 📩 Contact Form */}
        {status !== "success" && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1 text-white">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-md border border-slate-700 bg-transparent px-3 py-2 text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
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
                className="w-full rounded-md border border-slate-700 bg-transparent px-3 py-2 text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
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
                className="w-full rounded-md border border-slate-700 bg-transparent px-3 py-2 text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex w-full sm:w-auto justify-center rounded-md bg-[#6366f1] px-5 py-2.5 text-sm sm:text-base font-semibold text-white hover:bg-[#4f46e5] transition disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}

        {/* 📧 Support Email */}
        <section className="mt-10">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            Email Support
          </h2>
          <p className="text-sm sm:text-base text-white">
            Prefer email? You can contact us directly at:
            <br />
            <strong className="text-[#6366f1] break-all">
              itzmohammadkhan@gmail.com
            </strong>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
