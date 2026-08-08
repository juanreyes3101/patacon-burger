export const imagenesProductos = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/productos/*.{jpg,jpeg,png,webp}",
  { eager: true }
);
