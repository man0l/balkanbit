import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "BalkanBit — Venture Building Studio",
  description: "BalkanBit is a venture building studio in Sofia, Bulgaria. One founder, a shared engineering core, and studio-funded capital — shipping mobile products at speed.",
  metadataBase: new URL("https://balkanbit.app"),
  openGraph: {
    title: "BalkanBit — Venture Building Studio",
    description: "Ideas don't ship. Builders do. Back the studio that builds, funds, and scales mobile products from Sofia to the world.",
    url: "https://balkanbit.app",
    siteName: "BalkanBit",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
