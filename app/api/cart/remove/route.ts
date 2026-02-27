import { removeFromCart } from "@/lib/shopify";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { cartId, lineId } = await request.json();

  if (!cartId || !lineId) {
    return NextResponse.json(
      { error: "cartId and lineId required" },
      { status: 400 }
    );
  }

  const cart = await removeFromCart(cartId, lineId);

  if (!cart) {
    return NextResponse.json({ error: "Failed to remove from cart" }, { status: 500 });
  }

  return NextResponse.json({ cart });
}
