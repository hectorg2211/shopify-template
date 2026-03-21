"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BlurWords,
  FadeInBlock,
  FadeInSection,
  landingViewport,
  staggerContainer,
  staggerItem,
  staggerItemVideo,
} from "./landing-motion";

const features = [
  {
    title: "Sabores",
    description:
      "Vainilla, chocolate, frutos rojos, plátano, mantequilla de cacahuete y ediciones de temporada. Siempre probando nuevas combinaciones.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    title: "Toppings",
    description:
      "Fruta fresca, salsas, galleta troceada, virutas de chocolate y frutos secos. Tú eliges cómo rematar cada copa o tarrina.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    ),
  },
  {
    title: "Formatos",
    description:
      "Tarrinas de 100 ml y medianas, vasos en tres tamaños, cono y packs de 4 para casa. Ideal para un capricho o para compartir.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
      />
    ),
  },
  {
    title: "Receta casera",
    description:
      "Yogurt y leche fresca, elaboración diaria y sin trucos raros: el sabor honesto que te gustaría servir en tu propia cocina.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
      />
    ),
  },
];

const featuredVideoSrc = "/reels/4.mp4";

const videoPoster =
  "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80";

const featuredTitle = "HELADO ARTESANAL — SABORES PARA TODOS";

const featuredDescription =
  "Elige entre clásicos como vainilla y chocolate, frutales y combinaciones especiales. Añade toppings: fruta fresca, salsas, galleta, frutos secos o virutas de chocolate. Disponible en tarrina para compartir, vaso mediano o grande, y cono pequeño o grande. Textura cremosa, ingredientes de calidad y el tamaño que mejor te encaje.";

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <div className="flex w-full gap-4 rounded-3xl bg-surface-container-lowest p-5 shadow-ambient ring-1 ring-on-surface/5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-surface-container-low">
        <svg
          className="h-6 w-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {icon}
        </svg>
      </div>
      <div className="min-w-0 flex-1 text-left">
        <h3 className="text-sm font-bold uppercase tracking-wide text-on-surface">
          {title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-on-surface/70">
          {description}
        </p>
      </div>
    </div>
  );
}

export function FeaturedProduct() {
  return (
    <FadeInSection id="yogurt" className="bg-surface-container-low py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <FadeInBlock>
            <p className="text-xs font-semibold uppercase tracking-widest text-tertiary">
              Favorito de la casa
            </p>
          </FadeInBlock>
          <BlurWords
            text={featuredTitle}
            centered
            className="mt-2 text-4xl font-bold tracking-[-0.02em] text-on-surface md:text-5xl"
          />
          <FadeInBlock delay={0.15}>
            <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-on-surface/75">
              {featuredDescription}
            </p>
          </FadeInBlock>
        </div>
        <motion.div
          className="relative mt-16 flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-start lg:gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={landingViewport}
        >
          <motion.div
            variants={staggerItem}
            className="order-2 flex w-full max-w-md flex-col gap-5 lg:order-1 lg:max-w-70"
          >
            {features.slice(0, 2).map(({ title, description, icon }) => (
              <FeatureCard
                key={title}
                title={title}
                description={description}
                icon={icon}
              />
            ))}
          </motion.div>
          <motion.div
            className="relative aspect-square w-full max-w-md overflow-hidden rounded-[2rem] shadow-ambient lg:order-2 lg:rounded-[3rem]"
            variants={staggerItemVideo}
          >
            <Link href="/products" className="absolute inset-0 block">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster={videoPoster}
                aria-label="Helado artesanal Kora Yogurt"
              >
                <source src={featuredVideoSrc} type="video/mp4" />
              </video>
            </Link>
          </motion.div>
          <motion.div
            variants={staggerItem}
            className="order-3 flex w-full max-w-md flex-col gap-5 lg:max-w-70"
          >
            {features.slice(2, 4).map(({ title, description, icon }) => (
              <FeatureCard
                key={title}
                title={title}
                description={description}
                icon={icon}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </FadeInSection>
  );
}
