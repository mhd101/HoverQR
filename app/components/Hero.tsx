import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-24 pb-20 px-4 text-center flex flex-col items-center gap-4">

      {/* Badge */}
      <div className="mb-6 flex items-center gap-3 rounded-full px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 text-white w-fit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#6366f1"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"
          />
        </svg>
        <span className="text-sm font-medium opacity-80">
          Zero-friction QR scanning
        </span>
      </div>

      {/* Headings */}
      <div>
        <h1 className="text-5xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white">
          <span className="text-brand">Hover<span className="text-[#6366f1]">QR</span></span>
        </h1>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-5xl font-semibold ">
          Instantly <span className="text-[#6366f1]">Scan</span> & <span className="text-[#6366f1]">Generate</span>
        </h2>
      </div>

      {/* Description */}
      <p className="mt-6 text-base sm:text-lg max-w-2xl mx-auto text-white/80">
        Scan QR codes just by hovering. Generate them from any link or text.
        Works everywhere—even inside videos. No clicks, no friction.
      </p>

      {/* CTA */}
      {/* CTA */}
      <div className="flex justify-center mt-10">
        <a
          href="https://chromewebstore.google.com/detail/mjgheejcnmceaaobpilbpmehlpkbigmp?utm_source=item-share-cb"
          target="_blank"
          rel="noopener noreferrer"
          className="
      relative inline-flex items-center gap-2
      px-6 py-3 rounded-lg
      text-base sm:text-lg font-semibold text-white
      bg-[#6366f1]
      transition-all duration-300 ease-out
      hover:-translate-y-1 hover:scale-[1.03]
      hover:shadow-[0_0_30px_rgba(99,102,241,0.65)]
      active:scale-100
      focus:outline-none
      group
    "
        >
          {/* Glow layer */}
          <span
            className="
        absolute inset-0 rounded-lg
        bg-[#6366f1]
        opacity-40 blur-xl
        transition-opacity duration-300
        group-hover:opacity-70
        -z-10
      "
          />

          <Image
            src="/images/chrome.png"
            alt="Chrome Logo"
            width={24}
            height={24}
          />
          Add to Chrome – Free
        </a>
      </div>

      <p className="mt-4 text-lg text-white/80">
        The fastest way to work with QR codes in Chrome
      </p>

    </section>
  );
}
