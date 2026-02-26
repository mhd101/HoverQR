"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";


const features = [
  { id: "scan", title: "Hover to Scan QR", video: "/videos/HoverToScan.webm" },
  { id: "generate-link", title: "Hover to Generate QR", video: "/videos/HoverToGenerate.webm" },
  { id: "history", title: "Save QR History", video: "/videos/SaveHistory.webm" },
  { id: "snip", title: "Snip & Scan QR", video: "/videos/SnipToScan.webm" },
  { id: "text", title: "Generate QR from Text", video: "/videos/SelectToGenerate.webm" },
  { id: "custom-qr", title: "QR Customization", video: "/videos/CustomQR.webm" }
];

export default function Features() {
  const [index, setIndex] = useState(0);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  // ▶️ Play active video, pause others
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      if (i === index) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [index]);

  const next = () => setIndex(i => (i + 1) % features.length);
  const prev = () => setIndex(i => (i - 1 + features.length) % features.length);

  return (
    <section id="features" className="py-16 px-4">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          Everything you need for <span className="text-indigo-500">QR codes</span>
        </h2>
        <p className="mt-6 text-base md:text-lg max-w-2xl mx-auto text-white/80">
          Designed to work where other QR tools fail. Seamless, instant, everywhere.
        </p>
      </div>

      {/* Video stack */}
      <div className="mt-14 flex justify-center">
        <div className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden border border-slate-800 bg-black">
          {features.map((f, i) => (
            <video
              key={f.id}
              ref={el => {
                if (el) videoRefs.current[i] = el;
              }}
              src={f.video}
              muted
              playsInline
              preload="auto"
              onEnded={next}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                i === index ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          onClick={prev}
          className="p-3 rounded-full border border-white/20 hover:border-indigo-500 cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <h3 className="text-xl md:text-2xl font-semibold text-white text-center">
          {features[index].title}
        </h3>

        <button
          onClick={next}
          className="p-3 rounded-full border border-white/20 hover:border-indigo-500 cursor-pointer"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
