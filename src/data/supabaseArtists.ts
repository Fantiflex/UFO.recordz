import { supabase } from "../lib/supabase";

export type SupabaseArtistEvent = {
  id: number;
  name: string;
  date: string | null;
  venue: string | null;
};

export type SupabaseArtist = {
  name: string;
  slug: string;
  soundcloud: string | null;
  instagram: string | null;
  events: SupabaseArtistEvent[];
};

export async function fetchArtistBySlug(
  slug: string
): Promise<SupabaseArtist | null> {
  const { data, error } = await supabase
    .from("artists_events")
    .select(`
      "Artist Name",
      slug,
      "SoundCloud",
      "Instagram"
    `)
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    throw new Error(`Chargement de l'artiste : ${error.message}`);
  }

  if (!data) {
    return null;
  }

  return {
    name: data["Artist Name"],
    slug: data.slug,
    soundcloud: data["SoundCloud"],
    instagram: data["Instagram"],
  };
}