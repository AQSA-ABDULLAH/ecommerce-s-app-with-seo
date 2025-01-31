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


// export const metadata = {
//   title: { default: "Cart App", template: "%s - Cart App" },
//   description: "Shop for your favorite items in this easy-to-use cart app.",
//   keywords: "Cart App, nextjs seo complete checklist, nextjs seo tutorial",
//   openGraph: {
//     title: { default: "Cart App", template: "%s - Cart App" },
//     description: "Shop for your favorite items in this easy-to-use cart app.",
//     images:
//       "/assets/logo.webp",
//   },
//   facebook: {
//     title: { default: "Cart App", template: "%s - Cart App" },
//     description: "Shop for your favorite items in this easy-to-use cart app.",
//     images: [
//       {
//         url: "/assets/logo.webp",
//         width: 1200,
//         height: 630,
//         alt: "Cart App Preview Image",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: { default: "Cart App", template: "%s - Cart App" },
//     description: "Shop for your favorite items in this easy-to-use cart app.",
//     images: [
//       {
//         url: "/assets/logo.webp",
//         width: 1200,
//         height: 630,
//         alt: "Cart App Preview Image",
//       },
//     ],
//   },
// };

export default function RootLayout({ children, metadata = {} }) {
  // Set default metadata if it's undefined
  // const {
  //   title = "Cart App",
  //   description = "Shop for your favorite items in this easy-to-use cart app.",
  //   keywords = "Cart App, nextjs seo complete checklist, nextjs seo tutorial",
  //   openGraph = {},
  //   twitter = {},
  // } = metadata;

  return (
    <html lang="en">
      <head>
        {/* Dynamically set the metadata */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {openGraph && (
          <>
            <meta property="og:title" content={openGraph.title || title} />
            <meta property="og:description" content={openGraph.description || description} />
            <meta property="og:image" content={openGraph.images?.[0]?.url || "/assets/logo.webp"} />
          </>
        )}
        {twitter && (
          <>
            <meta name="twitter:title" content={twitter.title || title} />
            <meta name="twitter:description" content={twitter.description || description} />
            <meta name="twitter:image" content={twitter.images?.[0]?.url || "/assets/logo.webp"} />
          </>
        )}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#171717] text-[#EDEDED] font-style`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
