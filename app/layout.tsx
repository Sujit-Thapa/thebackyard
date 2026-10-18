import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "The Backyard - Wood-Fired Kitchen & Bar",
  description:
    "A warm, wood-fired neighborhood restaurant serving seasonal plates, handmade pasta and craft cocktails. Reserve your table today.",
  keywords: ["restaurant", "wood-fired", "dinner", "cocktails", "reservations", "The Backyard"],
  openGraph: {
    title: "The Backyard - Wood-Fired Kitchen & Bar",
    description: "Seasonal plates, open flames, and a table waiting for you.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Backyard - Wood-Fired Kitchen & Bar",
    description: "Seasonal plates, open flames, and a table waiting for you.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f0c0a",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
