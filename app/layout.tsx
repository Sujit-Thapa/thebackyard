import type { ReactNode } from "react";

declare module "*.css";

import "./tailwind.css";

export const metadata = {
  title: "The Backyard - Specialty Coffee & Cafe",
  description: "A minimalist sanctuary for exceptional coffee, pastries, and meaningful moments. Open for quiet work and connection.",
  keywords: ["cafe", "coffee", "specialty coffee", "minimalist", "The Backyard"],
  openGraph: {
    title: "The Backyard",
    description: "Minimal coffee culture. Exceptional experience.",
    type: "website",
    url: "https://thebackyard.example.com",
    images: [
      {
        url: "https://thebackyard.example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Backyard Cafe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Backyard",
    description: "Minimal coffee culture. Exceptional experience.",
    images: ["https://thebackyard.example.com/og-image.jpg"],
  },
};

const renderMeta = (
  obj: Record<string, any> = {},
  prefix = "og",
  useProperty = true,
) =>
  Object.entries(obj).flatMap(([k, v]) =>
    k === "images" && Array.isArray(v) ? (
      v.map((it: any, i: number) =>
        useProperty ? (
          <meta
            key={`${prefix}:image:${i}`}
            property={`${prefix}:image`}
            content={it?.url ?? String(it)}
          />
        ) : (
          <meta
            key={`${prefix}:image:${i}`}
            name={`${prefix}:image`}
            content={String(it)}
          />
        ),
      )
    ) : (
      <meta
        key={`${prefix}-${k}`}
        {...(useProperty
          ? { property: `${prefix}:${k}` }
          : { name: `${prefix}:${k}` })}
        content={String(v)}
      />
    ),
  );

export default function DefaultLayout({ children }: { children: ReactNode }) {
  const { title, description, keywords, openGraph, twitter } = metadata;
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
        {renderMeta(openGraph, "og", true)}
        {renderMeta(twitter, "twitter", false)}
      </head>
      <body className="bg-white text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
