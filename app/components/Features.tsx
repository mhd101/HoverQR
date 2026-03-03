"use client";

import { motion } from "framer-motion";
import { ScanLine, Wand2, Search, History, Palette, Scissors, MousePointerClick, Download, TextCursorIcon } from "lucide-react";

const features = [
  { id: "scan", title: "Hover to Scan", description: "Instantly scan any QR code simply by hovering over it. No clicks required.", icon: MousePointerClick },
  { id: "generate", title: "Hover to Generate", description: "Create QR codes on the fly. Just hover over links and images.", icon: Wand2 },
  { id: "inspector", title: "QR Inspector", description: "Analyze the contents and safety of any QR code seamlessly.", icon: Search },
  { id: "history", title: "Save History", description: "Keep track of all your scanned and generated QR codes effortlessly.", icon: History },
  { id: "customize", title: "Generate & Customize QR", description: "Personalize your QR codes with custom colors, logos, and styles.", icon: Palette },
  { id: "snip", title: "Snip & Scan", description: "Take a quick snippet of your screen to scan hidden or tricky QRs.", icon: Scissors },
  { id: "select", title: "Select to Generate", description: "Highlight any text on a page to instantly make a QR code out of it.", icon: TextCursorIcon },
  { id: "download", title: "Download QRs", description: "Export your QR codes in high quality for print and digital use.", icon: Download },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 }
  },
};

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden bg-slate-900">
      {/* Background decorations */}
      <div className="absolute top-[40%] left-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Heading */}
      <div className="text-center relative z-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-sm">
            <span className="text-sm font-medium text-indigo-400">Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Everything you need for <span className="text-indigo-500">QR codes</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-white/60 font-light px-4">
            Designed to work where other QR tools fail. Seamless, instant, everywhere. Replacing clunky workflows with magic.
          </p>
        </motion.div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((f) => (
            <motion.div
              key={f.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group relative bg-indigo-500/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 overflow-hidden transition-all duration-300 hover:border-indigo-500/30 hover:bg-indigo-500/10 cursor-pointer shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
            >
              {/* Internal glowing effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white/80 mb-6 group-hover:scale-110 group-hover:bg-indigo-500/20 group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-all duration-500 ease-out">
                  <f.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-400 transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-[15px] group-hover:text-white/70 transition-colors duration-300">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
