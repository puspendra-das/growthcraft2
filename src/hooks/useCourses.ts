import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface Course {
  id: string;
  title: string;
  slug: string;
  category: string;
  subcategory: string | null;
  description: string | null;
  duration: string | null;
  level: string | null;
  price: number | null;
  discount_price: number | null;
  discount_label: string | null;
  image_url: string | null;
  format: string | null;
  topics: string[];
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

export const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCourses = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .eq("is_published", true)
        .order("is_featured", { ascending: false })
        .order("created_at", { ascending: false });

      if (error) throw error;
      setCourses(data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return { courses, isLoading, error, refetch: fetchCourses };
};

export const useCourse = (slug: string) => {
  const [course, setCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      if (!slug) return;
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from("courses")
          .select("*")
          .eq("slug", slug)
          .eq("is_published", true)
          .single();

        if (error) throw error;
        setCourse(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourse();
  }, [slug]);

  return { course, isLoading, error };
};

export const useCategories = () => {
  const [categories, setCategories] = useState<{ name: string; count: number }[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await supabase
        .from("courses")
        .select("category")
        .eq("is_published", true);

      if (data) {
        const categoryCounts: Record<string, number> = {};
        data.forEach((item) => {
          categoryCounts[item.category] = (categoryCounts[item.category] || 0) + 1;
        });
        setCategories(
          Object.entries(categoryCounts).map(([name, count]) => ({ name, count }))
        );
      }
    };

    fetchCategories();
  }, []);

  return categories;
};
