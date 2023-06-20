import '@/styles/global.css';

import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-zinc-800 scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <title>Steven Conaway</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <meta name="description" content="Steven Conaway's portfolio website" />

        <meta
          property="og:title"
          key="title"
          content="Steven Conaway's portfolio website"
        />
        <meta
          property="og:description"
          key="description"
          content="Steven Conaway's portfolio website"
        />
        <meta
          property="og:image"
          key="image"
          content="https://stevenconaway.me/api/opengraph-image"
        />
        <meta property="og:url" key="url" content="https://stevenconaway.me" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
