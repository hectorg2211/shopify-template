"use client";

import { useState } from "react";
import { useCart } from "@/app/context/CartContext";

type AddToCartButtonProps = {
  variantId: string;
  className?: string;
  children?: React.ReactNode;
};

export function AddToCartButton({
  variantId,
  className = "mt-8 inline-block rounded-full border-2 border-black bg-black px-8 py-3 text-white transition hover:bg-zinc-800",
  children = "Add to Cart",
}: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleClick = async () => {
    setIsAdding(true);
    const success = await addToCart(variantId);
    setIsAdding(false);
    if (success) {
      window.location.href = "/cart";
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isAdding}
      className={className}
    >
      {isAdding ? "Adding..." : children}
    </button>
  );
}
