"use client";

import { useState, useRef, useEffect } from "react";

const features = [
  { id: "scan", title: "Hover to Scan QR", video: "/videos/HoverToScan.mp4" },
  { id: "generate-link", title: "Hover to Generate QR", video: "/videos/HoverToGenerate.mp4" },
  { id: "history", title: "Save QR History", video: "/videos/SaveHistory.mp4" },
  { id: "snip", title: "Snip & Scan QR", video: "/videos/SnipToScan.mp4" },
  { id: "text", title: "Generate QR from Text", video: "/videos/SelectToGenerate.mp4" },
];

export default function Features() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const active = features[index];

  const next = () =>
    setIndex((i) => (i + 1) % features.length);

  const prev = () =>
    setIndex((i) => (i - 1 + features.length) % features.length);

  // Play video safely when source changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video
      .play()
      .catch(() => {
        // autoplay may fail silently (Safari/iOS)
      });
  }, [active.video]);

  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;

    // Prevent false-ended triggers
    if (video.currentTime > 0) {
      next();
    }
  };

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
            ref={videoRef}
            src={active.video}
            muted
            playsInline
            preload="metadata"
            onEnded={handleEnded}
            className="w-full aspect-video object-cover"
          />
        </div>
      </div>

      {/* Carousel */}
      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          onClick={prev}
          className="p-3 rounded-full border border-white/20 hover:border-[#6366f1]"
          aria-label="Previous feature"
        >
          ‹
        </button>

        <h3 className="text-xl md:text-2xl font-semibold text-white text-center">
          {active.title}
        </h3>

        <button
          onClick={next}
          className="p-3 rounded-full border border-white/20 hover:border-[#6366f1]"
          aria-label="Next feature"
        >
          ›
        </button>
      </div>
    </section>
  );
}
