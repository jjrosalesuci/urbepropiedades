# Urbe Propiedades

Sitio web público de **Urbe Propiedades** (inmobiliaria). SPA estática
construida con **React 19 + Vite 8 + TypeScript + TailwindCSS** y desplegada
en **GitHub Pages** bajo dominio propio.

> Consultá [`AGENTS.md`](./AGENTS.md) para las convenciones del proyecto,
> el flujo de trabajo esperado y el estado de la migración de branding.

## URL productiva (post-deploy)

- URL esperada en GitHub Pages: https://jjrosalesuci.github.io/urbepropiedades/
- Dominio propio (placeholder, pendiente de configuración DNS real):
  https://urbepropiedades.com

Configuración DNS (a completar en Cloudflare o proveedor equivalente):

- `urbepropiedades.com` → `CNAME` → `jjrosalesuci.github.io`
- Hosting: GitHub Pages.

## Scripts

- `npm run dev` — servidor de desarrollo con HMR.
- `npm run build` — build de producción (base `/`).
- `npm run build:ghpages` — build bajo subruta (`BASE_PATH=/urbepropiedades/`).
- `npm run typecheck` — `tsc --noEmit`.
- `npm run lint` — `oxlint`.
- `npm run preview` — sirve el `dist/` construido.

Antes de commitear:

```bash
npm run typecheck && npm run lint
```

## Contenido

Todo el copy editable del sitio vive en `src/data/siteContent.ts`.
No hardcodees texto dentro de los componentes.

## Pendientes de branding

- Reemplazar `public/favicon.svg`, `public/og-image.svg` y
  `src/assets/hero.png` por los assets definitivos de Urbe Propiedades.
- Completar datos reales de contacto (email, teléfono, dirección) en
  `src/data/siteContent.ts` y en los componentes que aún tengan
  placeholders.
- Confirmar dominio productivo definitivo y actualizar `CNAME`,
  `index.html` (canonical, OG) y `public/sitemap.xml` / `public/robots.txt`.
