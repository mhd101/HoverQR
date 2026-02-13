import Link from "next/link";
import { Mail, Phone, MessageCircle, FileText, Link2, LucideWifiHigh } from "lucide-react";
import { ChromeExtPromo } from "./components/ChromeExtPromo";


export const metadata = {
    title: "Free QR Code Generator & Scanner Tools",
    description:
        "Generate and scan QR codes online for free. Create custom QR codes for URL, text, email, phone, SMS, WiFi, PDF, and business cards — fast and easy. No signup required!",
    keywords: [
        "free qr code generator",
        "online qr code scanner",
        "custom qr code maker",
        "url to qr code",
        "text to qr code",
        "email to qr code",
        "phone number qr code",
        "sms qr code",
        "wifi qr code generator",
        "pdf qr code generator",
        "business card qr code generator",
        "link to qr code",
        "whatsapp web code qr",
        "qr code business card",
        "custom qr code",
        "create a qr code for url",
        "qr code generator with logo",
        "url to qr code",
        "qr code with logo",
        "qr code for website",
        "vcard qr code",
        "pdf to qr code",
        "scan qr code from image",
        "text to qr code",
        "qr code for google form",
        "facebook qr code",
        "read qr code from image",
        "qr code dynamic",
        "qr generator pdf",
        "bulk qr generator",
        "qr code tools",
        "qr tools",
        "custom qr code generator",
        "turn link into qr code",
        "convert link to qr code",
        "qr code generator for business card",
        "link to barcode",
        "bulk qr code generator",
        "facebook qr code generator",
        "contact qr code",
        "qr code generator for google forms",
        "pdf to qr code free",
        "whatsapp qr code generator",
        "wifi qr code scanner",
        "image to qr code",
        "google review qr code generator",
        "create vcard qr code",
        "scan qr code from screenshot",
        "youtube qr code generator",
        "qr code generator for email",
        "batch qr code generator",
        "create qr from link",
        "create qr code with logo free",
        "create a qr code for a video",
        "mass qr code generator",
        "visiting card qr generator",
        "email qr generator",
        "generate qr code for google map",
        "qr scanner for wifi",
        "qr code generator for multiple links",
        "multi url qr code"
    ]
};

interface Tool {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    path: string;
}

export default function FreeTools() {
    const tools: Tool[] = [
        {
            id: "url",
            title: "URL QR Generator",
            description: "Convert any website link or URL into a scannable QR code with custom colors and styles.",
            icon: <Link2 className="w-8 h-8" />,
            path: "/free-tools/url-qr-generator"
        },
        {
            id: "email",
            title: "Email QR Generator",
            description: "Create QR codes that open email clients with pre-filled subject and message. Perfect for contact sharing.",
            icon: <Mail className="w-8 h-8" />,
            path: "/free-tools/email-qr-generator"
        },
        {
            id: "phone",
            title: "Phone QR Generator",
            description: "Generate QR codes that trigger phone calls when scanned. Ideal for business contact cards and flyers.",
            icon: <Phone className="w-8 h-8" />,
            path: "/free-tools/phone-qr-generator"
        },
        {
            id: "sms",
            title: "SMS QR Generator",
            description: "Create QR codes that open SMS/text messaging with pre-filled phone numbers and messages.",
            icon: <MessageCircle className="w-8 h-8" />,
            path: "/free-tools/sms-qr-generator"
        },
        {
            id: "text",
            title: "Text QR Generator",
            description: "Convert plain text or code snippets into QR codes. Great for sharing information quickly.",
            icon: <FileText className="w-8 h-8" />,
            path: "/free-tools/text-qr-generator"
        },
        {
            id: "wifi",
            title: "WiFi QR Generator",
            description: "Generate QR codes for WiFi networks. Share your WiFi credentials easily with friends and guests.",
            icon: <LucideWifiHigh className="w-8 h-8" />,
            path: "/free-tools/wifi-qr-generator"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <div className="grow">
                <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        {/* Header */}
                        <div className="mb-12 text-center">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                                Free <span className="text-indigo-500">QR</span> Code <span className="text-indigo-500">Tools</span>
                            </h1>

                            <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto">
                                Explore our complete collection of free QR code tools to generate, customize, and scan QR codes instantly. Create QR codes for URLs, text, email, phone numbers, SMS, WiFi, PDFs, business cards, Google Forms, and more. Design custom QR codes with logos or scan QR codes from images and screenshots — all in one place with HoverQR.
                            </p>
                        </div>

                        {/* Tools Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
                            {tools.map((tool) => (
                                <Link
                                    key={tool.id}
                                    href={tool.path}
                                    className="group h-full"
                                >
                                    <div className="
                                        relative h-full min-h-62.5
                                        p-5 sm:p-6 rounded-xl
                                        border border-white/10 hover:border-indigo-500/50
                                        bg-white/3 hover:bg-white/8
                                        backdrop-blur-sm
                                        transition-all duration-300 ease-out
                                        hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]
                                        cursor-pointer
                                        flex flex-col items-center justify-start text-center
                                    ">

                                        <div className="relative z-10 flex flex-col h-full items-center gap-3">
                                            {/* Icon */}
                                            <div className="
                                                mb-3 sm:mb-4 inline-flex p-2.5 sm:p-3 rounded-lg
                                                bg-indigo-500/20
                                                group-hover:bg-indigo-500/30
                                                text-indigo-400 shrink-0
                                                group-hover:text-indigo-300
                                                transition-all duration-300
                                            ">
                                                {tool.icon}
                                            </div>

                                            {/* Title */}
                                            <h3 className="
                                                text-lg sm:text-xl font-bold mb-2 sm:mb-3
                                                text-white
                                                group-hover:text-indigo-300
                                                transition-colors duration-300
                                                line-clamp-2
                                            ">
                                                {tool.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="
                                                text-xs sm:text-sm text-white/70
                                                mb-4 leading-relaxed
                                                group-hover:text-white/80
                                                transition-colors duration-300
                                                line-clamp-3 sm:line-clamp-4
                                            ">
                                                {tool.description}
                                            </p>

                                            
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <div className="mt-8 border-t border-white/10">
                            <ChromeExtPromo />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
