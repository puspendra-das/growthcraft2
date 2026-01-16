-- Fix overly permissive INSERT policies by adding proper validation

-- Drop and recreate enquiries insert policy with validation
DROP POLICY IF EXISTS "Anyone can submit enquiries" ON public.enquiries;
CREATE POLICY "Anyone can submit enquiries with validation" ON public.enquiries
  FOR INSERT WITH CHECK (
    name IS NOT NULL AND 
    name <> '' AND 
    email IS NOT NULL AND 
    email <> '' AND
    enquiry_type IS NOT NULL
  );

-- Drop and recreate registrations insert policy with validation
DROP POLICY IF EXISTS "Anyone can register" ON public.registrations;
CREATE POLICY "Anyone can register with validation" ON public.registrations
  FOR INSERT WITH CHECK (
    name IS NOT NULL AND 
    name <> '' AND 
    email IS NOT NULL AND 
    email <> '' AND
    (course_id IS NOT NULL OR training_program_id IS NOT NULL OR event_id IS NOT NULL)
  );