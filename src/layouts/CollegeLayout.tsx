import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, BookOpen, Users, User, HelpCircle, LogOut, Menu, Building2, FileText, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const sidebarLinks = [
  { label: "Dashboard", path: "/college/dashboard", icon: LayoutDashboard },
  { label: "Programs", path: "/college/programs", icon: BookOpen },
  { label: "Students", path: "/college/students", icon: Users },
  { label: "Schedule", path: "/college/schedule", icon: Calendar },
  { label: "Reports", path: "/college/reports", icon: FileText },
  { label: "Profile", path: "/college/profile", icon: User },
  { label: "Support", path: "/college/support", icon: HelpCircle },
];

const CollegeLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-foreground/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <aside className={cn(
        "fixed top-0 left-0 z-50 h-full w-64 bg-background border-r border-border flex flex-col transition-transform duration-300",
        "lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-16 flex items-center gap-2 px-5 border-b border-border">
          <Building2 className="h-6 w-6 text-primary" />
          <span className="font-bold text-foreground">College Portal</span>
        </div>

        <nav className="flex-1 py-4 px-3 space-y-1">
          {sidebarLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link key={link.path} to={link.path} onClick={() => setSidebarOpen(false)}
                className={cn("flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}>
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-border">
          <button onClick={() => navigate("/")}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted w-full">
            <LogOut className="h-4 w-4" /> Back to Home
          </button>
        </div>
      </aside>

      <div className="flex-1 lg:ml-64">
        <header className="sticky top-0 z-30 h-14 bg-background/95 backdrop-blur-md border-b border-border flex items-center px-4 lg:px-6">
          <Button variant="ghost" size="icon" className="lg:hidden mr-2" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex-1" />
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground hidden sm:inline">College Admin</span>
            <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">C</div>
          </div>
        </header>
        <main className="p-4 md:p-6"><Outlet /></main>
      </div>
    </div>
  );
};

export default CollegeLayout;
