"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  BlurWords,
  FadeInBlock,
  FadeInSection,
  landingViewport,
  staggerContainer,
  staggerItem,
} from "./landing-motion";

/** Vídeos en `public/reels/` (1.mp4 … 4.mp4). */
const REELS = [
  { id: "1", src: "/reels/1.mp4" },
  { id: "2", src: "/reels/2.mp4" },
  { id: "3", src: "/reels/3.mp4" },
  { id: "4", src: "/reels/4.mp4" },
] as const;

const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/korayogurtmx/";
const INSTAGRAM_HANDLE = "@korayogurtmx";

export function InstagramCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByDir = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.85, 360) * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <FadeInSection id="instagram" className="bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <FadeInBlock>
              <p className="text-xs font-semibold uppercase tracking-widest text-tertiary">
                Redes sociales
              </p>
            </FadeInBlock>
            <BlurWords
              text="Instagram"
              className="mt-2 font-heading text-3xl font-bold tracking-[-0.02em] text-on-surface md:text-4xl"
            />
            <FadeInBlock delay={0.12}>
              <p className="mt-2 max-w-xl text-on-surface/75">
                <Link
                  href={INSTAGRAM_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary underline-offset-2 hover:underline"
                >
                  {INSTAGRAM_HANDLE}
                </Link>
                — reels y publicaciones recientes. Desliza o usa las flechas para
                ver más.
              </p>
            </FadeInBlock>
          </div>
          <FadeInBlock delay={0.18}>
            <Link
              href={INSTAGRAM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary gap-2 self-start px-5 py-2.5 text-sm sm:self-auto"
            >
              <InstagramGlyph className="h-5 w-5" aria-hidden />
              Ver en Instagram
            </Link>
          </FadeInBlock>
        </div>

        <div className="relative mt-10">
          <button
            type="button"
            onClick={() => scrollByDir(-1)}
            className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-surface-container-lowest/95 p-2.5 text-on-surface shadow-ambient backdrop-blur-sm transition hover:bg-surface-container-low md:flex"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByDir(1)}
            className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-surface-container-lowest/95 p-2.5 text-on-surface shadow-ambient backdrop-blur-sm transition hover:bg-surface-container-low md:flex"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <motion.div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={landingViewport}
          >
            {REELS.map((reel) => (
              <motion.article
                key={reel.id}
                variants={staggerItem}
                className="w-[min(100%,326px)] shrink-0 snap-start"
              >
                <div className="overflow-hidden rounded-3xl bg-black shadow-ambient ring-1 ring-outline-variant/10">
                  <div className="aspect-9/16 w-full">
                    <ReelVideo
                      src={reel.src}
                      title={`Reel ${reel.id}`}
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </FadeInSection>
  );
}

function ReelVideo({ src, title }: { src: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            void video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.4, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className="h-full w-full object-contain"
      controls
      playsInline
      muted
      loop
      preload="metadata"
      title={title}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}
