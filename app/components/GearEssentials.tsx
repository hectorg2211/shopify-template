import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/shopify";

function formatPrice(amount: string, currencyCode: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  }).format(parseFloat(amount));
}

const placeholderImage =
  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&q=80";

export function GearEssentials({ products }: { products: Product[] }) {
  const displayProducts = products.slice(0, 8);

  if (displayProducts.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-black md:text-5xl">
            BACKPACK GEAR ESSENTIALS
          </h2>
          <p className="mt-4 max-w-xl text-zinc-600">
            Complete your travel setup with our curated accessories and gear.
          </p>
        </div>
        <Link
          href="/products"
          className="w-fit rounded-full border-2 border-black bg-white px-8 py-3 text-black transition hover:bg-black hover:text-white"
        >
          View More
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
        {displayProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.handle}`}
            className="group overflow-hidden rounded-2xl"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-100">
              <Image
                src={product.featuredImage?.url ?? placeholderImage}
                alt={product.featuredImage?.altText ?? product.title}
                fill
                className="object-cover transition group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="mt-3">
              <p className="font-medium text-black uppercase">{product.title}</p>
              <p className="text-sm text-zinc-600">
                {formatPrice(
                  product.priceRange.minVariantPrice.amount,
                  product.priceRange.minVariantPrice.currencyCode
                )}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
