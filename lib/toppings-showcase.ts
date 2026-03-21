export type ToppingShowcaseItem = {
  name: string;
  hook: string;
  ingredients: string[];
};

export const TOPPINGS_SHOWCASE: ToppingShowcaseItem[] = [
  {
    name: "Salsa de chocolate",
    hook: "Líquida, brillante, peligrosa para la camiseta blanca.",
    ingredients: [
      "Cacao en polvo",
      "Leche",
      "Un toque de miel",
      "Calor y paciencia",
    ],
  },
  {
    name: "Fruta fresca",
    hook: "Vitamina C con buena publicidad.",
    ingredients: [
      "Fruta de temporada",
      "Corte generoso",
      "Cero conservantes raros",
      "Color natural",
    ],
  },
  {
    name: "Galleta troceada",
    hook: "Crujiente. Trocea tu aburrimiento también.",
    ingredients: [
      "Galleta de mantequilla",
      "Trozos de chocolate",
      "Migas que cuentan historia",
    ],
  },
  {
    name: "Caramelo",
    hook: "Pegajoso y orgulloso; lleva servilleta.",
    ingredients: [
      "Caramelo casero",
      "Sal en punta",
      "Vainilla",
      "Textura que estira",
    ],
  },
];
