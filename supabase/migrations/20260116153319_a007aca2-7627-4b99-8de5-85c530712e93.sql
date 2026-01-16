-- Create user roles enum type
CREATE TYPE user_role AS ENUM ('platform_admin', 'college_admin', 'mentor', 'employer', 'student');

-- Create profiles table for user management
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  phone TEXT,
  role user_role NOT NULL DEFAULT 'student',
  organization TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id),
  UNIQUE(email)
);

-- Create courses table for course management
CREATE TABLE public.courses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  subcategory TEXT,
  description TEXT,
  duration TEXT,
  level TEXT DEFAULT 'Beginner',
  price DECIMAL(10,2),
  discount_price DECIMAL(10,2),
  image_url TEXT,
  is_published BOOLEAN NOT NULL DEFAULT false,
  is_featured BOOLEAN NOT NULL DEFAULT false,
  created_by UUID REFERENCES public.profiles(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create training programs table
CREATE TABLE public.training_programs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  duration TEXT,
  batch_size INTEGER,
  price DECIMAL(10,2),
  discount_price DECIMAL(10,2),
  start_date DATE,
  end_date DATE,
  image_url TEXT,
  is_published BOOLEAN NOT NULL DEFAULT false,
  is_featured BOOLEAN NOT NULL DEFAULT false,
  created_by UUID REFERENCES public.profiles(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create events table
CREATE TABLE public.events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  event_type TEXT,
  event_date DATE,
  event_time TIME,
  location TEXT,
  is_online BOOLEAN NOT NULL DEFAULT false,
  registration_link TEXT,
  image_url TEXT,
  is_published BOOLEAN NOT NULL DEFAULT false,
  is_featured BOOLEAN NOT NULL DEFAULT false,
  created_by UUID REFERENCES public.profiles(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create enquiries table for popup form submissions
CREATE TABLE public.enquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  enquiry_type TEXT NOT NULL DEFAULT 'general',
  source_page TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  notes TEXT,
  assigned_to UUID REFERENCES public.profiles(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create registrations table
CREATE TABLE public.registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id),
  course_id UUID REFERENCES public.courses(id),
  training_program_id UUID REFERENCES public.training_programs(id),
  event_id UUID REFERENCES public.events(id),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  payment_status TEXT DEFAULT 'unpaid',
  amount DECIMAL(10,2),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create colleges/partners table
CREATE TABLE public.colleges (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  address TEXT,
  city TEXT,
  state TEXT,
  website TEXT,
  contact_person TEXT,
  partnership_type TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create employers table
CREATE TABLE public.employers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  industry TEXT,
  company_size TEXT,
  website TEXT,
  contact_person TEXT,
  hiring_needs TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create content pages table for CMS
CREATE TABLE public.content_pages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  content JSONB,
  meta_title TEXT,
  meta_description TEXT,
  is_published BOOLEAN NOT NULL DEFAULT false,
  created_by UUID REFERENCES public.profiles(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create settings table for site configuration
CREATE TABLE public.settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value JSONB,
  description TEXT,
  updated_by UUID REFERENCES public.profiles(id),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.training_programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.colleges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.employers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;

-- Helper function to check if user is admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles
    WHERE user_id = auth.uid()
    AND role = 'platform_admin'
    AND is_active = true
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Helper function to get user role
CREATE OR REPLACE FUNCTION public.get_user_role()
RETURNS user_role AS $$
BEGIN
  RETURN (
    SELECT role FROM public.profiles
    WHERE user_id = auth.uid()
    AND is_active = true
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Profiles policies
CREATE POLICY "Admins can view all profiles" ON public.profiles
  FOR SELECT USING (is_admin());

CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admins can insert profiles" ON public.profiles
  FOR INSERT WITH CHECK (is_admin());

CREATE POLICY "Admins can update profiles" ON public.profiles
  FOR UPDATE USING (is_admin());

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Admins can delete profiles" ON public.profiles
  FOR DELETE USING (is_admin());

-- Courses policies
CREATE POLICY "Anyone can view published courses" ON public.courses
  FOR SELECT USING (is_published = true);

CREATE POLICY "Admins can view all courses" ON public.courses
  FOR SELECT USING (is_admin());

CREATE POLICY "Admins can insert courses" ON public.courses
  FOR INSERT WITH CHECK (is_admin());

CREATE POLICY "Admins can update courses" ON public.courses
  FOR UPDATE USING (is_admin());

CREATE POLICY "Admins can delete courses" ON public.courses
  FOR DELETE USING (is_admin());

-- Training programs policies
CREATE POLICY "Anyone can view published training programs" ON public.training_programs
  FOR SELECT USING (is_published = true);

CREATE POLICY "Admins can view all training programs" ON public.training_programs
  FOR SELECT USING (is_admin());

CREATE POLICY "Admins can manage training programs" ON public.training_programs
  FOR ALL USING (is_admin());

-- Events policies
CREATE POLICY "Anyone can view published events" ON public.events
  FOR SELECT USING (is_published = true);

CREATE POLICY "Admins can view all events" ON public.events
  FOR SELECT USING (is_admin());

CREATE POLICY "Admins can manage events" ON public.events
  FOR ALL USING (is_admin());

-- Enquiries policies (anyone can insert, only admins can view/manage)
CREATE POLICY "Anyone can submit enquiries" ON public.enquiries
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view enquiries" ON public.enquiries
  FOR SELECT USING (is_admin());

CREATE POLICY "Admins can manage enquiries" ON public.enquiries
  FOR ALL USING (is_admin());

-- Registrations policies
CREATE POLICY "Anyone can register" ON public.registrations
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view registrations" ON public.registrations
  FOR SELECT USING (is_admin());

CREATE POLICY "Admins can manage registrations" ON public.registrations
  FOR ALL USING (is_admin());

-- Colleges policies
CREATE POLICY "Admins can manage colleges" ON public.colleges
  FOR ALL USING (is_admin());

CREATE POLICY "Anyone can view active colleges" ON public.colleges
  FOR SELECT USING (is_active = true);

-- Employers policies
CREATE POLICY "Admins can manage employers" ON public.employers
  FOR ALL USING (is_admin());

CREATE POLICY "Anyone can view active employers" ON public.employers
  FOR SELECT USING (is_active = true);

-- Content pages policies
CREATE POLICY "Anyone can view published content" ON public.content_pages
  FOR SELECT USING (is_published = true);

CREATE POLICY "Admins can manage content" ON public.content_pages
  FOR ALL USING (is_admin());

-- Settings policies
CREATE POLICY "Admins can manage settings" ON public.settings
  FOR ALL USING (is_admin());

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Add triggers for updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_courses_updated_at BEFORE UPDATE ON public.courses FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_training_programs_updated_at BEFORE UPDATE ON public.training_programs FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON public.events FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_enquiries_updated_at BEFORE UPDATE ON public.enquiries FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_registrations_updated_at BEFORE UPDATE ON public.registrations FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_colleges_updated_at BEFORE UPDATE ON public.colleges FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_employers_updated_at BEFORE UPDATE ON public.employers FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_content_pages_updated_at BEFORE UPDATE ON public.content_pages FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)),
    'student'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();