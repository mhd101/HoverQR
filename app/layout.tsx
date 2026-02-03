import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "HoverQR - Instantly Scan & Generate",
  description: "Scan or generate QR codes instantly by hovering over links and images. No clicks required.",
  keywords: [
    "qr code scanner",
    "qr code generator",
    "hoverqr",
    "scan QR code on browser",
    "qr code extension",
    "qr code",
    "hover qr",
    "hover to scan qr",
    "qr code reader",
    "qr code reader extension",
    "qr code chrome extension"
  ],
  robots: "index, follow",
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q1YV0LZMHJ"></script>
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
