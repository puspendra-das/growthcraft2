-- Add additional fields to courses table for detailed content
ALTER TABLE public.courses 
ADD COLUMN IF NOT EXISTS slug text UNIQUE,
ADD COLUMN IF NOT EXISTS topics text[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS highlights text[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS curriculum jsonb DEFAULT '[]',
ADD COLUMN IF NOT EXISTS prerequisites text[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS learning_outcomes text[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS instructor_name text,
ADD COLUMN IF NOT EXISTS instructor_bio text,
ADD COLUMN IF NOT EXISTS format text DEFAULT 'Online',
ADD COLUMN IF NOT EXISTS discount_label text;

-- Add additional fields to training_programs table
ALTER TABLE public.training_programs 
ADD COLUMN IF NOT EXISTS slug text UNIQUE,
ADD COLUMN IF NOT EXISTS category text,
ADD COLUMN IF NOT EXISTS domain text,
ADD COLUMN IF NOT EXISTS format text DEFAULT 'Online',
ADD COLUMN IF NOT EXISTS tech_stack text[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS focus_areas text[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS highlights text[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS curriculum jsonb DEFAULT '[]',
ADD COLUMN IF NOT EXISTS prerequisites text[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS learning_outcomes text[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS next_batch_date date,
ADD COLUMN IF NOT EXISTS instructor_name text,
ADD COLUMN IF NOT EXISTS instructor_bio text;

-- Add additional fields to events table
ALTER TABLE public.events 
ADD COLUMN IF NOT EXISTS slug text UNIQUE,
ADD COLUMN IF NOT EXISTS domain text,
ADD COLUMN IF NOT EXISTS topics text[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS highlights text[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS duration text,
ADD COLUMN IF NOT EXISTS price numeric,
ADD COLUMN IF NOT EXISTS max_participants integer,
ADD COLUMN IF NOT EXISTS prerequisites text[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS speaker_name text,
ADD COLUMN IF NOT EXISTS speaker_bio text;

-- Create a bootcamps table (separate from training programs for more control)
CREATE TABLE IF NOT EXISTS public.bootcamps (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  slug text UNIQUE,
  description text,
  duration text,
  format text DEFAULT 'Online',
  batch_size integer,
  price numeric,
  discount_price numeric,
  discount_label text,
  next_batch_date date,
  image_url text,
  icon_name text DEFAULT 'Code2',
  category text,
  tech_stack text[] DEFAULT '{}',
  highlights text[] DEFAULT '{}',
  curriculum jsonb DEFAULT '[]',
  prerequisites text[] DEFAULT '{}',
  learning_outcomes text[] DEFAULT '{}',
  instructor_name text,
  instructor_bio text,
  is_published boolean NOT NULL DEFAULT false,
  is_featured boolean NOT NULL DEFAULT false,
  created_by uuid,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on bootcamps
ALTER TABLE public.bootcamps ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for bootcamps
CREATE POLICY "Admins can manage bootcamps" ON public.bootcamps FOR ALL USING (is_admin());
CREATE POLICY "Admins can view all bootcamps" ON public.bootcamps FOR SELECT USING (is_admin());
CREATE POLICY "Anyone can view published bootcamps" ON public.bootcamps FOR SELECT USING (is_published = true);

-- Create function to generate slug from title
CREATE OR REPLACE FUNCTION public.generate_slug(title text)
RETURNS text AS $$
BEGIN
  RETURN lower(regexp_replace(regexp_replace(title, '[^a-zA-Z0-9\s-]', '', 'g'), '\s+', '-', 'g'));
END;
$$ LANGUAGE plpgsql IMMUTABLE SET search_path = public;

-- Create trigger to auto-generate slug on courses
CREATE OR REPLACE FUNCTION public.set_course_slug()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.slug IS NULL OR NEW.slug = '' THEN
    NEW.slug := public.generate_slug(NEW.title) || '-' || substr(gen_random_uuid()::text, 1, 8);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE OR REPLACE TRIGGER set_course_slug_trigger
BEFORE INSERT OR UPDATE ON public.courses
FOR EACH ROW
EXECUTE FUNCTION public.set_course_slug();

-- Create trigger to auto-generate slug on training_programs
CREATE OR REPLACE FUNCTION public.set_training_program_slug()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.slug IS NULL OR NEW.slug = '' THEN
    NEW.slug := public.generate_slug(NEW.title) || '-' || substr(gen_random_uuid()::text, 1, 8);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE OR REPLACE TRIGGER set_training_program_slug_trigger
BEFORE INSERT OR UPDATE ON public.training_programs
FOR EACH ROW
EXECUTE FUNCTION public.set_training_program_slug();

-- Create trigger to auto-generate slug on events
CREATE OR REPLACE FUNCTION public.set_event_slug()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.slug IS NULL OR NEW.slug = '' THEN
    NEW.slug := public.generate_slug(NEW.title) || '-' || substr(gen_random_uuid()::text, 1, 8);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE OR REPLACE TRIGGER set_event_slug_trigger
BEFORE INSERT OR UPDATE ON public.events
FOR EACH ROW
EXECUTE FUNCTION public.set_event_slug();

-- Create trigger to auto-generate slug on bootcamps
CREATE OR REPLACE FUNCTION public.set_bootcamp_slug()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.slug IS NULL OR NEW.slug = '' THEN
    NEW.slug := public.generate_slug(NEW.title) || '-' || substr(gen_random_uuid()::text, 1, 8);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE OR REPLACE TRIGGER set_bootcamp_slug_trigger
BEFORE INSERT OR UPDATE ON public.bootcamps
FOR EACH ROW
EXECUTE FUNCTION public.set_bootcamp_slug();

-- Add updated_at trigger for bootcamps
CREATE TRIGGER update_bootcamps_updated_at
BEFORE UPDATE ON public.bootcamps
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();