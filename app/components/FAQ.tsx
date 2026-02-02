"use client";

import { useState } from "react";

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
    <section id="faq" className="py-16 px-4">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Frequently Asked <span className="text-[#6366f1]">Questions</span>
        </h2>
        <p className="mt-6 text-base md:text-lg text-white/80">
          Everything you need to know about HoverQR.
        </p>
      </div>

      {/* Accordion */}
      <div className="mt-16 max-w-3xl mx-auto border border-white/10 rounded-xl divide-y divide-white/10 bg-white/5 backdrop-blur">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <button
              key={index}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full text-left p-6 focus:outline-none"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-white">
                  {item.q}
                </h3>
                <span
                  className={`ml-4 text-[#6366f1] transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </div>

              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-white/70">
                    {item.a}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
