import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "HoverQR - Instantly Scan & Generate",
  description: "Scan or generate QR codes instantly by just hovering over links and images. No clicks required.",
  keywords: [
    "qr code scanner",
    "qr code generator",
    "hoverqr",
    "scan QR code on browser",
    "qr code extension",
    "qr code",
    "free static qr code generator",
    "hover qr",
    "hover to scan qr",
    "qr code reader",
    "qr code reader extension",
    "qr code chrome extension"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "HoverQR - Instantly Scan & Generate",
    description: "Scan or generate QR codes instantly by hovering over links and images. No clicks required.",
    url: "https://hoverqr.in",
    siteName: "HoverQR"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q1YV0LZMHJ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());

            gtag('config', "AW-17938295094"); // google ads
            gtag('config', 'G-Q1YV0LZMHJ'); // google analytics
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} antialiased bg-slate-900 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
