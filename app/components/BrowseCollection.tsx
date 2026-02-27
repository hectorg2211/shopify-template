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
  "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020c?w=600&q=80";

export function BrowseCollection({ products }: { products: Product[] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-black md:text-5xl">
            BROWSE BACKPACK COLLECTION
          </h2>
          <p className="mt-4 max-w-xl text-zinc-600">
            Find the perfect pack for every journey. From daily commutes to
            weekend adventures.
          </p>
        </div>
        <Link
          href="/products"
          className="w-fit rounded-full border-2 border-black bg-white px-8 py-3 text-black transition hover:bg-black hover:text-white"
        >
          View More
        </Link>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:aspect-auto">
          <Image
            src={products[0]?.featuredImage?.url ?? placeholderImage}
            alt="Person with backpack"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-xl font-bold">GET READY FOR YEAR</p>
            <Link
              href="/products"
              className="mt-2 inline-block rounded-full bg-white px-6 py-2 text-sm font-medium text-black transition hover:bg-zinc-100"
            >
              Redeem
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:col-span-2">
          {products.length > 0 ? (
            products.slice(0, 4).map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.handle}`}
                className="group overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-square">
                  <Image
                    src={product.featuredImage?.url ?? placeholderImage}
                    alt={product.featuredImage?.altText ?? product.title}
                    fill
                    className="object-cover transition group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 16vw"
                  />
                </div>
                <div className="mt-2">
                  <p className="font-medium text-black uppercase">
                    {product.title}
                  </p>
                  <p className="text-sm text-zinc-600">
                    {formatPrice(
                      product.priceRange.minVariantPrice.amount,
                      product.priceRange.minVariantPrice.currencyCode
                    )}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-2 flex aspect-square items-center justify-center rounded-2xl border-2 border-dashed border-zinc-200">
              <Link
                href="/products"
                className="text-center text-zinc-500 hover:text-black"
              >
                <p className="font-medium">No products yet</p>
                <p className="text-sm">Add products in Shopify admin</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
