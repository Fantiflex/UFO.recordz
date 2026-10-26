import { supabase } from "../lib/supabase";

export type SupabaseEvent = {
  id: number;
  name: string;
  date: string | null;
  venue: string | null;
  time: string | null;
  lineup: {
    name: string;
    slug: string;
  }[];
  linkShotgun: string | null;
  linkInstagram: string | null;
};

type EventArtistRow = {
  artist_name: string;
  artists_events: {
    slug: string;
  } | null;
};

type EventRow = {
  id: number;
  Name: string;
  Date: string | null;
  Venue: string | null;
  Horaires: string | null;
  link_shotgun: string | null;
  link_instagram: string | null;
  event_artists: EventArtistRow[];
};

export async function fetchEvents(): Promise<SupabaseEvent[]> {
  const { data, error } = await supabase
    .from("events")
    .select(`
      id,
      Name,
      Date,
      Venue,
      Horaires,
      link_shotgun,
      link_instagram,
      event_artists (
        artist_name,
        artists_events (
          slug
        )
      )
    `)
    .eq("is_public", true)
    .order("Date", { ascending: false, nullsFirst: false })
    .returns<EventRow[]>();

  if (error) {
    throw new Error(`Chargement des événements : ${error.message}`);
  }

  return (data ?? []).map((row) => {
    

    const lineup = (row.event_artists ?? [])
      .map((entry) => ({
        name: entry.artist_name.trim(),
        slug: entry.artists_events?.slug ?? "",
      }))
      .filter((artist) => artist.name.length > 0 && artist.slug.length > 0);

    return {
      id: row.id,
      name: row.Name,
      date: row.Date,
      venue: row.Venue,
      time: row.Horaires,
      lineup,
      linkShotgun: row.link_shotgun,
      linkInstagram: row.link_instagram,
    };
  });
}


export type EventDetail = SupabaseEvent & {
  slug: string;
  description: string | null;
  coverImage: string | null;
};

type EventDetailRow = EventRow & {
  slug: string;
  description: string | null;
  cover_image: string | null;
};

export async function fetchEventBySlug(
  slug: string
): Promise<EventDetail | null> {
  const { data, error } = await supabase
    .from("events")
    .select(`
      id,
      slug,
      Name,
      Date,
      Venue,
      Horaires,
      description,
      cover_image,
      link_shotgun,
      link_instagram,
      event_artists (
        artist_name,
        artists_events (
          slug
        )
      )
    `)
    .eq("slug", slug)
    .eq("is_public", true)
    .maybeSingle()
    .returns<EventDetailRow>();

  if (error) {
    throw new Error(
      `Chargement de l'événement : ${error.message}`
    );
  }

  if (!data) return null;

  const lineup = (data.event_artists ?? [])
    .map((entry) => ({
      name: entry.artist_name.trim(),
      slug: entry.artists_events?.slug ?? "",
    }))
    .filter(
      (artist) =>
        artist.name.length > 0 &&
        artist.slug.length > 0
    );

  return {
    id: data.id,
    slug: data.slug,
    name: data.Name,
    date: data.Date,
    venue: data.Venue,
    time: data.Horaires,
    description: data.description,
    coverImage: data.cover_image,
    lineup,
    linkShotgun: data.link_shotgun,
    linkInstagram: data.link_instagram,
  };
}