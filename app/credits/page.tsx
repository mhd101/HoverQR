import Footer from "../components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Credits & Attributions | HoverQR",
  description:
    "Open-source libraries and asset attributions used by HoverQR",
};

export default function CreditsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="mt-20 mb-10 grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link
          href="/privacy-policy"
          className="inline-flex items-center gap-2 mb-6 text-sm font-medium text-white hover:text-[#6366f1] transition"
        >
          <ArrowLeft width={20} /> Back to Home
        </Link>

        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          <span className="text-[#6366f1]">Credits</span> & <span className="text-[#6366f1]">Attributions</span>
        </h1>

        <p className="mb-8 text-sm sm:text-base text-white">
          HoverQR is built using high-quality open-source libraries and
          permissively licensed assets. We sincerely thank the creators and
          maintainers for their contributions to the open-source community.
        </p>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Icons & Vectors</h2>
          <p className="text-sm sm:text-base text-white">
            Vectors and icons by{" "}
            <a
              href="https://redl.ink/dariush/links?ref=svgrepo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6366f1] hover:underline"
            >
              Dariush Habibpour
            </a>{" "}
            licensed under the <strong>Public Domain (PD) License</strong>, via{" "}
            <a
              href="https://www.svgrepo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6366f1] hover:underline"
            >
              SVG Repo
            </a>.
          </p>
        </section>

        <section className="space-y-4 mt-6">
          <h2 className="text-xl font-semibold">QR Code Generation</h2>
          <p className="text-sm sm:text-base text-white">
            QR code generation is powered by{" "}
            <a
              href="https://github.com/davidshimjs/qrcodejs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6366f1] hover:underline"
            >
              qrcodejs
            </a>{" "}
            by davidshimjs.
          </p>
        </section>

        <section className="space-y-4 mt-6">
          <h2 className="text-xl font-semibold">QR Code Decoding</h2>
          <p className="text-sm sm:text-base text-white">
            QR code decoding is powered by{" "}
            <a
              href="https://github.com/cozmo/jsQR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6366f1] hover:underline"
            >
              jsQR
            </a>{" "}
            by cozmo.
          </p>
        </section>

        <section className="space-y-4 mt-6">
          <h2 className="text-xl font-semibold">License Notice</h2>
          <p className="text-sm sm:text-base text-white">
            All third-party libraries are used in accordance with their
            respective open-source licenses. HoverQR does not claim ownership
            over third-party code or assets.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
