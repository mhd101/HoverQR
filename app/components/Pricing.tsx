"use client";

import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-sm">
          <span className="text-sm font-medium text-indigo-400">Pricing</span>
        </div>
        <h2 className="text-3xl px-2 sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Simple <span className="text-indigo-500">Pricing.</span> No <span className="text-indigo-500">Subscriptions.</span>
        </h2>
        <p className="mt-6 text-lg md:text-xl px-4 text-white/60 font-light">
          Start free. Upgrade once. Use forever.
        </p>
      </motion.div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {/* Free Plan */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col rounded-3xl border border-white/10 bg-indigo-500/5 backdrop-blur-lg p-10 hover:border-white/20 hover:bg-indigo-500/10 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative z-10"
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            Free
          </h3>
          <p className="text-base text-white/50 mb-8">
            Essential QR features to get started.
          </p>

          <div className="mb-8">
            <span className="text-5xl font-extrabold text-white">$0</span>
          </div>

          <ul className="space-y-4 mb-10 flex-1">
            <li className="flex items-center gap-3 text-base text-white/80">
              <Check className="h-5 w-5 text-indigo-400" />
              Hover to Scan
            </li>
            <li className="flex items-center gap-3 text-base text-white/80">
              <Check className="h-5 w-5 text-indigo-400" />
              Hover to Generate
            </li>
            <li className="flex items-center gap-3 text-base text-white/80">
              <Check className="h-5 w-5 text-indigo-400" />
              QR Inspector
            </li>
            <li className="flex items-center gap-3 text-base text-white/30">
              <X className="h-5 w-5" />
              Save QR History
            </li>
            <li className="flex items-center gap-3 text-base text-white/30">
              <X className="h-5 w-5" />
              Generate and Customize QR
            </li>
            <li className="flex items-center gap-3 text-base text-white/30">
              <X className="h-5 w-5" />
              Snip & Scan
            </li>
            <li className="flex items-center gap-3 text-base text-white/30">
              <X className="h-5 w-5" />
              Select To Generate
            </li>
            <li className="flex items-center gap-3 text-base text-white/30">
              <X className="h-5 w-5" />
              Download QRs
            </li>
          </ul>

          <a
            href="https://chromewebstore.google.com/detail/mjgheejcnmceaaobpilbpmehlpkbigmp?utm_source=item-share-cb"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center rounded-xl bg-white/5 border border-white/10 py-3 sm:py-4 text-lg font-bold text-white hover:bg-white/10 transition-colors"
          >
            Get Started Free
          </a>
        </motion.div>

        {/* Premium Plan */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex flex-col rounded-3xl border-2 border-indigo-500 bg-indigo-500/5 backdrop-blur-lg p-10 shadow-[0_8px_40px_0_rgba(99,102,241,0.2)] z-10"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-indigo-500 px-4 py-1 text-sm font-bold text-white tracking-wide">
            BEST VALUE
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">
            Lifetime Premium
          </h3>
          <p className="text-base text-indigo-200/60 mb-8">
            Unlock all features with a one-time purchase.
          </p>

          <div className="flex items-end gap-3 mb-2">
            <span className="text-5xl font-extrabold text-white">$12</span>
            <span className="text-xl text-white/40 line-through mb-1">$20</span>
          </div>
          <p className="text-indigo-400 text-sm font-medium mb-8">
            One-time payment
          </p>

          <ul className="space-y-4 mb-10 flex-1">
            <li className="flex items-center gap-3 text-base text-white/90">
              <div className="p-1 rounded-full bg-indigo-500/20">
                <Check className="h-4 w-4 text-indigo-400" />
              </div>
              Everything in Free
            </li>
            <li className="flex items-center gap-3 text-base text-white/90">
              <div className="p-1 rounded-full bg-indigo-500/20">
                <Check className="h-4 w-4 text-indigo-400" />
              </div>
              Save QR History
            </li>
            <li className="flex items-center gap-3 text-base text-white/90">
              <div className="p-1 rounded-full bg-indigo-500/20">
                <Check className="h-4 w-4 text-indigo-400" />
              </div>
              Generate and Customize QR
            </li>
            <li className="flex items-center gap-3 text-base text-white/90">
              <div className="p-1 rounded-full bg-indigo-500/20">
                <Check className="h-4 w-4 text-indigo-400" />
              </div>
              Snip & Scan
            </li>
            <li className="flex items-center gap-3 text-base text-white/90">
              <div className="p-1 rounded-full bg-indigo-500/20">
                <Check className="h-4 w-4 text-indigo-400" />
              </div>
              Select to Generate
            </li>
            <li className="flex items-center gap-3 text-base text-white/90">
              <div className="p-1 rounded-full bg-indigo-500/20">
                <Check className="h-4 w-4 text-indigo-400" />
              </div>
              Download QRs
            </li>
            <li className="flex items-center gap-3 text-base text-white/90">
              <div className="p-1 rounded-full bg-indigo-500/20">
                <Check className="h-4 w-4 text-indigo-400" />
              </div>
              Future Updates Included
            </li>
          </ul>

          <a
            href="https://dodo.pe/hoverqr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center rounded-xl bg-indigo-600 py-3 sm:py-4 text-lg font-bold text-white hover:bg-indigo-500 transition-colors shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]"
          >
            Upgrade to Premium
          </a>
        </motion.div>

      </div>
    </section>
  );
}
