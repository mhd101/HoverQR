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
    "QR code scanner",
    "QR code generator",
    "hover QR",
    "scan QR code on desktop",
    "Chrome QR extension"
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
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
