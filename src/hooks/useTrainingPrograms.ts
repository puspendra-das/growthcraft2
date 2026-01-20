import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface TrainingProgram {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  duration: string | null;
  batch_size: number | null;
  price: number | null;
  discount_price: number | null;
  start_date: string | null;
  end_date: string | null;
  next_batch_date: string | null;
  image_url: string | null;
  category: string | null;
  domain: string | null;
  format: string | null;
  tech_stack: string[];
  focus_areas: string[];
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

export const useTrainingPrograms = () => {
  const [programs, setPrograms] = useState<TrainingProgram[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPrograms = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("training_programs")
        .select("*")
        .eq("is_published", true)
        .order("is_featured", { ascending: false })
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPrograms(data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  return { programs, isLoading, error, refetch: fetchPrograms };
};

export const useTrainingProgram = (slug: string) => {
  const [program, setProgram] = useState<TrainingProgram | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProgram = async () => {
      if (!slug) return;
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from("training_programs")
          .select("*")
          .eq("slug", slug)
          .eq("is_published", true)
          .single();

        if (error) throw error;
        setProgram(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProgram();
  }, [slug]);

  return { program, isLoading, error };
};
