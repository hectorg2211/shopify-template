import { ProductsList } from "./components/ProductsList";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-8 text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Store Products
        </h1>
        <ProductsList />
      </main>
    </div>
  );
}
