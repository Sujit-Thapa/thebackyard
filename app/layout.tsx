import React from 'react'

export default function defaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <div className="container mx-auto p-4">
          {children}
        </div>
      </body>
    </html>
  )
}

export const metadata = {
  title: 'The Backyard',
  description: 'A place to share and discover new ideas',
}