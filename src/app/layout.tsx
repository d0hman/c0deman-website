import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://c0deman.com"),
  title: "c0deman | Shopify App Development",
  description:
    "Custom Shopify apps and development services. We build apps that solve real problems for Shopify merchants.",
  keywords: [
    "Shopify apps",
    "Shopify development",
    "custom Shopify apps",
    "c0deman",
  ],
  openGraph: {
    title: "c0deman | Shopify App Development",
    description:
      "Custom Shopify apps and development services. We build apps that solve real problems for Shopify merchants.",
    type: "website",
    url: "https://c0deman.com",
    siteName: "c0deman",
  },
  twitter: {
    card: "summary",
    title: "c0deman | Shopify App Development",
    description:
      "Custom Shopify apps and development services. We build apps that solve real problems for Shopify merchants.",
  },
  alternates: {
    canonical: "https://c0deman.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
