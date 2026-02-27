"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export function CartIcon() {
  const { cart, isLoading } = useCart();
  const count = cart?.totalQuantity ?? 0;

  return (
    <Link
      href="/cart"
      className="relative rounded p-2 text-black transition hover:bg-zinc-100"
      aria-label={`Cart${count > 0 ? ` (${count} items)` : ""}`}
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
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] font-medium text-white">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </Link>
  );
}
