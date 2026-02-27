"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/app/components/ui/drawer";

function formatPrice(amount: string, currencyCode: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  }).format(parseFloat(amount));
}

export function CartDrawer() {
  const { cart, isLoading, updateQuantity, removeLine } = useCart();
  const lines = cart?.lines?.edges?.map((e) => e.node) ?? [];

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <button
          type="button"
          className="relative rounded p-2 text-black transition hover:bg-zinc-100"
          aria-label={`Cart${(cart?.totalQuantity ?? 0) > 0 ? ` (${cart?.totalQuantity} items)` : ""}`}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          {!isLoading && (cart?.totalQuantity ?? 0) > 0 && (
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] font-medium text-white">
              {cart!.totalQuantity > 99 ? "99+" : cart!.totalQuantity}
            </span>
          )}
        </button>
      </DrawerTrigger>
      <DrawerContent className="ml-auto h-full w-full max-w-sm rounded-l-[10px] rounded-r-none border-r border-zinc-200 [&>div:first-child]:hidden">
        <DrawerHeader className="border-b border-zinc-200 text-left">
          <DrawerTitle>Your Cart</DrawerTitle>
        </DrawerHeader>
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {lines.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-zinc-600">Your cart is empty.</p>
              <DrawerClose asChild>
                <Link
                  href="/products"
                  className="mt-4 inline-block text-black underline hover:no-underline"
                >
                  Continue shopping
                </Link>
              </DrawerClose>
            </div>
          ) : (
            <div className="space-y-4">
              {lines.map((line) => (
                <div
                  key={line.id}
                  className="flex gap-4 rounded-lg border border-zinc-200 p-3"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-zinc-100">
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
                      <div className="flex h-full items-center justify-center text-xs text-zinc-400">
                        No image
                      </div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <Link
                      href={`/products/${line.merchandise.product.handle}`}
                      className="truncate font-medium text-black hover:underline"
                    >
                      {line.merchandise.product.title}
                    </Link>
                    {line.merchandise.title !== "Default Title" && (
                      <p className="text-xs text-zinc-500">
                        {line.merchandise.title}
                      </p>
                    )}
                    <p className="text-sm text-zinc-600">
                      {formatPrice(
                        line.merchandise.price.amount,
                        line.merchandise.price.currencyCode
                      )}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          if (line.quantity <= 1) {
                            removeLine(line.id);
                          } else {
                            updateQuantity(line.id, line.quantity - 1);
                          }
                        }}
                        className="flex h-7 w-7 items-center justify-center rounded border border-zinc-300 text-black hover:bg-zinc-100"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm">
                        {line.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(line.id, line.quantity + 1)
                        }
                        className="flex h-7 w-7 items-center justify-center rounded border border-zinc-300 text-black hover:bg-zinc-100"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => removeLine(line.id)}
                        className="ml-2 text-xs text-red-600 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right text-sm font-medium">
                    {formatPrice(
                      (
                        parseFloat(line.merchandise.price.amount) * line.quantity
                      ).toString(),
                      line.merchandise.price.currencyCode
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {lines.length > 0 && (
          <DrawerFooter className="border-t border-zinc-200">
            <p className="text-sm text-zinc-600">
              {cart?.totalQuantity ?? 0} item
              {(cart?.totalQuantity ?? 0) !== 1 ? "s" : ""}
            </p>
            <a
              href={cart?.checkoutUrl}
              className="flex items-center justify-center rounded-full border-2 border-black bg-black px-6 py-3 text-white transition hover:bg-zinc-800"
            >
              Checkout
            </a>
            <DrawerClose asChild>
              <Link
                href="/cart"
                className="text-center text-sm text-zinc-600 underline hover:no-underline"
              >
                View full cart
              </Link>
            </DrawerClose>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
}
