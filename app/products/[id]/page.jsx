export async function generateMetadata({ params }) {
  const { id } = params;

  try {
    const product = await fetchProductDetails(id);
    const imageUrl = product.thumbnail || "https://via.placeholder.com/1200x630"; // ✅ Use correct aspect ratio

    return {
      title: product.title || "Product Details",
      description: product.description || "View product details",
      keywords: `ecommerce, fake-store, next-ecommerce, ${product.category || "products"}`,
      openGraph: {
        title: product.title || "Product Details",
        type: "article",
        image: imageUrl, // ✅ Fix: Use 'image' instead of 'images'
        url: `https://ecommerce-s-app-with-seo.vercel.app/products/${id}`, // ✅ Make sure URL is correct
      },
      twitter: {
        title: product.title || "Product Details",
        description: product.description || "View product details",
        image: imageUrl, // ✅ Fix: Use 'image' instead of 'images'
        card: "summary_large_image",
      },
    };
  } catch (error) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
      keywords: "not found, error",
      openGraph: {
        title: "Product Not Found",
        type: "article",
        image: "https://via.placeholder.com/1200x630", // ✅ Use correct aspect ratio
      },
      twitter: {
        title: "Product Not Found",
        description: "The requested product could not be found.",
        image: "https://via.placeholder.com/1200x630", // ✅ Use correct aspect ratio
        card: "summary_large_image",
      },
    };
  }
}




