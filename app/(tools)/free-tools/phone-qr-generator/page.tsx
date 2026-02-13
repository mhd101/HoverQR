import { ChromeExtPromo } from "../components/ChromeExtPromo";
import { FreeToolsHeader } from "../components/FreeToolsHeader";
import { QRGeneratorClient } from "../components/QRGeneratorClient";

export const metadata = {
    title: "Free Phone Number QR Code Generator – Create Call QR Codes",
    description:
        "Convert a phone number into a QR code that instantly opens the dialer. Ideal for business cards, contact sharing, and offline promotions.",
    keywords: [
        "phone number qr code generator",
        "create phone number qr code",
        "phone to qr code",
        "qr code for phone number",
        "generate phone number qr code",
        "phone number qr code creator",
        "phone number qr code maker",
        "call qr code generator",
        "business card phone qr code",
        "contact sharing phone qr code"
    ]
};

export default function PhoneQRCodeGenerator() {

    return (
        <>
            <FreeToolsHeader title="Phone" description="Convert a phone number into a QR code that instantly opens the dialer. Ideal for business cards, contact sharing, and offline promotions." />
            <QRGeneratorClient type="phone" />
            <div className="mt-10 border-t border-indigo-500/20">
            <ChromeExtPromo />
            </div>
        </>

    );
}