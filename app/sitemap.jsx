// import { SitemapStream, streamToPromise } from "sitemap";
// import { getServerSideSitemap } from "next-sitemap";

// export default async function handler(req, res) {
//   const pages = [
//     { loc: "/", lastmod: new Date().toISOString() },
//     { loc: "/products", lastmod: new Date().toISOString() },
//   ];

//   // Create a sitemap stream
//   const sitemap = new SitemapStream({ hostname: `${process.env.BASE_URL}/` });

//   // Pipe pages into the sitemap
//   pages.forEach((page) => {
//     sitemap.write(page);
//   });

//   sitemap.end();

//   // Convert the sitemap stream to an XML string and send it as a response
//   const xmlString = await streamToPromise(sitemap).then((data) =>
//     data.toString()
//   );

//   // Set the content type and send the response
//   res.setHeader("Content-Type", "application/xml");
//   res.status(200).send(xmlString);
// }
