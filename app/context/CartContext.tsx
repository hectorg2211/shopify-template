"use client";

import {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Cart } from "@/lib/shopify";

type CartContextType = {
  cart: Cart | null;
  isLoading: boolean;
  addToCart: (variantId: string, quantity?: number) => Promise<boolean>;
  updateQuantity: (lineId: string, quantity: number) => Promise<boolean>;
  removeLine: (lineId: string) => Promise<boolean>;
  refreshCart: () => Promise<void>;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refreshCart = useCallback(async () => {
    try {
      const res = await fetch("/api/cart");
      const { cart: data } = await res.json();
      setCart(data);
    } catch {
      setCart(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshCart();
  }, [refreshCart]);

  const addToCart = useCallback(
    async (variantId: string, quantity = 1) => {
      try {
        const res = await fetch("/api/cart/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ variantId, quantity }),
          credentials: "include",
        });
        const { cart: data } = await res.json();
        if (data) {
          setCart(data);
          return true;
        }
        return false;
      } catch {
        return false;
      }
    },
    []
  );

  const updateQuantity = useCallback(
    async (lineId: string, quantity: number) => {
      if (!cart) return false;
      try {
        const res = await fetch("/api/cart/update", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cartId: cart.id, lineId, quantity }),
        });
        const { cart: data } = await res.json();
        if (data) {
          setCart(data);
          return true;
        }
        return false;
      } catch {
        return false;
      }
    },
    [cart]
  );

  const removeLine = useCallback(
    async (lineId: string) => {
      if (!cart) return false;
      try {
        const res = await fetch("/api/cart/remove", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cartId: cart.id, lineId }),
        });
        const { cart: data } = await res.json();
        if (data) {
          setCart(data);
          return true;
        }
        return false;
      } catch {
        return false;
      }
    },
    [cart]
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        isLoading,
        addToCart,
        updateQuantity,
        removeLine,
        refreshCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
