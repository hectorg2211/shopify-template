"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CartDrawer } from "./CartDrawer";

const navLinks = [
  { href: "/#productos", label: "Productos" },
  { href: "/#productos", label: "Merch" },
  { href: "/#yogurt", label: "Yogurt helado" },
  { href: "/#sabores", label: "Sabores" },
  { href: "/#toppings", label: "Toppings" },
  { href: "/#historia", label: "Historia" },
  { href: "/#contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-xl">
      <div className="px-4 pt-4">
        <div className="rounded-full bg-primary px-4 py-3 text-center text-sm font-medium text-on-primary shadow-ambient">
          ¡10% de descuento en tu primera compra online! Código: BIENVENIDA10
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <motion.div
          initial={{ filter: "blur(12px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <Link
            href="/"
            className="flex items-center transition hover:opacity-90"
            aria-label="Inicio"
          >
            <Image
              src="/logo.svg"
              alt=""
              width={96}
              height={96}
              className="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20"
              priority
            />
          </Link>
        </motion.div>
        <nav className="hidden gap-8 md:flex">
          {navLinks.map(({ href, label }, i) => (
            <motion.div
              key={label}
              initial={{ filter: "blur(12px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.2 + i * 0.06,
              }}
            >
              <Link
                href={href}
                className="text-sm font-medium text-on-surface/85 transition hover:text-primary"
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </nav>
        <motion.div
          className="flex items-center gap-4 text-on-surface"
          initial={{ filter: "blur(12px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.2 + navLinks.length * 0.06,
          }}
        >
          <button
            type="button"
            aria-label="Buscar"
            className="rounded-full p-2 text-on-surface transition hover:bg-surface-container-low"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <CartDrawer />
          <button
            type="button"
            aria-label="Mi cuenta"
            className="rounded-full p-2 text-on-surface transition hover:bg-surface-container-low"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </header>
  );
}
