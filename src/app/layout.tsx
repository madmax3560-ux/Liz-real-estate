import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { agent } from "@/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const description = `${agent.displayName}, ${agent.title} with ${agent.brokerage} ${agent.brokerageOffice}. ${agent.serviceAreaSummary}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://elizabethfinnegan.com"),
  title: {
    default: `${agent.displayName} · ${agent.brokerage} Real Estate`,
    template: `%s · ${agent.displayName}`,
  },
  description,
  keywords: [
    "Elizabeth Finnegan",
    "Liz Finnegan",
    "Houlihan Lawrence",
    "Yorktown real estate",
    "Westchester County real estate agent",
    "Putnam County real estate agent",
    "Yorktown Heights homes",
  ],
  openGraph: {
    title: `${agent.displayName} · ${agent.brokerage} Real Estate`,
    description,
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
