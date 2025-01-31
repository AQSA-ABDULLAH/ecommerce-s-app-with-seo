import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cart App",
  description: "Shop for your favorite items in this easy-to-use cart app.",
  openGraph: {
    title: "Cart App",
    description: "Shop for your favorite items in this easy-to-use cart app.",
    images: [
      {
        url: "/assets/logo.webp",
        width: 1200,
        height: 630,
        alt: "Cart App Preview Image",
      },
    ],
    url: "https://yourwebsite.com",
    siteName: "Cart App",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "Cart App",
    description: "Shop for your favorite items in this easy-to-use cart app.",
    images: [
      {
        url: "/assets/logo.webp",
        width: 1200,
        height: 630,
        alt: "Cart App Preview Image",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph meta tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        
        {/* Twitter meta tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0].url} />

        <meta name="description" content={metadata.description} />
        <meta name="author" content="AQSA ABDULLAH" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#171717] text-[#EDEDED] font-style`}
      >
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
