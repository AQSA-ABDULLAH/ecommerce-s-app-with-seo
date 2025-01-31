export async function generateMetadata({ params }) {
  const { id } = params;

  try {
    const product = await fetchProductDetails(id);
    const imageUrl = product.thumbnail || "https://via.placeholder.com/300";

    return {
      title: product.title || "Product Details",
      description: product.description || "View product details",
      keywords: `ecommerce, fake-store, next-ecommerce, ${product.category || "products"}`,
      openGraph: {
        title: product.title || "Product Details",
        type: "article",
        images: [imageUrl], // ✅ Fix: Use an array
      },
      twitter: {
        title: product.title || "Product Details",
        description: product.description || "View product details",
        images: [imageUrl], // ✅ Fix: Use an array
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
        images: ["https://via.placeholder.com/300"], // ✅ Fix: Use an array
      },
      twitter: {
        title: "Product Not Found",
        description: "The requested product could not be found.",
        images: ["https://via.placeholder.com/300"], // ✅ Fix: Use an array
        card: "summary_large_image",
      },
    };
  }
}



