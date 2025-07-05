
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
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminCaseStudies from "./pages/admin/AdminCaseStudies";
import AdminSolutions from "./pages/admin/AdminSolutions";
import AdminBlogs from "./pages/admin/AdminBlogs";
import AdminJobs from "./pages/admin/AdminJobs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={
              <ProtectedRoute requireAdmin={true}>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/case-studies" element={
              <ProtectedRoute requireAdmin={true}>
                <AdminCaseStudies />
              </ProtectedRoute>
            } />
            <Route path="/admin/solutions" element={
              <ProtectedRoute requireAdmin={true}>
                <AdminSolutions />
              </ProtectedRoute>
            } />
            <Route path="/admin/blogs" element={
              <ProtectedRoute requireAdmin={true}>
                <AdminBlogs />
              </ProtectedRoute>
            } />
            <Route path="/admin/jobs" element={
              <ProtectedRoute requireAdmin={true}>
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
