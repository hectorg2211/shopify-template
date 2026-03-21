export type FlavorShowcaseItem = {
  name: string;
  hook: string;
  ingredients: string[];
};

export const FLAVORS_SHOWCASE: FlavorShowcaseItem[] = [
  {
    name: "Vainilla",
    hook: "El abuelo de todos los sabores — sigue reinando.",
    ingredients: [
      "Leche fresca",
      "Vainilla de Madagascar",
      "Crema",
      "Azúcar (con mesura)",
    ],
  },
  {
    name: "Chocolate",
    hook: "Para quien desayuna mentalmente en tarrina.",
    ingredients: [
      "Cacao real",
      "Leche entera",
      "Nata",
      "Un guiño de café (secreto de casa)",
    ],
  },
  {
    name: "Frutos rojos",
    hook: "Ácido, dulce y un poco dramático.",
    ingredients: [
      "Puré de frutos del bosque",
      "Fresa & frambuesa",
      "Toque de limón",
      "Crema base",
    ],
  },
  {
    name: "Caramelo salado",
    hook: "Dulce con actitud; la sal no discute.",
    ingredients: [
      "Azúcar caramelizado",
      "Mantequilla",
      "Escamas de sal marina",
      "Nata",
    ],
  },
];
