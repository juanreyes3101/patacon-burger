# Patacón Burger — sitio web

Sitio multi-página para un local de comidas rápidas de barrio cuyo producto estrella es la hamburguesa de patacón. Este proyecto también sirve como ejercicio práctico para aprender Claude Code (este archivo, las skills en `.claude/skills/`, y los hooks en `.claude/settings.json`).

## Stack

- **Astro** (sin frameworks de UI, HTML por página, cero JS en el cliente por defecto).
- Sin CSS framework: estilos propios en `src/styles/global.css` siguiendo la paleta cálida definida abajo.

## Desarrollo

Al levantar el servidor de desarrollo, usar modo background:

```
astro dev --background
```

Administrar el servidor con `astro dev stop`, `astro dev status`, `astro dev logs`.

`npm run build` compila el sitio y valida que no haya errores — correr esto antes de cada push.

## Estructura

```
src/
  layouts/BaseLayout.astro    # header + footer compartidos por todas las páginas
  components/
    MenuItem.astro            # una tarjeta de producto (nombre, descripción, precio)
    WhatsAppButton.astro      # botón sticky de pedido por WhatsApp
  data/menu.ts                # fuente única de verdad del menú (productos y precios)
  pages/
    index.astro                # Inicio
    menu.astro                 # Menú completo
    nosotros.astro              # Historia del local
    contacto.astro              # Ubicación, horario, WhatsApp
  styles/global.css
public/                        # logo, favicon, fotos
```

## Cómo agregar un producto al menú

Editar `src/data/menu.ts` y agregar un objeto al arreglo de la categoría correspondiente (`patacones`, `empanadasYPasteles`, `chorizos`, `bebidas`). Cada producto es `{ nombre, descripcion, precio, destacado? }`. La página `/menu` se genera automáticamente a partir de este archivo — no hay que tocar HTML.

Para hacerlo de forma guiada, usar la skill `/agregar-item-menu`.

## Cómo agregar una página nueva

1. Crear el archivo en `src/pages/<slug>.astro`.
2. Envolver el contenido con `BaseLayout` (así hereda header, footer y estilos).
3. Agregar el enlace en la navegación dentro de `BaseLayout.astro`.

## Identidad visual

- **Colores**: rojo/naranja como color principal (apetito, comida callejera), amarillo como acento, fondo oscuro para secciones de contraste. Variables CSS definidas en `src/styles/global.css`.
- **Tipografía**: un título con carácter (estilo rótulo urbano) para nombre/encabezados + una tipografía simple y legible para cuerpo y menú.
- **Foto principal**: la hamburguesa de patacón es la protagonista del hero de Inicio.
- **CTA**: el botón de WhatsApp para pedir debe ser visible en todo momento (sticky), el sitio es mobile-first.

## Contenido pendiente de datos reales

Placeholders marcados con `[PENDIENTE: ...]` en el código para: dirección exacta, horario, número de WhatsApp, precios definitivos y fotos reales del local/productos. Reemplazar antes de publicar en producción.

## Despliegue

El sitio se publica en **GitHub Pages** desde el repositorio `juanreyes3101/patacon-burger`. Cada cambio se sube como commit/PR independiente siguiendo el flujo normal de rama → cambios → push → PR.
