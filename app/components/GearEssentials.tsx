"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TOPPINGS_SHOWCASE } from "@/lib/toppings-showcase";
import {
  BlurWords,
  FadeInBlock,
  FadeInSection,
  landingViewport,
  staggerContainer,
  staggerItem,
} from "./landing-motion";

export function GearEssentials() {
  return (
    <FadeInSection id="toppings" className="bg-surface-container-low py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <FadeInBlock>
              <p className="text-xs font-semibold uppercase tracking-widest text-tertiary">
                Complementos
              </p>
            </FadeInBlock>
            <BlurWords
              text="TOPPINGS Y EXTRAS"
              className="mt-2 font-heading text-4xl font-bold tracking-[-0.02em] text-on-surface md:text-5xl"
            />
            <FadeInBlock delay={0.12}>
              <p className="mt-4 max-w-xl leading-relaxed text-on-surface/75">
                Lo que sube encima cuenta tanto como lo de abajo. Aquí la lista
                de culpables.
              </p>
            </FadeInBlock>
          </div>
          <FadeInBlock delay={0.18}>
            <Link href="/products" className="btn-primary w-fit shrink-0">
              Ver todo
            </Link>
          </FadeInBlock>
        </div>
        <motion.div
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={landingViewport}
        >
          {TOPPINGS_SHOWCASE.map((item, i) => (
            <motion.article
              key={item.name}
              variants={staggerItem}
              className={`flex flex-col rounded-[2rem] border border-secondary/20 bg-surface-container-lowest p-6 shadow-ambient transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-ambient-hover ${
                i % 2 === 0 ? "hover:rotate-2" : "hover:-rotate-2"
              }`}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-secondary">
                En la barra
              </p>
              <h3 className="mt-2 font-heading text-2xl font-bold text-on-surface">
                {item.name}
              </h3>
              <p className="mt-2 text-sm leading-snug text-on-surface/70">
                {item.hook}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {item.ingredients.map((ing) => (
                  <li
                    key={ing}
                    className="rounded-full bg-secondary-container/25 px-3 py-1.5 text-xs font-medium text-on-surface"
                  >
                    {ing}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </FadeInSection>
  );
}
