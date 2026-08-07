---
name: agregar-item-menu
description: Agrega un producto nuevo al menú de Patacón Burger (src/data/menu.ts) de forma guiada, pidiendo nombre, descripción, precio y categoría, sin tener que editar el archivo a mano.
---

# Agregar producto al menú

Este skill automatiza el flujo repetitivo de sumar un producto nuevo al menú del sitio.

## Pasos

1. Lee `src/data/menu.ts` para ver las categorías existentes (`slug` y `titulo` de cada una).
2. Si el usuario no dio todos los datos en su mensaje, pregunta lo que falte:
   - Nombre del producto
   - Descripción corta (una frase)
   - Precio en pesos colombianos (número entero)
   - Categoría: una de las existentes, o si es una categoría nueva, confirma el nombre y el slug antes de crearla
   - Si es un producto destacado ("producto estrella") o no
3. Edita `src/data/menu.ts`:
   - Si la categoría ya existe, agrega el objeto `{ nombre, descripcion, precio, destacado? }` al final del arreglo `items` de esa categoría.
   - Si es una categoría nueva, agrega un nuevo objeto `{ slug, titulo, items: [...] }` al final del arreglo `menu`.
4. No toques `src/pages/menu.astro` — la página lee `menu.ts` automáticamente, no hace falta editar HTML.
5. Si el producto se marca como `destacado: true`, recuerda que también aparecerá en la sección "Lo más pedido" de Inicio (`src/pages/index.astro`), que filtra por ese campo — no requiere cambios adicionales.
6. Corre `npm run build` para confirmar que no se rompió nada.
7. Muestra al usuario un resumen de lo agregado y en qué archivo quedó.
