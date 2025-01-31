import ProductDetail from "@/components/product-details/ProductDetail";

export async function generateMetadata({ params }, parent) {
  const { id } = params;

  try {
    const product = await fetchProductDetails(id);
    const imageUrl = product.thumbnail
      ? `https://${product.thumbnail}` // Ensure absolute URL for the image
      : "https://via.placeholder.com/300"; // Fallback if thumbnail is not present

    // Extend parent metadata
    const previousImages = (await parent).openGraph?.images || [];

    return {
      title: product.title || "Product Details",
      description: product.description || "View product details",
      keywords: `ecommerce, fake-store, next-ecommerce, ${product.category || "products"}`,
      openGraph: {
        title: product.title || "Product Details",
        type: "article",
        images: [imageUrl, ...previousImages], // Use "images" instead of "image"
      },
      twitter: {
        title: product.title || "Product Details",
        description: product.description || "View product details",
        images: [imageUrl], // Twitter also expects an array
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
        images: ["https://via.placeholder.com/300"], // Use "images"
      },
      twitter: {
        title: "Product Not Found",
        description: "The requested product could not be found.",
        images: ["https://via.placeholder.com/300"],
        card: "summary_large_image",
      },
    };
  }
}

async function fetchProductDetails(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product details");
  }
  return res.json();
}

// Render the client component and pass params
export default function ProductPage({ params }) {
  return <ProductDetail id={params.id} />;
}




