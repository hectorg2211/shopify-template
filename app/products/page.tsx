import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductsList } from "../components/ProductsList";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-8 text-3xl font-semibold tracking-tight text-black">
          Store Products
        </h1>
        <ProductsList />
      </main>
      <Footer />
    </div>
  );
}
