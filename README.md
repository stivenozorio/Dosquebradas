# Albergues Oficiales – Dosquebradas

Plataforma informativa para que la comunidad de Dosquebradas (Risaralda) consulte
los albergues oficiales disponibles, su estado, ubicación y cómo llegar.

No reemplaza las instrucciones oficiales de la Alcaldía de Dosquebradas ni de los
organismos de gestión del riesgo.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (paleta institucional propia, ver `app/globals.css`)
- Leaflet + React-Leaflet sobre teselas de OpenStreetMap
- Pensado para desplegarse en Vercel

## Estructura del proyecto

```
app/            Rutas, layout, metadata/SEO, favicon y OG image
components/     Componentes visuales (header, hero, tarjetas, mapa, buscador...)
components/map/ Mapa interactivo (client-only) y su contenedor
data/           Única fuente de verdad de los albergues (data/albergues.ts)
lib/            Utilidades: geolocalización, enlaces de mapas, estados, formato
types/          Tipos compartidos (interfaz Albergue)
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

Comandos útiles:

```bash
npm run lint     # ESLint
npm run build    # Build de producción + chequeo de TypeScript
npm start        # Servir el build de producción
```

## Actualizar los albergues

Todo el contenido de los albergues vive en **`data/albergues.ts`**, tipado por la
interfaz `Albergue` en `types/albergue.ts`. No hay datos de albergues en los
componentes visuales.

Reglas del modelo de datos:

- Si un dato (dirección exacta, coordenadas, teléfono, capacidad, horario, fuente)
  no está confirmado oficialmente, su valor debe ser `null`. La interfaz
  automáticamente muestra "Información no disponible".
- `estado` solo puede ser `"disponible" | "limitado" | "no_disponible" |
  "no_confirmado"`.
- `fuente` / `fuenteUrl` permiten enlazar la fuente oficial (Alcaldía, Gestión
  del Riesgo, Gobernación, etc.) cuando exista.

## Preparado para el futuro

La arquitectura separa datos, lógica y presentación para poder, más adelante,
sin rediseñar nada:

- Reemplazar `data/albergues.ts` por una consulta a base de datos / API.
- Añadir un panel administrativo que edite estos mismos campos.
- Añadir autenticación, notificaciones y más albergues.

## Despliegue en Vercel

1. Sube el repositorio a GitHub.
2. En [vercel.com/new](https://vercel.com/new), importa el repositorio.
3. Vercel detecta Next.js automáticamente (sin variables de entorno requeridas).
4. Despliega. Actualiza `SITE_URL` en `app/layout.tsx` y las URLs en
   `app/robots.ts` / `app/sitemap.ts` con el dominio final asignado por Vercel.

## Creador

Edil Jhon Stiven Sanpedro Osorio — Dosquebradas, Risaralda.
