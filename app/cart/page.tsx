"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

function formatPrice(amount: string, currencyCode: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  }).format(parseFloat(amount));
}

export default function CartPage() {
  const { cart, isLoading, updateQuantity, removeLine } = useCart();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-zinc-600">Loading cart...</p>
        </main>
        <Footer />
      </div>
    );
  }

  const lines = cart?.lines?.edges?.map((e) => e.node) ?? [];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-black">
          Your Cart
        </h1>

        {lines.length === 0 ? (
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-12 text-center">
            <p className="text-zinc-600">Your cart is empty.</p>
            <Link
              href="/products"
              className="mt-4 inline-block text-black underline hover:no-underline"
            >
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {lines.map((line) => (
              <div
                key={line.id}
                className="flex gap-6 rounded-2xl border border-zinc-200 p-4"
              >
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-zinc-100">
                  {line.merchandise.product.featuredImage ? (
                    <Image
                      src={line.merchandise.product.featuredImage.url}
                      alt={line.merchandise.product.featuredImage.altText ?? line.merchandise.product.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-zinc-400 text-xs">
                      No image
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <Link
                      href={`/products/${line.merchandise.product.handle}`}
                      className="font-medium text-black hover:underline"
                    >
                      {line.merchandise.product.title}
                    </Link>
                    {line.merchandise.title !== "Default Title" && (
                      <p className="text-sm text-zinc-500">{line.merchandise.title}</p>
                    )}
                    <p className="text-sm text-zinc-600">
                      {formatPrice(
                        line.merchandise.price.amount,
                        line.merchandise.price.currencyCode
                      )}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center gap-4">
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
                        className="flex h-8 w-8 items-center justify-center rounded border border-zinc-300 text-black hover:bg-zinc-100"
                      >
                        −
                      </button>
                      <span className="w-8 text-center">{line.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(line.id, line.quantity + 1)}
                        className="flex h-8 w-8 items-center justify-center rounded border border-zinc-300 text-black hover:bg-zinc-100"
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeLine(line.id)}
                      className="text-sm text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="text-right font-medium">
                  {formatPrice(
                    (parseFloat(line.merchandise.price.amount) * line.quantity).toString(),
                    line.merchandise.price.currencyCode
                  )}
                </div>
              </div>
            ))}

            <div className="flex flex-col items-end gap-4 border-t border-zinc-200 pt-8">
              <p className="text-lg font-medium">
                Total: {cart?.totalQuantity ?? 0} item
                {(cart?.totalQuantity ?? 0) !== 1 ? "s" : ""}
              </p>
              <a
                href={cart?.checkoutUrl}
                className="rounded-full border-2 border-black bg-black px-8 py-3 text-white transition hover:bg-zinc-800"
              >
                Checkout
              </a>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
