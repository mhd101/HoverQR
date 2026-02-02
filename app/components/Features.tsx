"use client";

import { useState } from "react";

const features = [
  {
    id: "scan",
    title: "Hover to Scan QR",
    video: "/videos/HoverToScan.mp4",
  },
  {
    id: "generate-link",
    title: "Hover to Generate QR",
    video: "/videos/HoverToGenerate.mp4",
  },
  {
    id: "history",
    title: "Save QR History",
    video: "/videos/SaveHistory.mp4",
  },
  {
    id: "snip",
    title: "Snip & Scan QR",
    video: "/videos/SnipToScan.mp4",
  },
  {
    id: "text",
    title: "Generate QR from Text",
    video: "/videos/SelectToGenerate.mp4",
  },
];

export default function Features() {
  const [index, setIndex] = useState(0);
  const active = features[index];

  const next = () =>
    setIndex((i) => (i + 1) % features.length);

  const prev = () =>
    setIndex((i) => (i - 1 + features.length) % features.length);

  return (
    <section id="features" className="py-16 px-4">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          Everything you need for{" "}
          <span className="text-[#6366f1]">QR codes</span>
        </h2>
        <p className="mt-6 text-base md:text-lg max-w-2xl mx-auto text-white/80">
          Designed to work where other QR tools fail. Seamless, instant, everywhere.
        </p>
      </div>

      {/* Video */}
      <div className="mt-14 flex justify-center">
        <div className="w-full max-w-5xl rounded-xl overflow-hidden border border-slate-800 bg-black">
          <video
            key={active.video}
            src={active.video}
            autoPlay
            muted
            playsInline
            preload="metadata"
            onEnded={next}
            className="w-full aspect-video object-cover"
          />
        </div>
      </div>

      {/* Carousel */}
      <div className="mt-10 flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="p-3 rounded-full border border-white/20 hover:border-[#6366f1] text-white/70 hover:text-white"
          aria-label="Previous feature"
        >
          ‹
        </button>

        {/* Title */}
        <div className="w-full max-w-md text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            {active.title}
          </h3>
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="p-3 rounded-full border border-white/20 hover:border-[#6366f1] text-white/70 hover:text-white"
          aria-label="Next feature"
        >
          ›
        </button>
      </div>
    </section>
  );
}
