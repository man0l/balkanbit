import type { Metadata } from "next";
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "latin-ext"],
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains",
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BalkanBit — Venture Building Studio",
  description: "BalkanBit is a venture building studio in Sofia, Bulgaria. One founder, a shared engineering core, and studio-funded capital — shipping mobile products at speed.",
  metadataBase: new URL("https://balkanbit.app"),
  openGraph: {
    title: "BalkanBit — Venture Building Studio",
    description: "Ideas don't ship. Builders do. BalkanBit is a venture building studio — shipping mobile products from Sofia to the world.",
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
      className={`${hanken.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-3 focus:rounded-full focus:bg-surface-1 focus:border focus:border-border-strong focus:text-text-1 focus:text-small focus:font-semibold"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
