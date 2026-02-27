import { cookies } from "next/headers";
import { createCart, addToCart } from "@/lib/shopify";
import { NextRequest, NextResponse } from "next/server";

const CART_COOKIE = "cart_id";

export async function POST(request: NextRequest) {
  const { variantId, quantity = 1 } = await request.json();

  if (!variantId) {
    return NextResponse.json({ error: "Variant ID required" }, { status: 400 });
  }

  const cookieStore = await cookies();
  const existingCartId = cookieStore.get(CART_COOKIE)?.value;
  let cart;

  if (existingCartId) {
    cart = await addToCart(existingCartId, variantId, quantity);
  } else {
    cart = await createCart(variantId, quantity);
  }

  if (!cart) {
    return NextResponse.json({ error: "Failed to add to cart" }, { status: 500 });
  }

  const response = NextResponse.json({ cart });
  response.cookies.set(CART_COOKIE, cart.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return response;
}
