import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface Bootcamp {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  duration: string | null;
  format: string | null;
  batch_size: number | null;
  price: number | null;
  discount_price: number | null;
  discount_label: string | null;
  next_batch_date: string | null;
  image_url: string | null;
  icon_name: string | null;
  category: string | null;
  tech_stack: string[];
  highlights: string[];
  curriculum: unknown;
  prerequisites: string[];
  learning_outcomes: string[];
  instructor_name: string | null;
  instructor_bio: string | null;
  is_published: boolean;
  is_featured: boolean;
  created_at: string;
}

export const useBootcamps = () => {
  const [bootcamps, setBootcamps] = useState<Bootcamp[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBootcamps = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("bootcamps")
        .select("*")
        .eq("is_published", true)
        .order("is_featured", { ascending: false })
        .order("created_at", { ascending: false });

      if (error) throw error;
      setBootcamps(data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBootcamps();
  }, []);

  return { bootcamps, isLoading, error, refetch: fetchBootcamps };
};

export const useBootcamp = (slug: string) => {
  const [bootcamp, setBootcamp] = useState<Bootcamp | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBootcamp = async () => {
      if (!slug) return;
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from("bootcamps")
          .select("*")
          .eq("slug", slug)
          .eq("is_published", true)
          .single();

        if (error) throw error;
        setBootcamp(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBootcamp();
  }, [slug]);

  return { bootcamp, isLoading, error };
};
