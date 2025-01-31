import ProductDetail from "@/components/product-details/ProductDetail";

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
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: product.title || "Cart App Preview Image",
          },
        ],
      },
      twitter: {
        title: product.title || "Product Details",
        description: product.description || "View product details",
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: product.title || "Cart App Preview Image",
          },
        ],
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
        title: "Product Not Found",
        description: "The requested product could not be found.",
        images: [
          {
            url: "/assets/logo.webp",
            width: 1200,
            height: 630,
            alt: "Cart App Preview Image",
          },
        ],
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






