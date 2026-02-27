import { getAllProducts } from "@/lib/shopify";
import { NextResponse } from "next/server";

export async function GET() {
  const products = await getAllProducts();
  return NextResponse.json(products);
}
