import { ChromeExtPromo } from "../components/ChromeExtPromo";
import { FreeToolsHeader } from "../components/FreeToolsHeader";
import { QRGeneratorClient } from "../components/QRGeneratorClient";

export const metadata = {
    title: "WiFi QR Code Generator – Convert Any WiFi Network into a QR Code",
    description:
        "Turn any WiFi network into a QR code instantly. Create a QR code for WiFi credentials, and generate scannable codes for home networks, office networks, and public hotspots.",
    keywords: [
        "wifi qr code generator",
        "wifi credentials qr code",
        "generate wifi qr code",
        "wifi network qr code",
        "create wifi qr code",
        "wifi qr code maker",
        "wifi qr code online",
        "wifi qr code generator free",
        "wifi qr code generator with password",
        "wifi qr code generator for home",
        "wifi qr code generator for office",
        "public wifi qr code generator",
        "wifi hotspot qr code generator",
        "qr code for wifi sharing",
        "qr code for wifi credentials",
        "qr code for wifi network",
        "qr code for wifi access",
        "qr code for wifi login",
        "qr code for wifi password",
        "qr code for wifi security",
        "qr code for wifi encryption",
        "qr code for wifi setup",
        "qr code for wifi configuration",
        "qr code for wifi connection",
        "qr code for wifi details",
        "qr code for wifi information",
        "qr code for wifi access point",
        "qr code for wifi ssid",
        "qr code for wifi type",
        "qr code for wifi auth",
        "qr code for wifi encryption type",
        "qr code for wifi password protection",
        "qr code for wifi no password",
        "qr code for wifi open network",
        "qr code for wifi wpa",
        "qr code for wifi wpa2",
        "qr code for wifi wpa3",
        "qr code for wifi enterprise",
        "qr code for wifi personal",
        "qr code for wifi hidden network",
    ]
};

export default function WifiQRCodeGenerator() {

    return (
        <>
            <FreeToolsHeader title="WiFi" description="Generate a QR code for your WiFi network. Share your WiFi credentials with others by scanning a QR code." />
            <QRGeneratorClient type="wifi" />
            <div className="mt-10 border-t border-indigo-500/20">
            <ChromeExtPromo />
            </div>
        </>

    );
}