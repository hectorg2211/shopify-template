import Image from "next/image";
import Link from "next/link";
import { FLAVORS_SHOWCASE } from "@/lib/flavors-showcase";

export function IceCreamFlavors() {
  return (
    <section id="sabores" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-tertiary">
              Carta
            </p>
            <h2 className="mt-2 text-4xl font-bold tracking-[-0.02em] text-on-surface md:text-5xl">
              SABORES DE HELADO
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-on-surface/75">
              Clásicos de siempre y combinaciones especiales. Pide tu favorito
              en cucurucho, tarrina o vaso — siempre con la misma textura cremosa.
            </p>
          </div>
          <Link href="/products" className="btn-primary w-fit shrink-0">
            Ver todo
          </Link>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
          {FLAVORS_SHOWCASE.map((item) => (
            <div
              key={item.name}
              className="group rounded-[2rem] shadow-ambient"
            >
              <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-surface-container-low">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="mt-3 px-0.5">
                <p className="font-medium uppercase tracking-wide text-on-surface">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
