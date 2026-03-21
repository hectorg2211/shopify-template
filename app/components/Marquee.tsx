const MARQUEE_ITEMS = [
  "Helado artesanal",
  "Yogur helado fresco",
  "Toppings caseros",
  "Recogida en tienda",
  "Fresco cada día",
] as const;

function MarqueeSegment({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-6 px-6 sm:gap-10 sm:px-10"
      aria-hidden={duplicate || undefined}
    >
      {MARQUEE_ITEMS.map((item, i) => (
        <span key={`${item}-${i}`} className="flex items-center gap-6 sm:gap-10">
          <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.2em] text-on-primary sm:text-sm">
            {item}
          </span>
          <span className="text-on-primary/40" aria-hidden>
            ·
          </span>
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div
      className="overflow-hidden bg-primary py-3.5"
      role="region"
      aria-label="Destacados de la marca"
    >
      <div className="marquee-track flex w-max">
        <MarqueeSegment />
        <MarqueeSegment duplicate />
      </div>
    </div>
  );
}
