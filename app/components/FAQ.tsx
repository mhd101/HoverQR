"use client";

import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What is HoverQR?",
    a: "HoverQR is a Chrome extension that lets you scan QR codes and generate QR codes instantly on any webpage by simply hovering your mouse.",
  },
  {
    q: "How does HoverQR work?",
    a: "Once installed, HoverQR detects links, text, and QR codes on webpages. You can hover to scan QR codes or generate new QR codes without leaving the page.",
  },
  {
    q: "Can I scan QR codes without using my phone?",
    a: "Yes. HoverQR works completely on desktop browser, so you don’t need to use your phone or any external QR scanner.",
  },
  {
    q: "What features are included in the free version?",
    a: "The free version includes hover to scan QR codes and hover to generate QR codes for links.",
  },
  {
    q: "What do I get with the Lifetime Premium plan?",
    a: "Lifetime Premium unlocks all features including saved history, snip & scan, and QR generation from any text.",
  },
  {
    q: "Is the payment really one-time?",
    a: "Yes. You pay once and get lifetime access. No subscriptions or recurring charges.",
  },
  {
    q: "Does HoverQR collect or send my data?",
    a: "No. HoverQR runs entirely in your browser and does not collect or send any data.",
  },
  {
    q: "Which browsers are supported?",
    a: "HoverQR works on Google Chrome and Chromium-based browsers.",
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 bg-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-sm">
          <span className="text-sm font-medium text-indigo-400">FAQ</span>
        </div>
        <h2 className="text-3xl px-2 sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Frequently Asked <span className="text-indigo-500">Questions</span>
        </h2>
        <p className="mt-6 text-lg md:text-xl px-4 text-white/60 font-light">
          Everything you need to know about HoverQR.
        </p>
      </motion.div>

      {/* Accordion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16 max-w-3xl mx-auto border border-white/10 rounded-xl divide-y divide-white/10 bg-indigo-500/5 backdrop-blur-lg shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative z-10"
      >
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <button
              key={index}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full text-left p-6 focus:outline-none"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">
                  {item.q}
                </h3>
                <span
                  className={`ml-4 text-indigo-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                    }`}
                >
                  <ChevronDownIcon />
                </span>
              </div>

              <div
                className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
                  }`}
              >
                <div className="overflow-hidden">
                  <p className="text-base text-white/70 leading-relaxed pt-2">
                    {item.a}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </motion.div>
    </section>
  );
}
