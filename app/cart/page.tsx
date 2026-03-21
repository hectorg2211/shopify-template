"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

function formatPrice(amount: string, currencyCode: string) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: currencyCode,
  }).format(parseFloat(amount));
}

export default function CartPage() {
  const { cart, isLoading, updateQuantity, removeLine } = useCart();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-surface text-on-surface">
        <Header />
        <main className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-on-surface/65">Cargando carrito…</p>
        </main>
        <Footer />
      </div>
    );
  }

  const lines = cart?.lines?.edges?.map((e) => e.node) ?? [];
  const totalQty = cart?.totalQuantity ?? 0;

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-tertiary">
          Carrito
        </p>
        <h1 className="mb-10 mt-2 text-3xl font-bold tracking-[-0.02em] md:text-4xl">
          Tu carrito
        </h1>

        {lines.length === 0 ? (
          <div className="rounded-[2rem] bg-surface-container-low p-12 text-center shadow-ambient">
            <p className="text-on-surface/70">Tu carrito está vacío.</p>
            <Link
              href="/products"
              className="mt-4 inline-block font-medium text-primary underline-offset-4 hover:underline"
            >
              Seguir comprando
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {lines.map((line) => (
              <div
                key={line.id}
                className="flex gap-6 rounded-[2rem] bg-surface-container-lowest p-5 shadow-ambient"
              >
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-surface-container-low">
                  {line.merchandise.product.featuredImage ? (
                    <Image
                      src={line.merchandise.product.featuredImage.url}
                      alt={
                        line.merchandise.product.featuredImage.altText ??
                        line.merchandise.product.title
                      }
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs text-on-surface/45">
                      Sin imagen
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <Link
                      href={`/products/${line.merchandise.product.handle}`}
                      className="font-semibold text-on-surface hover:underline"
                    >
                      {line.merchandise.product.title}
                    </Link>
                    {line.merchandise.title !== "Default Title" && (
                      <p className="text-sm text-on-surface/55">
                        {line.merchandise.title}
                      </p>
                    )}
                    <p className="text-sm text-on-surface/70">
                      {formatPrice(
                        line.merchandise.price.amount,
                        line.merchandise.price.currencyCode,
                      )}
                    </p>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          if (line.quantity <= 1) {
                            removeLine(line.id);
                          } else {
                            updateQuantity(line.id, line.quantity - 1);
                          }
                        }}
                        className="ghost-border flex h-8 w-8 items-center justify-center rounded-full text-on-surface transition hover:bg-surface-container-low"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-on-surface">
                        {line.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(line.id, line.quantity + 1)
                        }
                        className="ghost-border flex h-8 w-8 items-center justify-center rounded-full text-on-surface transition hover:bg-surface-container-low"
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeLine(line.id)}
                      className="text-sm text-secondary hover:underline"
                    >
                      Quitar
                    </button>
                  </div>
                </div>
                <div className="text-right font-semibold text-on-surface">
                  {formatPrice(
                    (
                      parseFloat(line.merchandise.price.amount) * line.quantity
                    ).toString(),
                    line.merchandise.price.currencyCode,
                  )}
                </div>
              </div>
            ))}

            <div className="flex flex-col items-end gap-4 pt-10">
              <p className="text-lg font-medium text-on-surface">
                Total: {totalQty}{" "}
                {totalQty === 1 ? "artículo" : "artículos"}
              </p>
              <a href={cart?.checkoutUrl} className="btn-primary">
                Pagar pedido
              </a>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
