import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/shopify";

const features = [
  {
    title: "SPACIOUS DESIGN",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
      />
    ),
  },
  {
    title: "WEATHER RESISTANT",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
      />
    ),
  },
  {
    title: "COMFORT FIT",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    ),
  },
  {
    title: "TECH FRIENDLY",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
];

export function FeaturedProduct({ product }: { product?: Product | null }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-black md:text-5xl">
          {product ? product.title.toUpperCase() : "GO-TO TRAVEL PACK"}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
          {product
            ? product.description
            : "Our flagship backpack designed for the modern professional. Roomy, durable, and built to last."}
        </p>
      </div>
      <div className="relative mt-16 flex flex-col items-center justify-center gap-8 lg:flex-row">
        <div className="order-2 flex flex-wrap justify-center gap-6 lg:order-1 lg:flex-col lg:gap-8">
          {features.slice(0, 2).map(({ title, icon }) => (
            <div
              key={title}
              className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-100">
                <svg
                  className="h-6 w-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {icon}
                </svg>
              </div>
              <span className="text-sm font-bold uppercase tracking-wide text-black">
                {title}
              </span>
            </div>
          ))}
        </div>
        <Link
          href={product ? `/products/${product.handle}` : "/products"}
          className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl lg:order-2"
        >
          <Image
            src={
              product?.featuredImage?.url ??
              "https://images.unsplash.com/photo-1622260615053-9c4c315924dd?w=600&q=80"
            }
            alt={product?.featuredImage?.altText ?? product?.title ?? "Featured product"}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </Link>
        <div className="order-3 flex flex-wrap justify-center gap-6 lg:flex-col lg:gap-8">
          {features.slice(2, 4).map(({ title, icon }) => (
            <div
              key={title}
              className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-100">
                <svg
                  className="h-6 w-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {icon}
                </svg>
              </div>
              <span className="text-sm font-bold uppercase tracking-wide text-black">
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
