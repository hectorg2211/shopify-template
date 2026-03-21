import { getAllProducts } from "@/lib/shopify";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { FeaturedProduct } from "./components/FeaturedProduct";
import { BrowseCollection } from "./components/BrowseCollection";
import { IceCreamFlavors } from "./components/IceCreamFlavors";
import { GearEssentials } from "./components/GearEssentials";
import { InstagramCarousel } from "./components/InstagramCarousel";
import { Footer } from "./components/Footer";

export default async function Home() {
  const products = await getAllProducts();

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <FeaturedProduct />
        <IceCreamFlavors />
        <GearEssentials />
        <BrowseCollection products={products.slice(0, 4)} />
        <InstagramCarousel />
      </main>
      <Footer />
    </div>
  );
}
