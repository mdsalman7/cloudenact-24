
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Briefcase, PenTool, Users, BarChart3, Plus } from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";

const AdminDashboard = () => {
  const adminSections = [
    {
      title: "Case Studies",
      description: "Manage client success stories and project showcases",
      icon: FileText,
      href: "/admin/case-studies",
      count: "4 Active"
    },
    {
      title: "Solutions",
      description: "Update service offerings and pricing",
      icon: Briefcase,
      href: "/admin/solutions",
      count: "6 Services"
    },
    {
      title: "Blog Posts",
      description: "Create and publish blog content",
      icon: PenTool,  
      href: "/admin/blogs",
      count: "12 Published"
    },
    {
      title: "Job Postings",
      description: "Manage career opportunities and applications",
      icon: Users,
      href: "/admin/jobs",
      count: "3 Open Positions"
    }
  ];

  const stats = [
    { label: "Total Views", value: "12,345", change: "+12%" },
    { label: "Active Cases", value: "8", change: "+2" },
    { label: "Blog Readers", value: "1,234", change: "+5%" },
    { label: "Job Applications", value: "45", change: "+8" }
  ];

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
          {stats.map((stat, index) => (
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
