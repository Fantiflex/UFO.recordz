# UFO.recordz

Website for UFO.recordz, an independent collective and record label based in Paris.

The site presents the collective, music releases, events, values, and contact information.

**Website:** [www.uforecordz.fr](https://www.uforecordz.fr)

## Tech Stack

- React 19 and TypeScript
- Vite 8
- Tailwind CSS 4
- React Router
- Supabase: PostgreSQL and Edge Functions
- SoundCloud API
- Vercel

## Features

- Collective and label presentation
- Latest music releases loaded from Supabase
- Upcoming and past events with lineups and external links
- Scrolling banner of artists who have performed at events
- Code of conduct with a downloadable PDF
- Responsive navigation and contact pages

## Local Development

### Requirements

Versions declared in `package.json`:

- Node.js 24.x
- pnpm 12.4.1

### Installation

```bash
git clone https://github.com/Fantiflex/UFO.recordz.git
cd UFO.recordz
pnpm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```dotenv
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
```

Use the project's public Supabase key. Never place secret keys or a
`service_role` key in `VITE_*` variables: these are exposed to the browser.

Local environment files are ignored by Git.

### Start the Development Server

```bash
pnpm run dev
```

Open the URL printed in the terminal.

## Commands

| Command | Purpose |
|---|---|
| `pnpm run dev` | Start the development server |
| `pnpm run build` | Build the website into `dist/` |
| `pnpm run preview` | Preview the production build locally |
| `pnpm exec tsc --noEmit` | Check TypeScript types |
| `pnpm run format` | Run the project formatter |

The Vite build and TypeScript checks are separate commands.

## Project Structure

| Path | Purpose |
|---|---|
| `src/pages/` | Website pages |
| `src/components/layout/` | Navigation and footer |
| `src/components/sections/` | Page sections and cards |
| `src/components/ui/` | Reusable interface components |
| `src/data/navigation.ts` | Navigation configuration |
| `src/data/supabaseEvents.ts` | Event queries and data transformation |
| `src/hooks/useEvents.ts` | Event loading, error, and data states |
| `src/lib/supabase.ts` | Browser Supabase client |
| `src/imports/` | Logos and release artwork imported by components |
| `src/data/images/` | Collective photographs |
| `public/` | Files served directly, including the code of conduct PDF |
| `supabase/functions/sync-soundcloud/` | SoundCloud synchronization function |
| `vercel.json` | Vercel routing configuration |

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/ufo-recordz` | Collective |
| `/events` | Events |
| `/label` | Record label |
| `/valeurs` | Values and code of conduct |
| `/contact` | Contact |

## Supabase Data

The website reads from the following tables:

| Table | Purpose |
|---|---|
| `events` | Event details |
| `events_artists` | Lineups associated with events |
| `artists_events` | Artists displayed in the scrolling banner |
| `releases` | Music release metadata |

`events_artists.event_id` references `events.id`.

Event fields include `Name`, `Date`, `Venue`, `Horaires`,
`link_shotgun`, and `link_instagram`. Lineups use the columns
`"artist 1"` through `"artist 8"`.

Dated events are classified as upcoming or past using the current date
in Paris. Events without a date are excluded from these lists.

The database schema and access policies must be configured in Supabase.
This repository does not currently include SQL migrations to recreate
the tables.

Row Level Security policies must allow public read access to the data
displayed on the website.

Database updates are retrieved when the page loads again and do not
require a new website deployment.

## SoundCloud Synchronization

The `sync-soundcloud` Edge Function fetches track metadata from the
SoundCloud API and saves it to the `releases` table.

It requires the following server-side secrets:

- `SOUNDCLOUD_CLIENT_ID`
- `SOUNDCLOUD_CLIENT_SECRET`

Configure these secrets in Supabase. Do not add them to the repository
or frontend environment variables.

The function is deployed separately from the Vercel website.
Any scheduled execution must also be configured in Supabase.

## Deployment

Vercel configuration:

| Setting | Value |
|---|---|
| Framework | Vite |
| Build command | `pnpm run build` |
| Output directory | `dist` |

Set the following environment variables in Vercel:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

Vite embeds these values during the build. Redeploy the website after
changing them.

`vercel.json` rewrites routes to `index.html`, allowing React Router
pages to be opened directly.

## Validation

Before merging changes:

```bash
pnpm exec tsc --noEmit
pnpm run build
pnpm run preview
```

Check navigation, data loading, and external links.

Do not commit `node_modules/`, `dist/`, environment files, or
`.DS_Store` files.