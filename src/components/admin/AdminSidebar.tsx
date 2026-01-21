import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import logoMain from "@/assets/logo-main.png";
import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  Rocket,
  Calendar,
  Users,
  Building2,
  Briefcase,
  MessageSquare,
  ClipboardList,
  FileText,
  Settings,
  LogOut,
  ChevronLeft,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const menuItems = [
  { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { name: "Courses", path: "/admin/courses", icon: BookOpen },
  { name: "Bootcamps", path: "/admin/bootcamps", icon: Rocket },
  { name: "Training Programs", path: "/admin/training-programs", icon: GraduationCap },
  { name: "Events", path: "/admin/events", icon: Calendar },
  { name: "Users", path: "/admin/users", icon: Users },
  { name: "Colleges", path: "/admin/colleges", icon: Building2 },
  { name: "Employers", path: "/admin/employers", icon: Briefcase },
  { name: "Enquiries", path: "/admin/enquiries", icon: MessageSquare },
  { name: "Registrations", path: "/admin/registrations", icon: ClipboardList },
  { name: "Content Pages", path: "/admin/content", icon: FileText },
  { name: "Settings", path: "/admin/settings", icon: Settings },
];

interface AdminSidebarProps {
  onLogout: () => void;
}

export const AdminSidebar = ({ onLogout }: AdminSidebarProps) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-card border-r border-border transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center justify-between px-4 border-b border-border">
          {!collapsed && (
            <Link to="/admin" className="flex items-center gap-2">
              <img src={logoMain} alt="GrowthCraft" className="h-8" />
            </Link>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto"
          >
            {collapsed ? <Menu className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <item.icon className="h-5 w-5 flex-shrink-0" />
                    {!collapsed && <span>{item.name}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout */}
        <div className="border-t border-border p-4">
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start gap-3 text-muted-foreground hover:text-destructive",
              collapsed && "justify-center"
            )}
            onClick={onLogout}
          >
            <LogOut className="h-5 w-5" />
            {!collapsed && <span>Logout</span>}
          </Button>
        </div>
      </div>
    </aside>
  );
};
