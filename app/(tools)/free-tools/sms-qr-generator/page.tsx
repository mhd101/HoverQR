import { ChromeExtPromo } from "../components/ChromeExtPromo";
import { FreeToolsHeader } from "../components/FreeToolsHeader";
import { QRGeneratorClient } from "../components/QRGeneratorClient";

export const metadata = {
    title: "Free SMS QR Code Generator – Create Pre-Filled Message QR Codes",
    description:
        "Generate an SMS QR code that opens a pre-written text message on scan. Perfect for customer support, marketing campaigns, and quick message sharing.",
    keywords: [
        "sms qr code generator",
        "create sms qr code",
        "sms to qr code",
        "qr code for sms",
        "generate sms qr code",
        "sms qr code creator",
        "sms qr code maker",
        "pre-filled message qr code",
        "customer support sms qr code",
        "marketing campaign sms qr code"
    ]
};

export default function SMSQRCodeGenerator() {

    return (
        <>
            <FreeToolsHeader title="SMS" description="Generate an SMS QR code that opens a pre-written text message on scan. Perfect for customer support, marketing campaigns, and quick message sharing." />
            <QRGeneratorClient type="sms" />
            <div className="mt-10 border-t border-indigo-500/20">
            <ChromeExtPromo />
            </div>
        </>

    );
}