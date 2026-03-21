"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const heroTitleWords = "HELADO Y YOGUR FRESCO HECHO CON AMOR CADA DÍA".split(
  " ",
);

const heroImage = "/hero.jpg";

export function Hero() {
  return (
    <section
      id="historia"
      className="relative flex min-h-[max(500px,calc(100dvh-150px))] items-center overflow-x-hidden py-6 sm:py-8 lg:py-10"
    >
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-secondary-fixed-dim/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-1/4 h-64 w-64 rounded-full bg-primary-container/20 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto grid h-full w-full max-w-7xl items-stretch gap-6 px-4 lg:grid-cols-2 lg:gap-8">
        <div className="flex h-full flex-col gap-6">
          <motion.div
            className="relative flex min-h-0 flex-1 flex-col justify-center overflow-hidden rounded-[2rem] bg-surface-container-low p-6 shadow-ambient lg:rounded-[3rem] lg:p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <div
              className="pointer-events-none absolute -right-8 top-0 h-40 w-40 rounded-full bg-secondary-fixed-dim/12 blur-2xl"
              aria-hidden
            />
            <p className="text-xs font-semibold uppercase tracking-widest text-tertiary">
              Nueva temporada
            </p>
            <h1 className="mt-3 flex flex-wrap gap-x-2 gap-y-1 text-2xl font-bold tracking-[-0.02em] text-on-surface sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
              {heroTitleWords.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  className="inline-block"
                  initial={{ filter: "blur(12px)", opacity: 0 }}
                  animate={{ filter: "blur(0px)", opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.2 + i * 0.05,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-on-surface/75 lg:mt-5 lg:text-lg">
              Elaboramos helados y yogur helado con leche de
              calidad, fruta natural y recetas propias. Fresco, cremoso y listo
              para llevar o disfrutar en nuestra tienda.
            </p>
            <Link href="/products" className="btn-primary mt-6 w-fit lg:mt-8">
              Ver productos
            </Link>
          </motion.div>
          <motion.div
            className="grid shrink-0 grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          >
            <motion.div
              className="rounded-2xl bg-surface-container-lowest p-4 shadow-ambient lg:rounded-3xl lg:p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-2xl bg-surface-container-low lg:mb-3 lg:h-12 lg:w-12">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wide text-on-surface lg:text-sm">
                Recogida en tienda
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-on-surface/70 lg:text-sm">
                Pide online y recoge tu pedido en el horario que prefieras.
              </p>
            </motion.div>
            <motion.div
              className="rounded-2xl bg-surface-container-lowest p-4 shadow-ambient lg:rounded-3xl lg:p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-2xl bg-surface-container-low lg:mb-3 lg:h-12 lg:w-12">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wide text-on-surface lg:text-sm">
                Pago seguro
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-on-surface/70 lg:text-sm">
                Compra con tranquilidad: datos protegidos y checkout fiable.
              </p>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="group relative min-h-[min(52vh,420px)] cursor-pointer overflow-hidden rounded-[2rem] shadow-ambient sm:min-h-[min(48vh,480px)] lg:h-full lg:min-h-[320px]"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src={heroImage}
            alt="Helado en cucurucho"
            fill
            className="h-full object-cover object-center transition-all duration-1000 ease-out group-hover:scale-110 group-hover:blur-sm"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-primary/30" />
          <Link
            href="/products"
            className="absolute inset-0 flex items-center justify-center bg-on-surface/25 opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
          >
            <span className="btn-secondary px-8 py-3">Ver carta</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
