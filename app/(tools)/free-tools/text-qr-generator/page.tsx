import { ChromeExtPromo } from "../components/ChromeExtPromo";
import { FreeToolsHeader } from "../components/FreeToolsHeader";
import { QRGeneratorClient } from "../components/QRGeneratorClient";

export const metadata = {
    title: "Free Text to QR Code Generator – Convert Text into QR Code",
    description:
        "Create a QR code from plain text instantly. Share notes, instructions, codes, or information in a simple scannable format.",
    keywords: [
        "text qr code generator",
        "convert text to qr code",
        "plain text qr code",
        "qr code for text",
        "generate qr code from text",
        "text to qr code creator",
        "text to qr code maker",
        "qr code for notes",
        "qr code for instructions",
        "qr code for information sharing"
    ]
};

export default function TextQRCodeGenerator() {

    return (
        <>
            <FreeToolsHeader title="Text" description="Create a QR code from plain text instantly. Share notes, instructions, codes, or information in a simple scannable format." />
            <QRGeneratorClient type="text" />
            <div className="mt-10 border-t border-indigo-500/20">
            <ChromeExtPromo />
            </div>
        </>

    );
}