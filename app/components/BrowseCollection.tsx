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
  "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80";

function getSecondaryImage(product: Product, primaryUrl: string) {
  const second = product.images?.edges?.[1]?.node;
  if (!second?.url || second.url === primaryUrl) return null;
  return second;
}

export function BrowseCollection({ products }: { products: Product[] }) {
  return (
    <section id="productos" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-tertiary">
              Carta
            </p>
            <h2 className="mt-2 text-4xl font-bold tracking-[-0.02em] text-on-surface md:text-5xl">
              HELADOS Y YOGUR HELADO
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-on-surface/75">
              Descubre cucuruchos, tarrinas y combinaciones con toppings
              caseros. Desde los clásicos hasta ediciones limitadas de
              temporada.
            </p>
          </div>
          <Link href="/products" className="btn-primary w-fit shrink-0">
            Ver todo
          </Link>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-ambient lg:aspect-auto lg:rounded-[3rem]">
            <Image
              src={products[0]?.featuredImage?.url ?? placeholderImage}
              alt="Selección de helados"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-primary/70" />
            <div className="absolute bottom-8 left-8 text-on-primary">
              <p className="text-xl font-bold tracking-tight">
                SABORES DE TEMPORADA
              </p>
              <Link
                href="/products"
                className="btn-secondary mt-3 px-6 py-2.5 text-sm"
              >
                Canjear oferta
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            {products.length > 0 ? (
              products.slice(0, 4).map((product) => {
                const primarySrc =
                  product.featuredImage?.url ??
                  product.images?.edges?.[0]?.node?.url ??
                  placeholderImage;
                const secondary = getSecondaryImage(product, primarySrc);
                return (
                  <Link
                    key={product.id}
                    href={`/products/${product.handle}`}
                    className="group flex flex-col gap-2"
                  >
                    <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-t-[2rem] rounded-b-xl bg-surface-container-low shadow-ambient">
                      <Image
                        src={primarySrc}
                        alt={
                          product.featuredImage?.altText ??
                          product.images?.edges?.[0]?.node?.altText ??
                          product.title
                        }
                        fill
                        className={`object-cover object-top transition-all duration-500 ease-out group-hover:scale-[1.08] ${
                          secondary
                            ? "group-hover:blur-md group-hover:opacity-0"
                            : "group-hover:blur-sm"
                        }`}
                        sizes="(max-width: 1024px) 50vw, 16vw"
                      />
                      {secondary && (
                        <Image
                          src={secondary.url}
                          alt={secondary.altText ?? product.title}
                          fill
                          className="object-cover object-top opacity-0 transition-all duration-500 ease-out group-hover:scale-[1.08] group-hover:opacity-100"
                          sizes="(max-width: 1024px) 50vw, 16vw"
                        />
                      )}
                    </div>
                    <div className="rounded-b-[2rem] rounded-t-xl bg-surface-container-lowest px-3 py-2.5 shadow-ambient">
                      <p className="line-clamp-2 font-medium uppercase leading-tight tracking-wide text-on-surface">
                        {product.title}
                      </p>
                      <p className="mt-1 text-sm leading-none text-on-surface/65">
                        {formatPrice(
                          product.priceRange.minVariantPrice.amount,
                          product.priceRange.minVariantPrice.currencyCode,
                        )}
                      </p>
                    </div>
                  </Link>
                );
              })
            ) : (
              <div className="col-span-2 flex aspect-square items-center justify-center rounded-[2rem] border border-dashed border-outline-variant/20 bg-surface-container-low">
                <Link
                  href="/products"
                  className="text-center text-on-surface/60 transition hover:text-primary"
                >
                  <p className="font-medium">Aún no hay productos</p>
                  <p className="mt-1 text-sm">
                    Añade productos en el administrador de Shopify
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
