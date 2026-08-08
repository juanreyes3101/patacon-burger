export interface MenuItem {
  nombre: string;
  descripcion: string;
  precio: number;
  destacado?: boolean;
  /** Nombre de archivo en src/assets/productos/ (opcional, ej. "patacon-clasica.jpg"). */
  imagen?: string;
}

export interface MenuCategoria {
  slug: string;
  titulo: string;
  items: MenuItem[];
}

// Precios en pesos colombianos (COP). [PENDIENTE: confirmar precios definitivos]
export const menu: MenuCategoria[] = [
  {
    slug: "patacones",
    titulo: "Patacón Burgers",
    items: [
      {
        nombre: "Patacón Burger Clásica",
        descripcion:
          "Carne de res, queso, lechuga, tomate y salsa de la casa, entre dos patacones crujientes.",
        precio: 14000,
        destacado: true,
        imagen: "patacon-clasica.jpg",
      },
      {
        nombre: "Patacón Burger Especial",
        descripcion: "La clásica con tocineta, huevo frito y doble queso.",
        precio: 18000,
        destacado: true,
        imagen: "patacon-especial.jpg",
      },
      {
        nombre: "Patacón Burger de Pollo",
        descripcion: "Pollo desmechado, queso, lechuga, tomate y salsa de la casa.",
        precio: 14000,
        imagen: "patacon-pollo.jpg",
      },
    ],
  },
  {
    slug: "empanadas-y-pasteles",
    titulo: "Empanadas y pasteles",
    items: [
      {
        nombre: "Empanada de carne",
        descripcion: "Empanada casera frita, receta de la familia.",
        precio: 2500,
        imagen: "empanada-carne.jpg",
      },
      {
        nombre: "Empanada de pollo",
        descripcion: "Empanada casera frita, receta de la familia.",
        precio: 2500,
        imagen: "empanada-pollo.jpg",
      },
      {
        nombre: "Pastel de carne",
        descripcion: "Masa de hojaldre rellena, horneado del día.",
        precio: 3000,
        imagen: "pastel-carne.jpg",
      },
    ],
  },
  {
    slug: "chorizos",
    titulo: "Chorizos",
    items: [
      {
        nombre: "Chorizo a la parrilla",
        descripcion: "Chorizo tradicional asado en carbón, con arepa y ají de la casa.",
        precio: 8000,
        imagen: "chorizo-parrilla.jpg",
      },
    ],
  },
  {
    slug: "bebidas",
    titulo: "Bebidas",
    items: [
      {
        nombre: "Gaseosa",
        descripcion: "Personal, varios sabores.",
        precio: 3000,
        imagen: "gaseosa.jpg",
      },
      {
        nombre: "Limonada natural",
        descripcion: "Hecha al momento.",
        precio: 4000,
        imagen: "limonada-natural.jpg",
      },
    ],
  },
];
