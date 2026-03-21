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
  className = "btn-primary mt-8",
  children = "Añadir al carrito",
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
      {isAdding ? "Añadiendo…" : children}
    </button>
  );
}
