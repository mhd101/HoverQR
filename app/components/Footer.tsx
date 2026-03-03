"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {

  return (
    <footer className="bg-slate-900 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[200px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 py-16 relative z-10"
      >

        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-12">

          {/* Brand */}
          <div className="md:w-1/3 text-center md:text-left">
            <Link href="/" className="text-3xl font-black tracking-tighter text-white">
              Hover<span className="text-indigo-500">QR</span>
            </Link>
            <p className="mt-4 text-base font-light text-white/50 max-w-xs mx-auto md:mx-0 leading-relaxed">
              Instantly scan and generate QR codes just by hovering.
              No clicks. No downloads.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:w-2/3">

            {/* Product */}
            <div>
              <h4 className="text-sm font-bold text-white tracking-wide uppercase">
                Product
              </h4>

              <ul className="mt-6 space-y-4 text-sm text-white/50">
                <li>
                  <Link href="/#features" className="hover:text-indigo-400 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#testimonials" className="hover:text-indigo-400 transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="hover:text-indigo-400 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="hover:text-indigo-400 transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Free Tools */}
            <div>
              <h4 className="text-sm font-bold text-white tracking-wide uppercase">
                Free Tools
              </h4>
              <ul className="mt-6 space-y-4 text-sm text-white/50">
                <li>
                  <a
                    href="/free-tools/url-qr-generator"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    URL QR Code
                  </a>
                </li>
                <li>
                  <a
                    href="/free-tools/text-qr-generator"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Text QR Code
                  </a>
                </li>
                <li>
                  <a
                    href="/free-tools/email-qr-generator"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Email QR Code
                  </a>
                </li>
                <li>
                  <a
                    href="/free-tools/phone-qr-generator"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Phone QR Code
                  </a>
                </li>
                <li>
                  <a
                    href="/free-tools/sms-qr-generator"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    SMS QR Code
                  </a>
                </li>
                <li>
                  <a
                    href="/free-tools/wifi-qr-generator"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    WiFi QR Code
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-bold text-white tracking-wide uppercase">
                Legal
              </h4>
              <ul className="mt-6 space-y-4 text-sm text-white/50">
                <li>
                  <a
                    href="/privacy-policy"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-service"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-bold text-white tracking-wide uppercase">
                Contact
              </h4>
              <ul className="mt-6 space-y-4 text-sm text-white/50">
                <li>
                  <a
                    href="/contact-us"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-center items-center gap-4">
          <p className="text-sm text-white/40 font-light text-center">
            © {new Date().getFullYear()} HoverQR. All rights reserved.
          </p>
        </div>

      </motion.div>
    </footer>
  );
}
