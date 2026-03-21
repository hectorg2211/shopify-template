"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/shopify";

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("/api/products");
  if (!res.ok) throw new Error("No se pudieron cargar los productos");
  return res.json();
}

function formatPrice(amount: string, currencyCode: string) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: currencyCode,
  }).format(parseFloat(amount));
}

export function ProductsList() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return <p className="text-on-surface/65">Cargando productos…</p>;
  }

  if (error) {
    return (
      <p className="text-secondary">
        Error al cargar productos: {error.message}
      </p>
    );
  }

  if (!products?.length) {
    return (
      <p className="text-on-surface/65">
        No hay productos todavía. Añade productos en el administrador de Shopify
        para verlos aquí.
      </p>
    );
  }

  return (
    <ul className="grid gap-8 sm:grid-cols-2">
      {products.map((product) => (
        <li
          key={product.id}
          className="overflow-hidden rounded-[2rem] bg-surface-container-lowest shadow-ambient transition hover:shadow-ambient-hover"
        >
          <Link href={`/products/${product.handle}`}>
            {product.featuredImage && (
              <div className="relative aspect-square overflow-hidden rounded-t-[2rem]">
                <Image
                  src={product.featuredImage.url}
                  alt={product.featuredImage.altText ?? product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            )}
            <div className="p-5">
              <h2 className="font-semibold text-on-surface">{product.title}</h2>
              <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-on-surface/70">
                {product.description}
              </p>
              <p className="mt-3 font-medium text-primary">
                {formatPrice(
                  product.priceRange.minVariantPrice.amount,
                  product.priceRange.minVariantPrice.currencyCode,
                )}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
