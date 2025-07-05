
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Briefcase, PenTool, Users, BarChart3 } from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    caseStudies: 0,
    solutions: 0,
    blogPosts: 0,
    jobPostings: 0,
    totalViews: 0,
    totalApplications: 0
  });
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [caseStudiesRes, solutionsRes, blogPostsRes, jobPostingsRes] = await Promise.all([
        supabase.from('case_studies').select('*', { count: 'exact' }),
        supabase.from('solutions').select('*', { count: 'exact' }),
        supabase.from('blog_posts').select('views', { count: 'exact' }),
        supabase.from('job_postings').select('applications_count', { count: 'exact' })
      ]);

      const totalViews = blogPostsRes.data?.reduce((sum, post) => sum + (post.views || 0), 0) || 0;
      const totalApplications = jobPostingsRes.data?.reduce((sum, job) => sum + (job.applications_count || 0), 0) || 0;

      setStats({
        caseStudies: caseStudiesRes.count || 0,
        solutions: solutionsRes.count || 0,
        blogPosts: blogPostsRes.count || 0,
        jobPostings: jobPostingsRes.count || 0,
        totalViews,
        totalApplications
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch dashboard statistics',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const adminSections = [
    {
      title: "Case Studies",
      description: "Manage client success stories and project showcases",
      icon: FileText,
      href: "/admin/case-studies",
      count: `${stats.caseStudies} Active`
    },
    {
      title: "Solutions",
      description: "Update service offerings and pricing",
      icon: Briefcase,
      href: "/admin/solutions",
      count: `${stats.solutions} Services`
    },
    {
      title: "Blog Posts",
      description: "Create and publish blog content",
      icon: PenTool,  
      href: "/admin/blogs",
      count: `${stats.blogPosts} Published`
    },
    {
      title: "Job Postings",
      description: "Manage career opportunities and applications",
      icon: Users,
      href: "/admin/jobs",
      count: `${stats.jobPostings} Open Positions`
    }
  ];

  const dashboardStats = [
    { label: "Total Views", value: stats.totalViews.toLocaleString(), change: "+12%" },
    { label: "Active Cases", value: stats.caseStudies.toString(), change: "+2" },
    { label: "Blog Readers", value: stats.totalViews.toLocaleString(), change: "+5%" },
    { label: "Job Applications", value: stats.totalApplications.toString(), change: "+8" }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <AdminHeader />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-24 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your CloudEnact website content</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {dashboardStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className="text-sm text-green-600 font-medium">
                    {stat.change}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Admin Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {adminSections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{section.title}</CardTitle>
                        <CardDescription>{section.description}</CardDescription>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">{section.count}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to={section.href}>
                      Manage {section.title}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
