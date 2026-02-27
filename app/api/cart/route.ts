import { cookies } from "next/headers";
import { getCart } from "@/lib/shopify";
import { NextResponse } from "next/server";

const CART_COOKIE = "cart_id";

export async function GET() {
  const cookieStore = await cookies();
  const cartId = cookieStore.get(CART_COOKIE)?.value;

  if (!cartId) {
    return NextResponse.json({ cart: null });
  }

  const cart = await getCart(cartId);
  return NextResponse.json({ cart });
}
