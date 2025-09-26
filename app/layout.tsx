import React from "react";

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

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <title>{metadata.title}</title>
      </head>
      <body className="bg-gray-100 text-gray-900">
        <div className="container mx-auto p-4">{children}</div>
      </body>
    </html>
  );
}
