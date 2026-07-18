import type { ReactNode } from "react";

export const metadata = {
  title: "The Backyard Café - Specialty Coffee & Cafe",
  description:
    "A minimalist sanctuary for exceptional coffee, pastries, and meaningful moments. Open for quiet work and connection.",
  keywords: ["cafe", "coffee", "specialty coffee", "minimalist", "The Backyard"],
  openGraph: {
    title: "The Backyard Café",
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
    title: "The Backyard Café",
    description: "Minimal coffee culture. Exceptional experience.",
    images: ["https://thebackyard.example.com/og-image.jpg"],
  },
};

const renderMeta = (
  obj: Record<string, unknown> = {},
  prefix = "og",
  useProperty = true,
) =>
  Object.entries(obj).flatMap(([k, v]) => {
    if (k === "images" && Array.isArray(v)) {
      return v.map((it, i) => {
        const content = typeof it === "object" && it !== null && "url" in it ? String((it as Record<string, unknown>).url ?? "") : String(it);
        return useProperty ? (
          <meta key={`${prefix}:image:${i}`} property={`${prefix}:image`} content={content} />
        ) : (
          <meta key={`${prefix}:image:${i}`} name={`${prefix}:image`} content={content} />
        );
      });
    }

    const content = typeof v === "string" || typeof v === "number" || typeof v === "boolean" ? String(v) : "";
    return (
      <meta
        key={`${prefix}-${k}`}
        {...(useProperty ? { property: `${prefix}:${k}` } : { name: `${prefix}:${k}` })}
        content={content}
      />
    );
  });

export default function DefaultLayout({ children }: { children: ReactNode }) {
  const { title, description, keywords, openGraph, twitter } = metadata;
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#ffffff" />
        {renderMeta(openGraph, "og", true)}
        {renderMeta(twitter, "twitter", false)}
      </head>
      <body className="bg-white font-sans text-gray-900">{children}</body>
    </html>
  );
}
