
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Auth from "./pages/Auth";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminCaseStudies from "./pages/admin/AdminCaseStudies";
import AdminSolutions from "./pages/admin/AdminSolutions";
import AdminBlogs from "./pages/admin/AdminBlogs";
import AdminJobs from "./pages/admin/AdminJobs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin/auth" element={<Auth />} />
            <Route path="/admin" element={
              <ProtectedRoute requireAdmin>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/case-studies" element={
              <ProtectedRoute requireAdmin>
                <AdminCaseStudies />
              </ProtectedRoute>
            } />
            <Route path="/admin/solutions" element={
              <ProtectedRoute requireAdmin>
                <AdminSolutions />
              </ProtectedRoute>
            } />
            <Route path="/admin/blogs" element={
              <ProtectedRoute requireAdmin>
                <AdminBlogs />
              </ProtectedRoute>
            } />
            <Route path="/admin/jobs" element={
              <ProtectedRoute requireAdmin>
                <AdminJobs />
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
