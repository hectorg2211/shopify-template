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
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: currencyCode,
  }).format(parseFloat(amount));
}

export function CartDrawer() {
  const { cart, isLoading, updateQuantity, removeLine } = useCart();
  const lines = cart?.lines?.edges?.map((e) => e.node) ?? [];
  const qty = cart?.totalQuantity ?? 0;

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <button
          type="button"
          className="relative rounded-full p-2 text-on-surface transition hover:bg-surface-container-low"
          aria-label={
            qty > 0 ? `Carrito (${qty} productos)` : "Abrir carrito"
          }
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
          {!isLoading && qty > 0 && (
            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-secondary px-0.5 text-[10px] font-semibold text-on-primary">
              {cart!.totalQuantity > 99 ? "99+" : cart!.totalQuantity}
            </span>
          )}
        </button>
      </DrawerTrigger>
      <DrawerContent className="ml-auto h-full w-full max-w-sm rounded-none rounded-l-[2rem] bg-surface shadow-ambient [&>div:first-child]:hidden">
        <DrawerHeader className="bg-surface-container-low text-left">
          <DrawerTitle className="text-on-surface">Tu carrito</DrawerTitle>
        </DrawerHeader>
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {lines.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-on-surface/70">Tu carrito está vacío.</p>
              <DrawerClose asChild>
                <Link
                  href="/products"
                  className="mt-4 inline-block font-medium text-primary underline-offset-4 hover:underline"
                >
                  Seguir comprando
                </Link>
              </DrawerClose>
            </div>
          ) : (
            <div className="space-y-4">
              {lines.map((line) => (
                <div
                  key={line.id}
                  className="flex gap-4 rounded-2xl bg-surface-container-lowest p-3 shadow-ambient"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-surface-container-low">
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
                  <div className="min-w-0 flex-1">
                    <Link
                      href={`/products/${line.merchandise.product.handle}`}
                      className="truncate font-medium text-on-surface hover:underline"
                    >
                      {line.merchandise.product.title}
                    </Link>
                    {line.merchandise.title !== "Default Title" && (
                      <p className="text-xs text-on-surface/55">
                        {line.merchandise.title}
                      </p>
                    )}
                    <p className="text-sm text-on-surface/70">
                      {formatPrice(
                        line.merchandise.price.amount,
                        line.merchandise.price.currencyCode,
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
                        className="ghost-border flex h-8 w-8 items-center justify-center rounded-full text-on-surface transition hover:bg-surface-container-low"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm text-on-surface">
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
                      <button
                        type="button"
                        onClick={() => removeLine(line.id)}
                        className="ml-2 text-xs text-secondary hover:underline"
                      >
                        Quitar
                      </button>
                    </div>
                  </div>
                  <div className="text-right text-sm font-medium text-on-surface">
                    {formatPrice(
                      (
                        parseFloat(line.merchandise.price.amount) *
                        line.quantity
                      ).toString(),
                      line.merchandise.price.currencyCode,
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {lines.length > 0 && (
          <DrawerFooter className="bg-surface-container-low">
            <p className="text-sm text-on-surface/70">
              {cart?.totalQuantity ?? 0}{" "}
              {(cart?.totalQuantity ?? 0) === 1
                ? "artículo"
                : "artículos"}
            </p>
            <a href={cart?.checkoutUrl} className="btn-primary text-center">
              Pagar pedido
            </a>
            <DrawerClose asChild>
              <Link
                href="/cart"
                className="text-center text-sm text-on-surface/65 underline-offset-4 hover:underline"
              >
                Ver carrito completo
              </Link>
            </DrawerClose>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
}
