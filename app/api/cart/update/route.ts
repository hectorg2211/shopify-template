import { updateCartLine } from "@/lib/shopify";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { cartId, lineId, quantity } = await request.json();

  if (!cartId || !lineId || quantity == null) {
    return NextResponse.json(
      { error: "cartId, lineId, and quantity required" },
      { status: 400 }
    );
  }

  const cart = await updateCartLine(cartId, lineId, quantity);

  if (!cart) {
    return NextResponse.json({ error: "Failed to update cart" }, { status: 500 });
  }

  return NextResponse.json({ cart });
}
