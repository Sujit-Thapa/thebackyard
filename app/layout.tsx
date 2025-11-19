import type { ReactNode } from "react";

export const metadata = {
  title: "The Backyard",
  description: "A place to share and discover new ideas",
  keywords: ["ideas", "community", "sharing", "discovery", "The Backyard"],
  openGraph: {
    title: "The Backyard",
    description: "A place to share and discover new ideas",
    type: "website",
    url: "https://thebackyard.example.com",
    images: [
      {
        url: "https://thebackyard.example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Backyard Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Backyard",
    description: "A place to share and discover new ideas",
    images: ["https://thebackyard.example.com/og-image.jpg"],
  },
};

export default function DefaultLayout({ children }: { children: ReactNode }) {
  const { title, description, keywords, openGraph, twitter } = metadata;

  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />

        {Object.entries(openGraph).map(([k, v]) =>
          k === "images" ? null : (
            <meta key={`og-${k}`} property={`og:${k}`} content={String(v)} />
          )
        )}
        {openGraph.images?.map((img, i) => (
          <meta key={`og:image${i}`} property="og:image" content={img.url} />
        ))}

        {Object.entries(twitter).map(([k, v]) =>
          k === "images" ? null : (
            <meta key={`tw-${k}`} name={`twitter:${k}`} content={String(v)} />
          )
        )}
        {twitter.images?.map((src, i) => (
          <meta key={`tw:image${i}`} name="twitter:image" content={src} />
        ))}
      </head>

      <body className="bg-gray-100 text-gray-900">
        <div className="container mx-auto p-4">{children}</div>
      </body>
    </html>
  );
}
