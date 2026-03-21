"use client";

import { motion, type Variants } from "framer-motion";

export const landingViewport = { once: true, margin: "-72px" } as const;

export const landingTransition = {
  duration: 0.5,
  ease: "easeOut" as const,
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

/** Panel de vídeo (misma idea que el hero: leve zoom al entrar). */
export const staggerItemVideo: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

type FadeInSectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  delay?: number;
};

export function FadeInSection({
  id,
  className,
  children,
  delay = 0,
}: FadeInSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={landingViewport}
      transition={{ ...landingTransition, delay }}
    >
      {children}
    </motion.section>
  );
}

type BlurWordsProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
  /** Centra las palabras (flex justify-center); útil bajo bloques text-center. */
  centered?: boolean;
};

export function BlurWords({
  text,
  className,
  as: Tag = "h2",
  centered = false,
}: BlurWordsProps) {
  const words = text.split(/\s+/).filter(Boolean);
  return (
    <Tag className={className}>
      <span
        className={`flex flex-wrap gap-x-2 gap-y-1 ${centered ? "justify-center" : ""}`}
      >
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            className="inline-block"
            initial={{ filter: "blur(12px)", opacity: 0 }}
            whileInView={{ filter: "blur(0px)", opacity: 1 }}
            viewport={landingViewport}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.08 + i * 0.04,
            }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </Tag>
  );
}

type FadeInProps = {
  className?: string;
  children: React.ReactNode;
  delay?: number;
};

export function FadeInBlock({ className, children, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={landingViewport}
      transition={{ ...landingTransition, delay }}
    >
      {children}
    </motion.div>
  );
}
