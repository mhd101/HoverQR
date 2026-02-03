"use client";

import { useState, useRef, useEffect } from "react";
import Head from "next/head";

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
  const nextIndex = (index + 1) % features.length;
  const nextVideo = features[nextIndex].video;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [active.video]);

  const next = () => setIndex(nextIndex);
  const prev = () =>
    setIndex((i) => (i - 1 + features.length) % features.length);

  return (
    <>
      <Head>
        <link rel="preload" as="video" href={active.video} />
        <link rel="preload" as="video" href={nextVideo} />
      </Head>

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
              ref={videoRef}
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

{/* Silent background preview loader for next video */}
        <video
          src={nextVideo}
          preload="auto"
          muted
          playsInline
          className="hidden"
        />

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
    </>
  );
}
