import { getAllProducts } from "@/lib/shopify";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FeaturedProduct } from "./components/FeaturedProduct";
import { BrowseCollection } from "./components/BrowseCollection";
import { GearEssentials } from "./components/GearEssentials";
import { Footer } from "./components/Footer";

export default async function Home() {
  const products = await getAllProducts();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturedProduct product={products[0]} />
        <BrowseCollection products={products.slice(0, 4)} />
        <GearEssentials products={products} />
      </main>
      <Footer />
    </div>
  );
}
