"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/shopify";

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("/api/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export function ProductsList() {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return (
      <p className="text-zinc-600 dark:text-zinc-400">Loading products...</p>
    );
  }

  if (error) {
    return (
      <p className="text-red-600 dark:text-red-400">
        Error loading products: {error.message}
      </p>
    );
  }

  if (!products?.length) {
    return (
      <p className="text-zinc-600 dark:text-zinc-400">
        No products found. Add products in your Shopify admin to see them here.
      </p>
    );
  }

  return (
    <ul className="grid gap-8 sm:grid-cols-2">
      {products.map((product) => (
        <li
          key={product.id}
          className="overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
        >
          <Link href={`/products/${product.handle}`}>
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
              <p className="mt-1 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
                {product.description}
              </p>
              <p className="mt-2 font-medium">
                {product.priceRange.minVariantPrice.currencyCode}{" "}
                {product.priceRange.minVariantPrice.amount}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
