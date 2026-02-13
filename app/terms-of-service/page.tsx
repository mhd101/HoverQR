import Footer from "../components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service | HoverQR",
  description:
    "Terms of Service for HoverQR – Instantly Scan & Generate Chrome Extension",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="mt-16 sm:mt-20 mb-10 grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-6 text-sm font-medium text-white hover:text-indigo-500 transition"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          Back to Home
        </Link>

        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Terms of <span className="text-indigo-500">Service</span>
        </h1>

        <p className="mb-6 text-sm sm:text-base text-white">
          These Terms of Service govern your use of the browser extension{" "}
          <strong>“HoverQR – Instantly Scan & Generate”</strong>. By
          installing or using the extension, you agree to these terms.
        </p>

        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">
            Use of the Extension
          </h2>
          <p className="text-sm sm:text-base text-white">
            HoverQR is provided for personal and commercial use as
            intended. You agree not to misuse, reverse engineer,
            decompile, or redistribute the extension or its features.
          </p>
        </section>

        <section className="space-y-4 mt-6">
          <h2 className="text-lg sm:text-xl font-semibold">License</h2>
          <p className="text-sm sm:text-base text-white">
            HoverQR grants you a limited, non-exclusive, non-transferable
            license to use the extension. Ownership of the extension and
            its intellectual property remains with the developer.
          </p>
        </section>

        {/* 🔐 License Activation Limit */}
        <section className="space-y-4 mt-6">
          <h2 className="text-lg sm:text-xl font-semibold">
            License Activation Limit
          </h2>
          <p className="text-sm sm:text-base text-white">
            Each license key may be activated a maximum of{" "}
            <strong>three (3) times</strong>, regardless of the device on
            which it is used. Once the activation limit is reached, the
            license key will be automatically disabled.
          </p>
          <p className="text-sm sm:text-base text-white">
            License keys are intended for individual use only. Sharing,
            reselling, or distributing license keys is strictly
            prohibited. This limitation is enforced to prevent abuse and
            unauthorized distribution of the extension.
          </p>
        </section>

        <section className="space-y-4 mt-6">
          <h2 className="text-lg sm:text-xl font-semibold">
            Payments and Licensing
          </h2>
          <p className="text-sm sm:text-base text-white">
            Certain features may require a paid license. All payments
            are processed by third-party payment providers. HoverQR does
            not store or process payment information.
          </p>
        </section>

        <section className="space-y-4 mt-6">
          <h2 className="text-lg sm:text-xl font-semibold">Availability</h2>
          <p className="text-sm sm:text-base text-white">
            The extension is provided on an “as-is” and “as-available”
            basis. We do not guarantee uninterrupted or error-free
            operation.
          </p>
        </section>

        <section className="space-y-4 mt-6">
          <h2 className="text-lg sm:text-xl font-semibold">
            Limitation of Liability
          </h2>
          <p className="text-sm sm:text-base text-white">
            To the maximum extent permitted by law, HoverQR shall not be
            liable for any direct, indirect, incidental, or
            consequential damages arising from the use or inability to
            use the extension.
          </p>
        </section>

        <section className="space-y-4 mt-6">
          <h2 className="text-lg sm:text-xl font-semibold">Termination</h2>
          <p className="text-sm sm:text-base text-white">
            We reserve the right to suspend or terminate access to the
            extension if these terms are violated. You may stop using
            the extension at any time by uninstalling it.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
