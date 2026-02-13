import Footer from "../components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | HoverQR",
  description:
    "Privacy Policy for HoverQR – Instantly Scan & Generate Chrome Extension",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="mt-20 mb-10 grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-6 text-sm font-medium text-white hover:text-indigo-500 transition"
        >
          <ArrowLeft width={20} /> Back to Home
        </Link>

        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Privacy <span className="text-indigo-500">Policy</span>
        </h1>

        <p className="mb-6 text-sm sm:text-base text-white">
          This Privacy Policy explains how the browser extension{" "}
          <strong>“HoverQR – Instantly Scan & Generate”</strong> handles user data.
          The extension is designed with privacy in mind and does not collect,
          store, or sell personal information.
        </p>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Data Collection</h2>
          <p className="text-sm sm:text-base text-white">
            HoverQR does not collect or transmit personally identifiable
            information such as names, email addresses, phone numbers,
            passwords, or account credentials.
          </p>
        </section>

        <section className="space-y-4 mt-6">
          <h2 className="text-xl font-semibold">Website Content Access</h2>
          <p className="text-sm sm:text-base text-white">
            HoverQR accesses only visible content on web pages, such as images,
            links, or user-selected areas, when you actively use features like
            hover-based scanning or snip-based scanning. All processing is
            performed locally within your browser, and no data is sent to
            external servers.
          </p>
        </section>

        <section className="space-y-4 mt-6">
          <h2 className="text-xl font-semibold">User Activity</h2>
          <p className="text-sm sm:text-base text-white">
            The extension detects user interactions such as mouse movement or
            clicks solely to enable its core features. This activity is processed
            in real time, is not logged, and is not shared with third parties.
          </p>
        </section>

        <section className="space-y-4 mt-6">
          <h2 className="text-xl font-semibold">Local Storage</h2>
          <p className="text-sm sm:text-base text-white">
            HoverQR uses browser storage to save user preferences and
            feature-related data, such as settings and the history of scanned or
            generated QR codes. This data remains on your device and can be
            removed at any time by clearing browser data or uninstalling the
            extension.
          </p>
        </section>

        <section className="space-y-4 mt-6">
          <h2 className="text-xl font-semibold">Payments and Licensing</h2>
          <p className="text-sm sm:text-base text-white">
            HoverQR does not collect or store payment information. All payments
            and license activations are handled by third-party payment providers.
            HoverQR only verifies license validity and does not have access to
            users’ financial details.
          </p>
        </section>

        <section className="space-y-4 mt-6">
          <h2 className="text-xl font-semibold">Open-Source Libraries & Assets</h2>
          <p className="text-sm sm:text-base text-white">
            HoverQR uses open-source libraries such as{" "}
            <strong>qrcodejs</strong> for QR code generation and{" "}
            <strong>jsQR</strong> for QR code decoding. These libraries run
            entirely within your browser, and no data is transmitted to their
            authors or external servers.
          </p>
          <p className="text-sm sm:text-base text-white mt-2">
            Icons and vector assets used in HoverQR are sourced from public
            domain (PD) or permissively licensed providers. Proper attribution
            is provided on the{" "}
            <Link
              href="/credits"
              className="text-indigo-500 hover:underline"
            >
              Credits
            </Link>{" "}
            page.
          </p>
        </section>

        <section className="space-y-4 mt-6">
          <h2 className="text-xl font-semibold">Data Sharing</h2>
          <p className="text-sm sm:text-base text-white">
            HoverQR does not sell, rent, or share user data with third parties.
            All processing is performed locally unless explicitly stated
            otherwise.
          </p>
        </section>

        <section className="space-y-4 mt-6">
          <h2 className="text-xl font-semibold">Security</h2>
          <p className="text-sm sm:text-base text-white">
            Reasonable measures are taken to ensure the extension operates
            securely. Since no sensitive or personal data is collected, the
            risk of data exposure is significantly reduced.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
