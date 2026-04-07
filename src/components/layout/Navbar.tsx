import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logoMain from "@/assets/logo-main.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "Bootcamps", path: "/bootcamps" },
  { name: "About", path: "/about" },
  { name: "For Students", path: "/for-students" },
  { name: "For Colleges", path: "/for-colleges" },
  { name: "For Mentors", path: "/for-mentors" },
  { name: "For Employers", path: "/for-employers" },
  { name: "Contact", path: "/contact" },
];

const loginOptions = [
  { label: "Student Login", path: "/student/login" },
  { label: "College Login", path: "/college/login" },
  { label: "Mentor Login", path: "/mentor/login" },
  { label: "Employer Login", path: "/employer/login" },
];

const registerOptions = [
  { label: "Student Signup", path: "/student/register" },
  { label: "College Signup", path: "/college/register" },
  { label: "Mentor Application", path: "/mentor/register" },
  { label: "Employer Signup", path: "/employer/register" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center">
            <img src={logoMain} alt="GrowthCraft" className="h-8 lg:h-10" />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Login <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {loginOptions.map((opt) => (
                  <DropdownMenuItem key={opt.path} asChild>
                    <Link to={opt.path}>{opt.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="default" size="default">
                  Get Started <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {registerOptions.map((opt) => (
                  <DropdownMenuItem key={opt.path} asChild>
                    <Link to={opt.path}>{opt.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-4 space-y-2">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-2">Login As</p>
                <div className="grid grid-cols-2 gap-2">
                  {loginOptions.map((opt) => (
                    <Link key={opt.path} to={opt.path} onClick={() => setIsOpen(false)}>
                      <Button variant="outline" size="sm" className="w-full text-xs">{opt.label}</Button>
                    </Link>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-2 mt-4">Register As</p>
                <div className="grid grid-cols-2 gap-2">
                  {registerOptions.map((opt) => (
                    <Link key={opt.path} to={opt.path} onClick={() => setIsOpen(false)}>
                      <Button variant="default" size="sm" className="w-full text-xs">{opt.label}</Button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
