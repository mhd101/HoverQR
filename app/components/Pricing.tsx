import { Check, X } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 px-4 bg-slate-50">
      
      {/* Heading */}
      <div className="text-center max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          Simple <span className="text-indigo-500">Pricing.</span> No{" "}
          <span className="text-indigo-500">Subscriptions</span>
        </h2>
        <p className="mt-6 text-slate-600 text-base md:text-lg">
          Start free. Upgrade once. Use forever.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {/* Free Plan */}
        <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8">
          <h3 className="text-xl font-semibold text-slate-900">
            Free
          </h3>
          <p className="mt-2 text-slate-600">
            Essential QR features to get started.
          </p>

          <p className="mt-6 text-3xl font-bold text-slate-900">
            $0
          </p>

          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-indigo-500" />
              Hover to scan QR codes
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-indigo-500" />
              Hover to generate QR for links
            </li>
            <li className="flex items-center gap-2 text-slate-400">
              <X className="h-4 w-4" />
              Save QR history
            </li>
            <li className="flex items-center gap-2 text-slate-400">
              <X className="h-4 w-4" />
              Generate Custom QR
            </li>
            <li className="flex items-center gap-2 text-slate-400">
              <X className="h-4 w-4" />
              Snip & scan QR
            </li>
            <li className="flex items-center gap-2 text-slate-400">
              <X className="h-4 w-4" />
              Generate QR from selection
            </li>
          </ul>

          <div className="mt-auto pt-8">
            <a
              href="https://chromewebstore.google.com/detail/mjgheejcnmceaaobpilbpmehlpkbigmp?utm_source=item-share-cb"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center rounded-lg border border-slate-300 py-3 font-medium text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Free
            </a>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="relative flex flex-col rounded-2xl border-2 border-indigo-500 bg-white p-8">
          <span className="absolute -top-3 right-6 rounded-full bg-indigo-500 px-3 py-1 text-xs font-medium text-white">
            Best Value
          </span>

          <h3 className="text-xl font-semibold text-slate-900">
            Lifetime Premium
          </h3>
          <p className="mt-2 text-slate-600">
            Unlock all features with a one-time purchase.
          </p>

          <div className="mt-6 flex items-end gap-2">
            <p className="text-4xl font-bold text-slate-900">$12</p>
            <p className="text-sm text-slate-500 line-through">$20</p>
          </div>

          <p className="mt-1 text-sm text-slate-500">
            One-time payment
          </p>

          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-indigo-500" />
              Everything in Free
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-indigo-500" />
              Save history (preview, customization & download)
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-indigo-500" />
              Generate custom QR
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-indigo-500" />
              Snip & scan QR codes
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-indigo-500" />
              Generate QR from any text
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-indigo-500" />
              Future updates included
            </li>
          </ul>

          <div className="mt-auto pt-8">
            <a
              href="https://dodo.pe/hoverqr"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center rounded-lg bg-indigo-500 py-3 font-medium text-white hover:opacity-90 transition-opacity"
            >
              Upgrade to Premium
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
