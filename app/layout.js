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
  title: { default: "Cart App", template: "%s - Cart App" },
  description: "Shop for your favorite items in this easy-to-use cart app.",
  keywords: "Cart App, nextjs seo complete checklist, nextjs seo tutorial",
  openGraph: {
    title: { default: "Cart App", template: "%s - Cart App" },
    description: "Shop for your favorite items in this easy-to-use cart app.",
    images:
      "/assets/logo.webp",
  },
  facebook: {
    title: { default: "Cart App", template: "%s - Cart App" },
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
  twitter: {
    card: "summary_large_image",
    title: { default: "Cart App", template: "%s - Cart App" },
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

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#171717] text-[#EDEDED] font-style`}
      >
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
