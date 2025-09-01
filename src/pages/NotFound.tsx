import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="text-8xl font-bold text-primary/20">404</div>
        <h1 className="font-heading text-3xl font-bold text-foreground">Page Not Found</h1>
        <p className="text-lg text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <Link to="/">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link to="/projects">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              View Projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
