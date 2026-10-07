import { supabase } from "../lib/supabase";

export type SupabaseEvent = {
  id: number;
  name: string;
  date: string | null;
  venue: string | null;
  time: string | null;
  lineup: string[];
  linkShotgun: string | null;
  linkInstagram: string | null;
};

type EventArtistRow = {
  artist_name: string;
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
        artist_name
      )
    `)
    .order("Date", { ascending: false, nullsFirst: false })
    .returns<EventRow[]>();

  if (error) {
    throw new Error(`Chargement des événements : ${error.message}`);
  }

  return (data ?? []).map((row) => {
    

    const lineup = (row.event_artists ?? [])
      .map((entry) => entry.artist_name.trim())
      .filter((name) => name.length > 0);

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