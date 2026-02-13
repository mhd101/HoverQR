"use client";

import Link from "next/link";

export default function Footer() {

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10">

          {/* Brand */}
          <div>
            <Link href="/" className="text-3xl font-bold text-slate-900">
              Hover<span className="text-indigo-500">QR</span>
            </Link>
            <p className="mt-3 text-sm text-slate-600 max-w-xs">
              Instantly scan and generate QR codes just by hovering.
              No clicks. No downloads.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">

            {/* Product */}
            <div>
              <h4 className="text-sm font-semibold text-slate-900">
                Product
              </h4>

              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>
                  <Link href="/#features" className="hover:text-indigo-500">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="hover:text-indigo-500">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="hover:text-indigo-500">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Free Tools */}
            <div>
              <h4 className="text-sm font-semibold text-slate-900">
                Free Tools
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>
                  <a
                    href="/free-tools/url-qr-generator"
                    className="hover:text-indigo-500"
                  >
                    URL QR Code
                  </a>
                </li>
                <li>
                  <a
                    href="/free-tools/text-qr-generator"
                    className="hover:text-indigo-500"
                  >
                    Text QR Code
                  </a>
                </li>
                <li>
                  <a
                    href="/free-tools/email-qr-generator"
                    className="hover:text-indigo-500"
                  >
                    Email QR Code
                  </a>
                </li>
                <li>
                  <a
                    href="/free-tools/phone-qr-generator"
                    className="hover:text-indigo-500"
                  >
                    Phone QR Code
                  </a>
                </li>
                <li>
                  <a
                    href="/free-tools/sms-qr-generator"
                    className="hover:text-indigo-500"
                  >
                    SMS QR Code
                  </a>
                </li>
                <li>
                  <a
                    href="/free-tools/wifi-qr-generator"
                    className="hover:text-indigo-500"
                  >
                    WiFi QR Code
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold text-slate-900">
                Legal
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>
                  <a
                    href="/privacy-policy"
                    className="hover:text-indigo-500"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-service"
                    className="hover:text-indigo-500"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-slate-900">
                Contact
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>
                  <a
                    href="/contact-us"
                    className="hover:text-indigo-500"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} HoverQR. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
