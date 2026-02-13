import { ChromeExtPromo } from "../components/ChromeExtPromo";
import { FreeToolsHeader } from "../components/FreeToolsHeader";
import { QRGeneratorClient } from "../components/QRGeneratorClient";

export const metadata = {
    title: "URL to QR Code Generator – Convert Any Link into a QR Code",
    description:
        "Turn any website link into a QR code instantly. Create a QR code for URL, convert link to QR code, and generate scannable codes for websites, Google Forms, YouTube videos, and online pages.",
    keywords: [
        "url qr code generator",
        "link to qr code",
        "website qr code generator",
        "google forms qr code",
        "youtube qr code generator",
        "online page qr code",
        "convert url to qr code",
        "generate qr code for website",
        "free url qr code generator"
    ]
};

export default function URLQRCodeGenerator() {

    return (
        <>
            <FreeToolsHeader title="URL" description="Turn any website link into a QR code instantly. Create a QR code for URL, convert link to QR code, and generate scannable codes for websites, Google Forms, YouTube videos, and online pages." />
            <QRGeneratorClient type="url" />
            <div className="mt-10 border-t border-indigo-500/20">
            <ChromeExtPromo />
            </div>
        </>

    );
}