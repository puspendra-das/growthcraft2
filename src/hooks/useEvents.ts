import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface Event {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  event_type: string | null;
  event_date: string | null;
  event_time: string | null;
  location: string | null;
  duration: string | null;
  domain: string | null;
  topics: string[];
  highlights: string[];
  prerequisites: string[];
  price: number | null;
  max_participants: number | null;
  speaker_name: string | null;
  speaker_bio: string | null;
  image_url: string | null;
  registration_link: string | null;
  is_online: boolean;
  is_published: boolean;
  is_featured: boolean;
  created_at: string;
}

export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("is_published", true)
        .order("event_date", { ascending: true });

      if (error) throw error;
      setEvents(data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return { events, isLoading, error, refetch: fetchEvents };
};

export const useEvent = (slug: string) => {
  const [event, setEvent] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      if (!slug) return;
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from("events")
          .select("*")
          .eq("slug", slug)
          .eq("is_published", true)
          .single();

        if (error) throw error;
        setEvent(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvent();
  }, [slug]);

  return { event, isLoading, error };
};
