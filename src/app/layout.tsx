import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import CookieConsent from "@/components/CookieConsent";
import GoogleAnalyticsWrapper from "@/components/GoogleAnalyticsWrapper";
import GoogleTagManager from "@/components/GoogleTagManager";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://anwaltskanzlei.de"),
  title: {
    default: "Anwaltskanzlei Gür Law Firm",
    template: "%s | Anwaltskanzlei Gür",
  },
  description:
    "Expert legal counsel in traffic and criminal law matters. Professional representation with years of experience in Hamburg.",
  keywords: [
    "law firm",
    "traffic law",
    "criminal law",
    "Hamburg",
    "legal counsel",
    "Anwaltskanzlei",
    "lawyer",
  ],
  authors: [{ name: "Anwaltskanzlei Gür" }],
  creator: "Anwaltskanzlei Gür",
  publisher: "Anwaltskanzlei Gür",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anwaltskanzlei.de",
    title: "Anwaltskanzlei Gür Law Firm",
    description: "Expert legal counsel in traffic and criminal law matters.",
    siteName: "Anwaltskanzlei Gür",
    images: [
      {
        url: "/Anwaltskanzlei_Guer.png",
        width: 1200,
        height: 630,
        alt: "Anwaltskanzlei Gür Law Firm",
      },
      {
        url: "/Anwaltskanzlei_Guer.png",
        width: 600,
        height: 600,
        alt: "Anwaltskanzlei Gür Law Firm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anwaltskanzlei Gür Law Firm",
    description: "Expert legal counsel in traffic and criminal law matters.",
    images: ["/Anwaltskanzlei_Guer.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <GoogleTagManager />
        <GoogleAnalyticsWrapper />
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
