export type ToppingShowcaseItem = {
  name: string;
  image: string;
  alt: string;
};

/** Contenido fijo para la sección “Toppings”: fotos de comida, no productos de Shopify. */
export const TOPPINGS_SHOWCASE: ToppingShowcaseItem[] = [
  {
    name: "Salsa de chocolate",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
    alt: "Chocolate para topping",
  },
  {
    name: "Frutos rojos",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291775?w=800&q=80",
    alt: "Arándanos y frutos rojos",
  },
  {
    name: "Galleta troceada",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80",
    alt: "Galletas y trozos crujientes",
  },
  {
    name: "Caramelo",
    image:
      "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=800&q=80",
    alt: "Salsa de caramelo",
  },
  {
    name: "Frutos secos",
    image:
      "https://images.unsplash.com/photo-1508747703725-719777637510?w=800&q=80",
    alt: "Almendras y frutos secos",
  },
  {
    name: "Virutas de chocolate",
    image:
      "https://images.unsplash.com/photo-1511381939415-e4965546a190?w=800&q=80",
    alt: "Virutas y pepitas de chocolate",
  },
  {
    name: "Fresa fresca",
    image:
      "https://images.unsplash.com/photo-1464965901661-029e5773d0bd?w=800&q=80",
    alt: "Fresas frescas",
  },
  {
    name: "Nata montada",
    image:
      "https://images.unsplash.com/photo-1550507992-eb63ffeffd54?w=800&q=80",
    alt: "Nata montada",
  },
];
