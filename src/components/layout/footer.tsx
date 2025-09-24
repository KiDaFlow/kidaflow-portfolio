import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Youtube, Linkedin, Twitter, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link 
              to="/" 
              className="flex items-center space-x-2 font-heading font-bold text-xl text-foreground hover:text-primary transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm">
                K
              </div>
              <span>KiDaFlow</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              AI-automation agency building custom AI agents and workflow automations that unlock businesses and elevate operations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/projects">
                <Button variant="ghost" size="sm" className="p-0 h-auto justify-start text-muted-foreground hover:text-foreground">
                  All Projects
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="ghost" size="sm" className="p-0 h-auto justify-start text-muted-foreground hover:text-foreground">
                  About Us
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost" size="sm" className="p-0 h-auto justify-start text-muted-foreground hover:text-foreground">
                  Get in Touch
                </Button>
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Connect</h3>
            <div className="space-y-3">
              <a 
                href="mailto:hello@kidaflow.com" 
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                <span>hello@kidaflow.com</span>
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=254105430486" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                <span>+254 105 430 486</span>
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="w-9 h-9 p-0" asChild>
                <a href="https://www.youtube.com/@kidaflowautomations" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-4 w-4" />
                  <span className="sr-only">YouTube</span>
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="w-9 h-9 p-0" asChild>
                <a href="https://www.linkedin.com/company/kidaflow" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="w-9 h-9 p-0" asChild>
                <a href="https://x.com/Kidaflow_auto" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="w-9 h-9 p-0" asChild>
                <a href="https://api.whatsapp.com/send/?phone=254105430486" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  <span className="sr-only">WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} KiDaFlow. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Built with precision and care
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}