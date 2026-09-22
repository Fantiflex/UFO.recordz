# UFO.recordz

Website for **UFO.recordz**, an independent collective and label based in Paris.

The site presents the collective, artists, releases, events, values, and contact information, while also integrating dynamic data from SoundCloud through Supabase.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Supabase
- PostgreSQL
- Supabase Edge Functions
- SoundCloud API
- Vercel
- GitHub

## Features

- Responsive website for UFO.recordz
- Dynamic latest releases section powered by Supabase
- SoundCloud API integration using OAuth 2.0
- Automated synchronization of track metadata
- Supabase Edge Function for server-side API calls
- PostgreSQL-backed release catalog
- Artist marquee powered by Supabase
- Upcoming and past events sections
- React Router subpages
- Environment-based configuration for local and production deployments
- Vercel deployment

## Architecture

```text
SoundCloud API
      ↓
Supabase Edge Function
      ↓
PostgreSQL / Supabase
      ↓
React frontend
      ↓
Vercel