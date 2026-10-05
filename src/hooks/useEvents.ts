import { useEffect, useState } from "react";
import {
  fetchEvents,
  type SupabaseEvent,
} from "../data/supabaseEvents";

export function useEvents() {
  const [events, setEvents] = useState<SupabaseEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function loadEvents() {
      try {
        const data = await fetchEvents();

        if (active) {
          setEvents(data);
        }
      } catch (err: unknown) {
        if (active) {
          setError(
            err instanceof Error
              ? err.message
              : "Impossible de charger les événements."
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadEvents();

    return () => {
      active = false;
    };
  }, []);

  return { events, loading, error };
}