# Sam van Os Coaching — website

Technische foundation: Next.js (App Router) + Payload CMS + PostgreSQL + Tailwind CSS.

Dit is de technische basis van het project. Er is nog **geen definitief visueel design** —
alleen eenvoudige placeholder styling zodat de werking end-to-end getest kan worden.

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Payload CMS](https://payloadcms.com) 3.x, geïntegreerd via `@payloadcms/next`
- PostgreSQL via `@payloadcms/db-postgres`
- Lexical rich text (Payload's ingebouwde editor)
- Tailwind CSS
- npm

## Installatie

Vereisten: Node.js 20+, npm, en een draaiende PostgreSQL-database.

```bash
npm install
cp .env.example .env
```

Vul in `.env` in ieder geval `DATABASE_URI` en `PAYLOAD_SECRET` in (zie
[Environment variables](#environment-variables)).

## Database setup

### Optie A — Docker

```bash
docker compose up -d
```

Dit start een lokale PostgreSQL-instantie (zie `docker-compose.yml`) met database
`sam-van-os-coaching`, user/pass `postgres`/`postgres` op poort `5432`. Zet
`DATABASE_URI` in `.env` op:

```
DATABASE_URI=postgresql://postgres:postgres@127.0.0.1:5432/sam-van-os-coaching
```

### Optie B — lokale PostgreSQL installatie

Installeer PostgreSQL zelf (bijv. via Homebrew: `brew install postgresql@16`), start de
service, en maak een database aan:

```bash
createdb sam-van-os-coaching
```

Zet `DATABASE_URI` in `.env` op de bijbehorende connection string.

Payload maakt de benodigde tabellen automatisch aan bij de eerste start — er is geen
handmatige migratie nodig in development.

## Lokale development

```bash
npm run dev
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Payload admin: [http://localhost:3000/admin](http://localhost:3000/admin)

Bij de eerste bezoek aan `/admin` vraagt Payload om een eerste admin-gebruiker aan te maken.

### Homepage instellen

De root-route (`/`) rendert de Payload-pagina met slug `home`. Maak in `/admin` onder
**Pages** een pagina aan met slug `home` om de homepage te vullen. Elke andere pagina is
bereikbaar via `/[slug]`.

## Environment variables

Zie `.env.example` voor het volledige overzicht. Belangrijkste variabelen:

| Variabele                | Omschrijving                                                       |
| ------------------------- | -------------------------------------------------------------------- |
| `DATABASE_URI`            | PostgreSQL connection string                                        |
| `PAYLOAD_SECRET`          | Geheime sleutel voor Payload (JWT/cookies). Genereer met `openssl rand -base64 32` |
| `NEXT_PUBLIC_SERVER_URL`  | Publieke basis-URL van de site, gebruikt voor absolute URLs (SEO/OG) |

Gebruik nooit echte secrets in de repository — `.env` staat in `.gitignore`.

## Projectstructuur

```
src/
  app/
    (frontend)/         Publieke website (Next.js routes, layout, globale CSS)
      [slug]/page.tsx    Dynamische pagina-route, rendert een Payload Page
      page.tsx           Homepage (rendert Payload Page met slug "home")
    (payload)/           Payload admin panel + REST/GraphQL API routes (auto-generated)
  blocks/                Eén map per Payload block: Payload-config + React-component
    Text/                Tekstblok (rich text)
    Heading/              Titelblok
    Image/                Afbeeldingsblok
    index.ts              Centraal register: block-configs + block-componenten
  collections/           Payload collections (Pages, Media, Testimonials, Users)
  globals/               Payload globals (Settings)
  fields/                Herbruikbare Payload field-configuraties (seo, slug, link)
  components/            Herbruikbare React-componenten (Header, Footer, BlockRenderer, ...)
  lib/                   Utility-functies (Payload client, SEO-metadata, media URLs)
  utilities/             Kleine helpers (bijv. slug-formatting hook)
  payload.config.ts      Payload configuratie (collections, globals, database, editor)
  payload-types.ts       Automatisch gegenereerde TypeScript-types (niet handmatig wijzigen)
```

Frontend-componenten (`components/`, `app/(frontend)`) en Payload-configuratie
(`collections/`, `globals/`, `blocks/*/config.ts`, `fields/`) zijn bewust gescheiden.

## Collections & globals

- **Pages** — `title`, `slug` (auto-gegenereerd uit title), `layout` (blocks field), `seo`
- **Media** — uploads met `alt`-tekst, caption en gegenereerde afbeeldingsformaten
- **Testimonials** — `name`, `quote`, `image`, `result` (resultaat/status), `featured`
- **Users** — Payload's standaard authenticatie voor CMS-gebruikers
- **Settings** (global) — bedrijfsnaam, logo, contactgegevens, social media, header- en
  footer-instellingen, algemene CTA, standaard SEO

## Hoe nieuwe blocks toegevoegd worden

Elk block bestaat uit een eigen map onder `src/blocks/<Naam>/` met twee bestanden:

1. `config.ts` — de Payload `Block`-definitie (velden, slug, labels)
2. `Component.tsx` — de React-component die de blockdata rendert op de frontend

Om een nieuw block toe te voegen:

1. Maak `src/blocks/<Naam>/config.ts` en `Component.tsx` aan (kopieer een bestaand block
   als startpunt, bijv. `src/blocks/Heading`).
2. Registreer het block in `src/blocks/index.ts`:
   - voeg de config toe aan de `blocks`-array (maakt het block beschikbaar in de Pages
     page builder)
   - voeg de component toe aan `blockComponents` onder dezelfde `slug` (koppelt de
     block-data aan de juiste React-component)
3. Draai `npm run generate:types` om de TypeScript-types bij te werken.

`BlockRenderer` (`src/components/BlockRenderer.tsx`) hoeft nooit aangepast te worden —
die leest blockdata generiek uit `blockComponents`.

## SEO

Elke Page heeft een `seo`-group (meta title, meta description, Open Graph image,
canonical URL, noindex). De Settings-global bevat een `seo`-group met standaardwaarden
die worden gebruikt wanneer een pagina zelf geen SEO-data heeft. `src/lib/generatePageMetadata.ts`
combineert beide en levert een Next.js `Metadata`-object op via de
[Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata).

## Productie via Docker

`docker-compose.yml` bevat naast Postgres ook een `app`-service die de `Dockerfile` bouwt
(Next.js `output: 'standalone'`). Die service start niet mee met het gewone `docker compose up -d`
(dat blijft alleen de lokale Postgres voor `npm run dev`) — start hem expliciet met:

```bash
docker compose --profile production up -d --build
```

Geüploade media (afbeeldingen/video's via `/admin`) worden lokaal op schijf opgeslagen in
`media/` en zijn dus **niet** onderdeel van de database-backup. De `app`-service mount hiervoor
een named volume (`media:/app/media`) zodat uploads een herstart/redeploy overleven. Zorg dat
`.env` ingevuld is voordat je de `app`-service start; `DATABASE_URI` daarin wordt automatisch
overschreven naar de Postgres-service binnen het Docker-netwerk.

## Scripts

| Commando                    | Omschrijving                                    |
| ---------------------------- | -------------------------------------------------- |
| `npm run dev`                | Start de development server                       |
| `npm run build`               | Production build                                  |
| `npm run start`               | Start de production build                          |
| `npm run generate:types`     | Genereer `payload-types.ts` uit de Payload config  |
| `npm run generate:importmap` | Genereer de admin panel import map                 |
| `npm run lint`                | ESLint                                             |

## Controle uitgevoerd

Na implementatie is gecontroleerd dat:

- `npm install` slaagt zonder errors
- `npm run generate:types` en `npm run generate:importmap` slagen tegen een lokale
  PostgreSQL-database
- `npx tsc --noEmit` slaagt zonder TypeScript-fouten
- `npm run build` slaagt zonder build- of configuratiefouten
- de dev-server start, de homepage en een dynamische pagina renderen via Payload-data,
  en het admin panel (`/admin`) werkt
