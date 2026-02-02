export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Hover<span className="text-[#6366f1]">QR</span>
            </h3>
            <p className="mt-3 text-sm text-slate-600 max-w-xs">
              Instantly scan and generate QR codes by hovering.
              No clicks. No friction.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">

            {/* Product */}
            <div>
              <h4 className="text-sm font-semibold text-slate-900">
                Product
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li><a href="#features" className="hover:text-[#6366f1]">Features</a></li>
                <li><a href="#pricing" className="hover:text-[#6366f1]">Pricing</a></li>
                <li><a href="#faq" className="hover:text-[#6366f1]">FAQ</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold text-slate-900">
                Legal
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li><a href="/privacy" className="hover:text-[#6366f1]">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-[#6366f1]">Terms of Service</a></li>
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
