import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductsList } from "../components/ProductsList";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-tertiary">
          Tienda
        </p>
        <h1 className="mb-8 mt-2 text-3xl font-bold tracking-[-0.02em] text-on-surface md:text-4xl">
          Nuestros productos
        </h1>
        <ProductsList />
      </main>
      <Footer />
    </div>
  );
}
