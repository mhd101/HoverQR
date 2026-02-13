import Footer from "../components/Footer";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

export default function ContactUs() {
  const email = "itzmohammadkhan@gmail.com";
  const subject = encodeURIComponent("Query: <your-query>");

  return (
    <div className="min-h-screen flex flex-col">
      <main className="mt-16 sm:mt-20 mb-10 grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-6 text-sm font-medium text-white hover:text-indigo-500 transition"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          Back to Home
        </Link>

        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Contact <span className="text-indigo-500">Us</span>
        </h1>

        <p className="mb-10 text-sm sm:text-base text-white">
          Have a question, issue, or feedback about{" "}
          <strong>HoverQR</strong>?  
          The fastest way to reach us is by email.
        </p>

        {/* Email Contact Card */}
        <section className="rounded-lg border border-slate-700 bg-slate-800/40 p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">
            Email Support
          </h2>

          <p className="text-sm sm:text-base text-slate-300 mb-6">
            Click the email below to open your email app.  
            Please briefly describe your query in the subject.
          </p>

          <a
            href={`mailto:${email}?subject=${subject}`}
            className="inline-flex items-center gap-3 rounded-md bg-indigo-500 px-5 py-3 text-sm sm:text-base font-semibold text-white hover:bg-indigo-500/80 transition"
          >
            <Mail className="w-5 h-5" />
            Contact via Email
          </a>

          <p className="mt-4 text-sm text-slate-400 break-all">
            Or email us directly at:{" "}
            <span className="text-indigo-500">{email}</span>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
