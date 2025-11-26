import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import CookieConsent from "@/components/CookieConsent";
import GoogleAnalyticsWrapper from "@/components/GoogleAnalyticsWrapper";
import GoogleTagManager from "@/components/GoogleTagManager";
import StructuredData from "@/components/StructuredData";
import Chatbot from "@/components/Chatbot";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { locales } from "@/config/i18n.config";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export const metadata: Metadata = {
  metadataBase: new URL("https://anwaltskanzlei.de"),
  title: {
    default: "Anwaltskanzlei Gür Law Firm",
    template: "%s | Anwaltskanzlei Gür",
  },
  description:
    "Expert legal counsel in criminal law matters. Professional representation with years of experience in Hamburg.",
  keywords: [
    "law firm",
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
    description: "Expert legal counsel in criminal law matters.",
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
    description: "Expert legal counsel in criminal law matters.",
    images: ["/Anwaltskanzlei_Guer.png"],
  },
};

// Create a function to get messages
async function getMessages(locale: string) {
  try {
    return (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <GoogleTagManager />
          <GoogleAnalyticsWrapper />
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
          <CookieConsent />
          <Chatbot />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// Generate static params for static generation
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
