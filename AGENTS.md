# AGENTS.md — Urbe Propiedades

Guía para agentes automáticos (Copilot, Codex, Claude, etc.) y colaboradores
humanos que trabajen en este repositorio.

> **Estado actual del repo**
> Este repositorio (`urbepropiedades`) aloja el sitio web de **Urbe
> Propiedades** (inmobiliaria). La migración de contenido, marca en el
> código y metadatos ya está aplicada. Sigue pendiente el branding
> gráfico definitivo (`public/favicon.svg`, `src/assets/hero.png`,
> ilustración de la OG image), los datos reales de contacto y la
> configuración DNS del dominio productivo. Ver la sección
> [Pendientes de migración](#pendientes-de-migración) más abajo.

---

## 1. Resumen del proyecto

- **Producto**: sitio web público de Urbe Propiedades (landing + secciones
  informativas; a futuro, listado de propiedades).
- **Tipo**: SPA estática generada con Vite, desplegada en GitHub Pages.
- **Idioma del contenido**: español.
- **Audiencia**: clientes que buscan comprar, vender o alquilar propiedades.

## 2. Stack técnico

| Área              | Tecnología                                   |
| ----------------- | -------------------------------------------- |
| Framework UI      | React 19 (`react`, `react-dom`)              |
| Bundler / dev     | Vite 8 (`@vitejs/plugin-react`)              |
| Lenguaje          | TypeScript 5 (strict)                        |
| Estilos           | TailwindCSS 3 + PostCSS + Autoprefixer       |
| Animaciones       | `framer-motion`                              |
| Iconografía       | `lucide-react`                               |
| Linter            | `oxlint` (con plugins `react`, `oxc`)        |
| Node module type  | ESM (`"type": "module"` en `package.json`)   |

## 3. Estructura del proyecto

```
urbepropiedades/
├── AGENTS.md               ← este archivo
├── README.md
├── CNAME                   ← dominio propio (actualmente aseresoft.com)
├── index.html              ← entry HTML (title, meta, favicon)
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json           ← strict, alias @/* → src/*
├── tsconfig.node.json
├── vite.config.js          ← usa BASE_PATH, alias @
├── public/                 ← assets estáticos servidos tal cual
└── src/
    ├── main.tsx            ← bootstrap React
    ├── App.tsx             ← composición de secciones
    ├── index.css           ← imports Tailwind + estilos globales
    ├── vite-env.d.ts
    ├── assets/
    ├── components/
    │   ├── sections/       ← una sección de página por archivo
    │   │   ├── Navbar.tsx
    │   │   ├── Hero.tsx
    │   │   ├── Services.tsx
    │   │   ├── Solutions.tsx
    │   │   ├── Process.tsx
    │   │   ├── About.tsx           (lazy) — Nosotros: valores + equipo
    │   │   ├── Faqs.tsx            (lazy) — Preguntas frecuentes
    │   │   ├── Testimonials.tsx    (lazy)
    │   │   ├── CTA.tsx
    │   │   ├── Contact.tsx
    │   │   └── Footer.tsx
    │   └── ui/             ← primitivas reutilizables
    │       ├── Button.tsx
    │       ├── Card.tsx
    │       ├── Container.tsx
    │       └── Section.tsx
    ├── data/
    │   └── siteContent.ts  ← TODO el copy y datos del sitio
    └── types/
        └── content.ts      ← tipos que consume siteContent.ts
```

## 4. Scripts npm

Ejecutar siempre con `npm` (hay `package-lock.json`, no usar `yarn` ni `pnpm`).

| Script                | Uso                                                    |
| --------------------- | ------------------------------------------------------ |
| `npm run dev`         | Servidor de desarrollo Vite con HMR.                   |
| `npm run build`       | Build de producción (`base: '/'`).                     |
| `npm run build:ghpages` | Build para publicar bajo subruta (`/urbepropiedades/`).|
| `npm run typecheck`   | `tsc --noEmit` con `strict`.                           |
| `npm run lint`        | `oxlint` con la config de `.oxlintrc.json`.            |
| `npm run preview`     | Sirve localmente el `dist/` ya construido.             |

**Antes de commitear siempre:**

```bash
npm run typecheck && npm run lint
```

Si alguno falla, corregir antes de hacer commit / abrir PR.

## 5. Convenciones de código

### TypeScript / módulos
- `strict: true`, más `noUnusedLocals`, `noUnusedParameters`,
  `noFallthroughCasesInSwitch`. No introducir `any` implícito ni desactivar
  reglas por conveniencia.
- Alias de import: `@/…` mapea a `src/…`. Usar siempre el alias, no rutas
  relativas largas (`../../..`).
- `moduleResolution: "Bundler"`, ESM en todo el proyecto.

### Componentes React
- Componentes **funcionales**, con **exports nombrados** (no `default`),
  salvo `App.tsx` y `main.tsx`.
- Secciones de página van en `src/components/sections/`; primitivas visuales
  reutilizables en `src/components/ui/`.
- Componentes puramente presentacionales. La data se importa desde
  `src/data/siteContent.ts`.
- Para secciones grandes que no aparezcan above-the-fold, usar
  `React.lazy` + `Suspense` (ver `App.tsx` para el patrón).

### Contenido y datos
- **Todo el copy editable del sitio vive en `src/data/siteContent.ts`.**
- Los tipos (`NavItem`, `FeatureItem`, `SolutionItem`, `ProcessStep`,
  `AboutValue`, `TeamMember`, `Faq`, `Testimonial`, `StatItem`, …) están
  en `src/types/content.ts`. Si se agrega una nueva pieza de contenido,
  crear o extender un tipo antes de usarla.
- Los iconos se toman de `lucide-react` y se guardan como `LucideIcon` dentro
  del propio dato (ver ejemplo en `siteContent.ts`).

### Estilos
- **Solo Tailwind** (más `index.css` global). No introducir CSS-in-JS,
  módulos CSS, ni otra librería de estilos sin acordarlo.
- Paleta y tokens en `tailwind.config.js`: `base.{950,900,800,700,100}`,
  `indigoGlow`, `blueGlow`; fuentes `Sora` / `Space Grotesk`; sombras
  `soft` / `glow`; gradiente `bg-radial-premium`; animación `float`.
- Preferir composición de utilidades Tailwind sobre estilos ad-hoc.

### Accesibilidad
- Mantener el enlace "Saltar al contenido" en `App.tsx`.
- Elementos puramente decorativos con `aria-hidden="true"`.
- Alt text descriptivo en imágenes; `aria-label` en botones sin texto.

### Linter (oxlint)
- `react/rules-of-hooks: error`
- `react/only-export-components: warn` (permite `allowConstantExport`)

## 6. Build y despliegue

- Hosting: **GitHub Pages**.
- Dominio propio configurado en `CNAME`: `urbepropiedades.com`
  (**placeholder**, pendiente de configurar DNS real).
- El workflow "Deploy GitHub Pages" corre en cada push a `main` (según
  README). Si no existe en `.github/workflows/`, crearlo antes de depender
  de él.
- Para publicar bajo subruta (`/urbepropiedades/` u otra) usar la variable
  `BASE_PATH` que consume `vite.config.js`.

## 7. Flujo de trabajo para agentes

Cuando trabajes en este repo, en este orden:

1. **Cambios de texto / copy / datos** → editar `src/data/siteContent.ts`.
   Nunca hardcodear copy dentro de un componente.
2. **Cambios de layout / estilos** → editar el componente de sección en
   `src/components/sections/` o la primitiva en `src/components/ui/`.
3. **Nueva sección**:
   - Crear el componente en `src/components/sections/NombreSeccion.tsx` con
     export nombrado.
   - Si es above-the-fold, importarlo directamente en `App.tsx`; si no,
     cargarlo con `React.lazy` y envolverlo en `<Suspense>` como los
     ejemplos existentes.
   - Añadir su ancla al array `navItems` de `siteContent.ts` si debe
     aparecer en la navegación.
4. **Nuevo tipo de contenido** → declarar en `src/types/content.ts` primero,
   luego usar en `siteContent.ts`.
5. **Nuevos iconos** → importar de `lucide-react`. No agregar otras librerías
   de iconos.
6. **Antes de terminar**: correr `npm run typecheck && npm run lint`, y si
   tocaste build/config, además `npm run build` para confirmar que compila.
7. **Commits**: mensajes en español, imperativo breve; no commitear
   `node_modules/`, `dist/`, ni archivos `.local`.

### Qué NO hacer
- No introducir Redux, Zustand, React Router, CSS-in-JS ni otro framework
  sin necesidad justificada.
- No romper `strict` mode ni silenciar reglas de TS/oxlint.
- No eliminar el link "saltar al contenido" ni otros affordances de a11y.
- No subir claves, tokens, ni configuraciones de terceros al repo.
- No modificar `CNAME` sin coordinar (afecta al DNS del dominio en vivo).

## 8. Pendientes de migración

La migración de contenido y marca a nivel código ya se aplicó. Los ítems
siguientes quedan abiertos y **requieren decisiones/assets externos**:

### 8.1 Assets gráficos (branding definitivo)
- [ ] `public/favicon.svg` — sigue siendo el favicon heredado.
- [ ] `src/assets/hero.png` — ilustración genérica; reemplazar por una
      imagen alineada al mercado inmobiliario.
- [ ] `public/og-image.svg` — el texto ya dice "Urbe Propiedades" pero
      el fondo y estilo son heredados.

### 8.2 Datos reales
- [ ] Reemplazar los placeholders en `contactInfo` (email, teléfono,
      WhatsApp, dirección, horario) dentro de `src/data/siteContent.ts`.
- [ ] Completar `teamMembers` con nombres, roles e iniciales reales.
- [ ] Enlazar redes sociales reales en `Footer.tsx` (hoy `href="#"`).
- [ ] Reemplazar los testimonios placeholder por reales (con autorización).

### 8.3 Dominio y deploy
- [ ] Confirmar dominio productivo definitivo. Si no es
      `urbepropiedades.com`, actualizar:
      - `CNAME` (raíz) y `public/CNAME`.
      - `index.html` (canonical, `og:url`).
      - `public/sitemap.xml` y `public/robots.txt`.
- [ ] Configurar DNS del dominio → `jjrosalesuci.github.io`.
- [ ] Verificar/crear workflow en `.github/workflows/` para GitHub Pages.

### 8.4 Formulario de contacto
- [ ] `Contact.tsx` postea a `action="#"`. Conectar a un backend real
      (Formspree, Web3Forms, endpoint propio, etc.) o convertirlo en
      `mailto:` según decisión de producto.

### 8.5 Legales
- [ ] Agregar página o sección de política de privacidad / términos si
      corresponde a la jurisdicción.
- [ ] Incluir en el footer la matrícula del corredor responsable cuando
      aplique.

---

## 9. Contacto / dueño del repo

- Repositorio: `jjrosalesuci/urbepropiedades`
- Mantenedor: @jjrosalesuci
