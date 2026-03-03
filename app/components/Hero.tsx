"use client";

import { useState } from "react";
import { Chromium, Eye, X, Star } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="pt-32 pb-24 px-4 text-center relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-4 flex items-center gap-2 rounded-full px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"
              />
            </svg>
            <span className="text-sm font-medium">
              Hover to scan QR codes
            </span>
          </motion.div>

          {/* Headings */}
          <motion.div variants={itemVariants} className="max-w-4xl w-full px-2">
            <h1 className="text-7xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6">
              Hover<span className="text-indigo-500">QR</span>
            </h1>
            <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white/90 leading-tight tracking-tight">
              Instantly <span className="text-indigo-500">Scan</span> & <span className="text-indigo-500">Generate</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="mt-4 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto text-white/60 font-light leading-relaxed px-2">
            Scan QR codes just by hovering. Generate them from any link or text.
            Works everywhere—even inside youtube videos or pdfs. No clicks, no downloads.
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full sm:w-auto px-4">
            <a
              href="https://chromewebstore.google.com/detail/mjgheejcnmceaaobpilbpmehlpkbigmp?utm_source=item-share-cb"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center gap-3
                w-full sm:w-auto
                px-6 py-3 sm:py-4 rounded-xl
                text-lg font-semibold text-white
                bg-indigo-600 hover:bg-indigo-500
                transition-all duration-300
                hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] sm:hover:-translate-y-0.5
              "
            >
              <Chromium width={24} height={24} />

              Add to Chrome – Free
            </a>

            <button
              onClick={() => setIsVideoOpen(true)}
              className="
                flex items-center justify-center gap-3
                w-full sm:w-auto
                px-6 py-3 sm:py-4 rounded-xl
                text-lg font-semibold text-white
                bg-indigo-500/10 hover:bg-indigo-500/20 backdrop-blur-md
                border border-indigo-500/20 hover:border-indigo-500/50
                transition-all duration-300 sm:hover:-translate-y-0.5
                cursor-pointer
              "
            >
              <Eye className="w-5 h-5" />
              View Demo
            </button>
          </motion.div>

          {/* Trust Testimonials */}
          <motion.div variants={itemVariants} className="mt-16 w-full max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Testimonial 1 */}
              <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-indigo-500/5 border border-white/5 backdrop-blur-sm hover:bg-indigo-500/10 transition-colors">
                <div className="flex items-center gap-1 text-indigo-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 text-sm sm:text-base text-center italic mb-4">
                  "This looks awesome! 🎉 Love that it's free with no signup and so many customization options."
                </p>
                <div className="mt-auto flex items-center gap-2">
                  <span className="text-xs font-bold text-white">Benjamin Carter</span>
                  <span className="text-xs text-white/40">•</span>
                  <span className="text-xs font-medium text-indigo-400">X User</span>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-indigo-500/5 border border-white/5 backdrop-blur-sm hover:bg-indigo-500/10 transition-colors">
                <div className="flex items-center gap-1 text-indigo-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 text-sm sm:text-base text-center italic mb-4">
                  "I was literally looking for an extension exactly like this today, app looks awesome."
                </p>
                <div className="mt-auto flex items-center gap-2">
                  <span className="text-xs font-bold text-white">Empuc1a</span>
                  <span className="text-xs text-white/40">•</span>
                  <span className="text-xs font-medium text-indigo-400">Reddit User</span>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-indigo-500/5 border border-white/5 backdrop-blur-sm hover:bg-indigo-500/10 transition-colors">
                <div className="flex items-center gap-1 text-indigo-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 text-sm sm:text-base text-center italic mb-4">
                  "Finally no longer need to pull out the phone for every QR code, this is great"
                </p>
                <div className="mt-auto flex items-center gap-2">
                  <span className="text-xs font-bold text-white">FromAndToUnknown</span>
                  <span className="text-xs text-white/40">•</span>
                  <span className="text-xs font-medium text-indigo-400">Reddit User</span>
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 p-3 rounded-full bg-black/50 hover:bg-red-500/80 text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/z8i8ppWZVLY?autoplay=1"
              title="HoverQR Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
