import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/shopify";

function formatPrice(amount: string, currencyCode: string) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: currencyCode,
  }).format(parseFloat(amount));
}

const placeholderImage =
  "https://images.unsplash.com/photo-1497034825429-cbce4514c0ad?w=300&q=80";

export function GearEssentials({ products }: { products: Product[] }) {
  const displayProducts = products.slice(0, 8);

  if (displayProducts.length === 0) {
    return null;
  }

  return (
    <section id="toppings" className="bg-surface-container-low py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-tertiary">
              Complementos
            </p>
            <h2 className="mt-2 text-4xl font-bold tracking-[-0.02em] text-on-surface md:text-5xl">
              TOPPINGS Y EXTRAS
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-on-surface/75">
              Salsas, fruta, galleta y más para personalizar tu helado o yogur
              helado como más te guste.
            </p>
          </div>
          <Link href="/products" className="btn-primary w-fit shrink-0">
            Ver todo
          </Link>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
          {displayProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.handle}`}
              className="group overflow-hidden rounded-[2rem] shadow-ambient"
            >
              <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-surface-container-low">
                <Image
                  src={product.featuredImage?.url ?? placeholderImage}
                  alt={product.featuredImage?.altText ?? product.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="mt-3 px-0.5">
                <p className="font-medium uppercase tracking-wide text-on-surface">
                  {product.title}
                </p>
                <p className="text-sm text-on-surface/65">
                  {formatPrice(
                    product.priceRange.minVariantPrice.amount,
                    product.priceRange.minVariantPrice.currencyCode,
                  )}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
