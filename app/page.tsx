import Image from "next/image";
import { getAllProducts } from "@/lib/shopify";

export default async function Home() {
  const products = await getAllProducts();

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-8 text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Store Products
        </h1>

        {products.length === 0 ? (
          <p className="text-zinc-600 dark:text-zinc-400">
            No products found. Add products in your Shopify admin to see them
            here.
          </p>
        ) : (
          <ul className="grid gap-8 sm:grid-cols-2">
            {products.map((product) => (
              <li
                key={product.id}
                className="overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
              >
                {product.featuredImage && (
                  <div className="relative aspect-square">
                    <Image
                      src={product.featuredImage.url}
                      alt={product.featuredImage.altText ?? product.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h2 className="font-medium text-black dark:text-zinc-50">
                    {product.title}
                  </h2>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="mt-2 font-medium">
                    {product.priceRange.minVariantPrice.currencyCode}{" "}
                    {product.priceRange.minVariantPrice.amount}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
