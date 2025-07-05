
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Settings, LogOut } from "lucide-react";

const AdminHeader = () => {
  const location = useLocation();
  
  const isMainDashboard = location.pathname === "/admin";

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/a01c04ae-3773-4c9c-8ef1-c9a540728e2d.png" 
                alt="CloudEnact Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-gray-900">CloudEnact</span>
            </Link>
            <div className="text-sm text-gray-500">/ Admin Panel</div>
          </div>

          <div className="flex items-center space-x-4">
            {!isMainDashboard && (
              <Button variant="outline" asChild>
                <Link to="/admin">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Dashboard
                </Link>
              </Button>
            )}
            
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            
            <Button variant="outline" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Site
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
