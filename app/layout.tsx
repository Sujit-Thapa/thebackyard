import type { ReactNode } from "react";
import "./tailwind.css";

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


const renderMeta = (
  obj: Record<string, any> = {},
  prefix = "og",
  useProperty = true
) =>
  Object.entries(obj).flatMap(([k, v]) =>
    k === "images" ? (
      Array.isArray(v) ? (
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
          )
        )
      ) : (
        []
      )
    ) : (
      <meta
        key={`${prefix}-${k}`}
        {...(useProperty
          ? { property: `${prefix}:${k}` }
          : { name: `${prefix}:${k}` })}
        content={String(v)}
      />
    )
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

      <body className="bg-gray-100 text-gray-900">
        <div className="container mx-auto p-4">{children}</div>
      </body>
    </html>
  );
}
