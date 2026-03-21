"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export function CartIcon() {
  const { cart, isLoading } = useCart();
  const count = cart?.totalQuantity ?? 0;

  return (
    <Link
      href="/cart"
      className="relative rounded-full p-2 text-on-surface transition hover:bg-surface-container-low"
      aria-label={count > 0 ? `Carrito (${count} productos)` : "Abrir carrito"}
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
      {!isLoading && count > 0 && (
        <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-secondary px-0.5 text-[10px] font-semibold text-on-primary">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </Link>
  );
}
