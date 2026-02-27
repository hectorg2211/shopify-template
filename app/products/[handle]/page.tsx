import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductByHandle } from "@/lib/shopify";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

function formatPrice(amount: string, currencyCode: string) {
  return new Intl.NumberFormat("en-US", {
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/products"
          className="mb-8 inline-block text-sm text-zinc-600 hover:text-black"
        >
          ← Back to products
        </Link>
        <div className="grid gap-12 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-zinc-100">
            {product.featuredImage ? (
              <Image
                src={product.featuredImage.url}
                alt={product.featuredImage.altText ?? product.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex h-full items-center justify-center text-zinc-400">
                No image
              </div>
            )}
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-black">
              {product.title}
            </h1>
            <p className="mt-4 text-xl text-zinc-600">
              {formatPrice(
                product.priceRange.minVariantPrice.amount,
                product.priceRange.minVariantPrice.currencyCode
              )}
            </p>
            {product.description && (
              <div
                className="mt-6 text-zinc-600"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            )}
            <Link
              href="/products"
              className="mt-8 inline-block rounded-full border-2 border-black bg-black px-8 py-3 text-white transition hover:bg-zinc-800"
            >
              Add to Cart
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
