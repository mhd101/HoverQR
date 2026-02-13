import { ChromeExtPromo } from "../components/ChromeExtPromo";
import { FreeToolsHeader } from "../components/FreeToolsHeader";
import { QRGeneratorClient } from "../components/QRGeneratorClient";

export const metadata = {
    title: "Free Email QR Code Generator – Create QR Codes for Email",
    description:
        "Generate a QR code that opens a pre-filled email with recipient, subject, and message. Perfect for business cards and customer inquiries.",
    keywords: [
        "email qr code generator",
        "create email qr code",
        "email to qr code",
        "qr code for email",
        "generate email qr code",
        "email qr code creator",
        "email qr code maker",
        "email qr code with subject and message",
        "business card email qr code",
        "customer inquiry email qr code"
    ]
};

export default function EmailQRCodeGenerator() {

    return (
        <>
            <FreeToolsHeader title="Email" description="Generate a QR code that opens a pre-filled email with recipient, subject, and message. Perfect for business cards and customer inquiries." />
            <QRGeneratorClient type="email" />
            <div className="mt-10 border-t border-indigo-500/20">
            <ChromeExtPromo />
            </div>
        </>

    );
}