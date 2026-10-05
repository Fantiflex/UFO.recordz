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

type LineupRow = {
  "artist 1": string;
  "artist 2": string | null;
  "artist 3": string | null;
  "artist 4": string | null;
  "artist 5": string | null;
  "artist 6": string | null;
  "artist 7": string | null;
  "artist 8": string | null;
};

type EventRow = {
  id: number;
  Name: string;
  Date: string | null;
  Venue: string | null;
  Horaires: string | null;
  link_shotgun: string | null;
  link_instagram: string | null;
  events_artists: LineupRow | null;
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
      events_artists (
        "artist 1",
        "artist 2",
        "artist 3",
        "artist 4",
        "artist 5",
        "artist 6",
        "artist 7",
        "artist 8"
      )
    `)
    .order("Date", { ascending: false, nullsFirst: false })
    .returns<EventRow[]>();

  if (error) {
    throw new Error(`Chargement des événements : ${error.message}`);
  }

  return (data ?? []).map((row) => {
    const artists = row.events_artists;

    const lineup = artists
      ? [
          artists["artist 1"],
          artists["artist 2"],
          artists["artist 3"],
          artists["artist 4"],
          artists["artist 5"],
          artists["artist 6"],
          artists["artist 7"],
          artists["artist 8"],
        ]
          .filter((name): name is string => typeof name === "string")
          .map((name) => name.trim())
          .filter((name) => name.length > 0)
      : [];

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