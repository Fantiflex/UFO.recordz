# UFO.recordz

Official website of **UFO.recordz**, an independent electronic music label and collective based in Paris.

**Live:** [uforecordz.fr](https://uforecordz.fr)

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS
- **Backend:** Supabase (PostgreSQL, Edge Functions, RLS)
- **Integrations:** Shotgun API, SoundCloud API
- **Infrastructure:** Supabase Cron, Vault, Vercel

## Architecture

The application follows a serverless architecture with Supabase as its central data platform.

- **Frontend:** React application deployed on Vercel, querying Supabase through its public API.
- **Database:** PostgreSQL stores events, artist relationships, releases, and publication metadata, with Row Level Security controlling public access.
- **Data ingestion:** Authenticated Supabase Edge Functions fetch and synchronize data from Shotgun and SoundCloud.
- **Automation:** Weekly synchronization jobs run through Supabase Cron, with credentials managed through Vault.

External API credentials and synchronization logic remain server-side.

## Features

- Dynamic event listings, artist lineups, and publication controls
- Music catalog synchronized with SoundCloud, including automatic extraction of `[UFO###]` catalog identifiers
- Automated Shotgun event synchronization
- Responsive UI with interactive components and 3D sound system visualization
- Solidarity ticketing information and association resources

## Development

**Requirements:** Node.js 24.x, pnpm

```bash
pnpm install
pnpm dev
pnpm build
```

Create a `.env.local` file containing:

```dotenv
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_publishable_key
```

Server-side credentials are configured separately in Supabase.

## Deployment

The frontend is deployed through **Vercel**, while database services, API integrations, and scheduled synchronization run independently on **Supabase**.

## License

All UFO.recordz branding, artwork, music, and original content belong to their respective rights holders.