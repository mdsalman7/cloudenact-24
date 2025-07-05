
-- Create tables for all admin content management

-- Case Studies table
CREATE TABLE public.case_studies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  client TEXT NOT NULL,
  industry TEXT NOT NULL,
  challenge TEXT NOT NULL,
  solution TEXT NOT NULL,
  duration TEXT,
  technologies TEXT[],
  testimonial TEXT,
  image_url TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_id UUID REFERENCES auth.users(id) NOT NULL
);

-- Solutions table
CREATE TABLE public.solutions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  features TEXT[],
  price TEXT NOT NULL,
  icon TEXT,
  popular BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_id UUID REFERENCES auth.users(id) NOT NULL
);

-- Blog Posts table
CREATE TABLE public.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  author TEXT NOT NULL,
  category TEXT NOT NULL,
  tags TEXT[],
  image_url TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  views INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_id UUID REFERENCES auth.users(id) NOT NULL
);

-- Job Postings table
CREATE TABLE public.job_postings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  department TEXT NOT NULL,
  location TEXT NOT NULL,
  type TEXT DEFAULT 'full-time' CHECK (type IN ('full-time', 'part-time', 'contract', 'internship')),
  experience TEXT,
  salary TEXT,
  description TEXT NOT NULL,
  requirements TEXT[],
  benefits TEXT[],
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'paused', 'closed')),
  applications_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_id UUID REFERENCES auth.users(id) NOT NULL
);

-- Enable RLS on all tables
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.solutions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_postings ENABLE ROW LEVEL SECURITY;

-- Create policies for admins to manage all content
CREATE POLICY "Admins can manage case studies" ON public.case_studies
  FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

CREATE POLICY "Admins can manage solutions" ON public.solutions
  FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

CREATE POLICY "Admins can manage blog posts" ON public.blog_posts
  FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

CREATE POLICY "Admins can manage job postings" ON public.job_postings
  FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

-- Insert some sample data for testing
INSERT INTO public.case_studies (title, client, industry, challenge, solution, duration, technologies, testimonial, status, user_id) VALUES
('E-commerce Platform Migration', 'TechCommerce Inc.', 'E-commerce', 'Legacy system performance issues', 'Cloud migration with microservices architecture', '6 months', ARRAY['AWS', 'Docker', 'React'], 'Amazing results and improved performance', 'published', (SELECT id FROM auth.users LIMIT 1)),
('Healthcare Data Analytics', 'MediCare Solutions', 'Healthcare', 'Data silos and compliance issues', 'Unified analytics platform with HIPAA compliance', '4 months', ARRAY['Azure', 'Python', 'PostgreSQL'], 'Streamlined our operations significantly', 'published', (SELECT id FROM auth.users LIMIT 1));

INSERT INTO public.solutions (title, description, price, icon, popular, user_id) VALUES
('Cloud Migration Services', 'Complete cloud migration with zero downtime', 'Starting at $10,000', 'Cloud', false, (SELECT id FROM auth.users LIMIT 1)),
('Cloud Security & Compliance', 'Enterprise-grade security and compliance solutions', 'Starting at $5,000', 'Shield', true, (SELECT id FROM auth.users LIMIT 1));

INSERT INTO public.blog_posts (title, excerpt, content, author, category, status, views, user_id) VALUES
('The Future of Cloud Computing in 2024', 'Exploring upcoming trends in cloud technology', 'Cloud computing continues to evolve...', 'John Doe', 'Technology', 'published', 1234, (SELECT id FROM auth.users LIMIT 1)),
('Best Practices for Cloud Security', 'Essential security measures for cloud infrastructure', 'Security in the cloud requires...', 'Jane Smith', 'Security', 'published', 856, (SELECT id FROM auth.users LIMIT 1));

INSERT INTO public.job_postings (title, department, location, type, experience, salary, description, requirements, benefits, applications_count, user_id) VALUES
('Senior Cloud Engineer', 'Engineering', 'Remote', 'full-time', '5+ years', '$120,000 - $150,000', 'Lead cloud infrastructure projects', ARRAY['AWS/Azure expertise', '5+ years experience'], ARRAY['Remote work', 'Health insurance'], 15, (SELECT id FROM auth.users LIMIT 1)),
('DevOps Specialist', 'Engineering', 'New York', 'full-time', '3+ years', '$90,000 - $120,000', 'Manage CI/CD pipelines and infrastructure', ARRAY['Docker/Kubernetes', 'CI/CD experience'], ARRAY['Health insurance', '401k matching'], 8, (SELECT id FROM auth.users LIMIT 1));
