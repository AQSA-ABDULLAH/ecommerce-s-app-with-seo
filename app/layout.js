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
  title: { default: "ZTFR", template: "%s - ZTFR" },
  description: "Learn how to optimize your Next.js website for SEO.",
  keywords: "seo app, nextjs seo complete checklist, nextjs seo tutorial",
  openGraph: {
    title: { default: "ZTFR", template: "%s - ZTFR" },
    description: "Learn how to optimize your Next.js website for SEO.",
    images:
      "https://ik.imagekit.io/dminhvu/assets/nextjs-seo/thumbnail.png?tr=f-png",
  },
  facebook: {
    title: { default: "ZTFR", template: "%s - ZTFR" },
    description: "Learn how to optimize your Next.js website for SEO.",
    images: [
      {
        url: "https://ik.imagekit.io/dminhvu/assets/nextjs-seo/thumbnail.png?tr=f-png",
        width: 1200,
        height: 630,
        alt: "Next.js SEO Thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: { default: "ZTFR", template: "%s - ZTFR" },
    description: "Learn how to optimize your Next.js website for SEO.",
    images: [
      {
        url: "https://ik.imagekit.io/dminhvu/assets/nextjs-seo/thumbnail.png?tr=f-png",
        width: 1200,
        height: 630,
        alt: "Next.js SEO Thumbnail",
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
