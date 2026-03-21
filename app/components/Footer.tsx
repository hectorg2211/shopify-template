"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { brandPhotoUrl } from "@/lib/site-images";
import { landingTransition, landingViewport } from "./landing-motion";

const customerLinks = [
  "Sobre nosotros",
  "Nuestro yogur",
  "Equipo",
  "Tiendas",
  "Trabaja con nosotros",
  "Términos",
];

const supportLinks = [
  "Ayuda",
  "Contacto",
  "Devoluciones",
  "Pedidos",
  "Envíos y recogida",
];

export function Footer() {
  return (
    <footer className="flex flex-col gap-3 px-4 pb-4 pt-8 text-on-primary">
      <motion.div
        className="overflow-hidden rounded-[2rem] shadow-ambient lg:rounded-[3rem]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={landingViewport}
        transition={landingTransition}
      >
      <div className="relative overflow-hidden bg-primary">
        <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-secondary-fixed-dim/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-primary-container/25 blur-3xl" />
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=60"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col justify-between gap-14 lg:flex-row">
            <div className="flex gap-16">
              <div>
                <p className="font-heading text-4xl font-bold tracking-[-0.02em]">
                  30+
                </p>
                <p className="mt-1 text-sm text-on-primary/75">
                  sabores al año
                </p>
              </div>
              <div>
                <p className="font-heading text-4xl font-bold tracking-[-0.02em]">
                  15K
                </p>
                <p className="mt-1 text-sm text-on-primary/75">
                  clientes felices
                </p>
              </div>
            </div>
            <div className="max-w-md flex-1">
              <p className="text-sm font-bold uppercase tracking-widest text-secondary-container">
                Suscríbete a la newsletter
              </p>
              <form className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-2">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-1 rounded-2xl border border-outline-variant/20 bg-white/10 px-4 py-3 text-on-primary placeholder:text-on-primary/55 outline-none transition focus:ring-2 focus:ring-primary-fixed/90"
                />
                <button
                  type="submit"
                  className="btn-primary shrink-0 px-6 py-3"
                >
                  Suscribirme
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </motion.div>

      <motion.div
        className="overflow-hidden rounded-[2rem] shadow-ambient lg:rounded-[3rem]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={landingViewport}
        transition={{ ...landingTransition, delay: 0.08 }}
      >
      <div id="contacto" className="bg-surface-container-low py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-6">
            <div className="lg:col-span-2">
              <div className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt=""
                  width={72}
                  height={72}
                  className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16"
                />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-on-surface/75">
                Heladería especializada en yogur helado y helados con
                ingredientes naturales. Frescura, sabor y un toque casero en
                cada cucharada.
              </p>
              <div className="mt-8 flex items-start gap-4">
                <div className="relative h-16 w-24 overflow-hidden rounded-2xl bg-surface-container-low shadow-ambient">
                  <Image
                    src={brandPhotoUrl(200, 80)}
                    alt="Interior de la tienda"
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <div className="text-sm text-on-surface/75">
                  <p>Calle del Helado 12, 28013 Madrid, España</p>
                  <a
                    href="mailto:hola@ejemplo.com"
                    className="mt-1 block font-medium text-primary hover:underline"
                  >
                    hola@ejemplo.com
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <p className="text-sm font-bold uppercase tracking-widest text-tertiary">
                Información
              </p>
              <ul className="mt-4 space-y-2">
                {customerLinks.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-on-surface/80 transition hover:text-primary"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2">
              <p className="text-sm font-bold uppercase tracking-widest text-tertiary">
                Atención al cliente
              </p>
              <ul className="mt-4 space-y-2">
                {supportLinks.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-on-surface/80 transition hover:text-primary"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
                {["facebook", "twitter", "instagram", "youtube"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      aria-label={social}
                      className="text-on-surface/50 transition hover:text-primary"
                    >
                      <span className="sr-only">{social}</span>
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                      </svg>
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-surface py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-on-surface/60">
            © {new Date().getFullYear()}. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <Link
              href="#"
              className="text-sm text-on-surface/60 transition hover:text-primary"
            >
              Términos y condiciones
            </Link>
            <Link
              href="#"
              className="text-sm text-on-surface/60 transition hover:text-primary"
            >
              Política de privacidad
            </Link>
          </div>
        </div>
      </div>
      </motion.div>
    </footer>
  );
}
