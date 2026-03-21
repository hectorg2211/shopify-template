import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductByHandle } from "@/lib/shopify";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { AddToCartButton } from "@/app/components/AddToCartButton";

function formatPrice(amount: string, currencyCode: string) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: currencyCode,
  }).format(parseFloat(amount));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = await getProductByHandle(handle);

  if (!product) {
    notFound();
  }

  const featured = product.featuredImage;
  const imgWidth =
    featured && featured.width && featured.width > 0
      ? featured.width
      : 1200;
  const imgHeight =
    featured && featured.height && featured.height > 0
      ? featured.height
      : Math.round((imgWidth * 4) / 3);

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/products"
          className="mb-8 inline-block text-sm font-medium text-on-surface/70 transition hover:text-primary"
        >
          ← Volver a la tienda
        </Link>
        <div className="grid gap-12 md:grid-cols-2">
          <div className="relative w-full overflow-hidden rounded-4xl bg-surface md:rounded-[3rem]">
            {featured ? (
              <Image
                src={featured.url}
                alt={featured.altText ?? product.title}
                width={imgWidth}
                height={imgHeight}
                className="h-auto w-full"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="flex h-full items-center justify-center text-on-surface/45">
                Sin imagen
              </div>
            )}
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-[-0.02em] text-on-surface md:text-4xl">
              {product.title}
            </h1>
            <p className="mt-4 text-xl text-on-surface/75">
              {formatPrice(
                product.priceRange.minVariantPrice.amount,
                product.priceRange.minVariantPrice.currencyCode,
              )}
            </p>
            {product.description && (
              <div
                className="mt-6 leading-relaxed text-on-surface/75 [&_a]:text-primary [&_a]:underline"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            )}
            {product.variants?.edges?.[0]?.node?.id ? (
              <AddToCartButton variantId={product.variants.edges[0].node.id} />
            ) : (
              <p className="mt-8 text-on-surface/60">
                Este producto no está disponible en este momento.
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
