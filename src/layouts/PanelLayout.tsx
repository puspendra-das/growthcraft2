import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import PanelSidebar, { type NavSection } from "./PanelSidebar";
import PanelTopbar from "./PanelTopbar";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  LayoutDashboard, BookOpen, Award, User, HelpCircle, Settings,
  GraduationCap, Users, Calendar, BarChart3, Building2,
  Briefcase, Search, FileText, Megaphone, DollarSign
} from "lucide-react";

type Role = "Student" | "College" | "Ambassador" | "Mentor" | "HiringPartner";

const panelConfigs: Record<string, { role: Role; basePath: string; navSections: NavSection[] }> = {
  student: {
    role: "Student",
    basePath: "/student",
    navSections: [
      {
        label: "Main",
        items: [
          { icon: LayoutDashboard, label: "Dashboard", href: "dashboard" },
          { icon: BookOpen, label: "My Courses", href: "courses" },
          { icon: GraduationCap, label: "Bootcamps", href: "bootcamps" },
          { icon: Users, label: "Mentors", href: "mentors" },
          { icon: Award, label: "Certificates", href: "certificates" },
        ],
      },
      {
        label: "Account",
        items: [
          { icon: User, label: "Profile", href: "profile" },
          { icon: Settings, label: "Settings", href: "settings" },
          { icon: HelpCircle, label: "Support", href: "support" },
        ],
      },
    ],
  },
  college: {
    role: "College",
    basePath: "/college",
    navSections: [
      {
        label: "Main",
        items: [
          { icon: LayoutDashboard, label: "Dashboard", href: "dashboard" },
          { icon: GraduationCap, label: "Students", href: "students" },
          { icon: BarChart3, label: "Reports", href: "reports" },
          { icon: Award, label: "Partnership", href: "partnership" },
        ],
      },
      {
        label: "Account",
        items: [
          { icon: Building2, label: "Profile", href: "profile" },
          { icon: HelpCircle, label: "Support", href: "support" },
        ],
      },
    ],
  },
  ambassador: {
    role: "Ambassador",
    basePath: "/ambassador",
    navSections: [
      {
        label: "Main",
        items: [
          { icon: LayoutDashboard, label: "Dashboard", href: "dashboard" },
          { icon: Megaphone, label: "Referrals", href: "referrals" },
          { icon: Award, label: "Share & Earn", href: "share" },
          { icon: DollarSign, label: "Payouts", href: "payouts" },
        ],
      },
      {
        label: "Account",
        items: [
          { icon: User, label: "Profile", href: "profile" },
          { icon: HelpCircle, label: "Support", href: "support" },
        ],
      },
    ],
  },
  mentor: {
    role: "Mentor",
    basePath: "/mentor",
    navSections: [
      {
        label: "Main",
        items: [
          { icon: LayoutDashboard, label: "Dashboard", href: "dashboard" },
          { icon: Users, label: "Students", href: "students" },
          { icon: BookOpen, label: "Courses", href: "courses" },
          { icon: Calendar, label: "Schedule", href: "schedule" },
          { icon: FileText, label: "Resources", href: "resources" },
        ],
      },
      {
        label: "Account",
        items: [
          { icon: User, label: "Profile", href: "profile" },
          { icon: HelpCircle, label: "Support", href: "support" },
        ],
      },
    ],
  },
  hiring: {
    role: "HiringPartner",
    basePath: "/employer",
    navSections: [
      {
        label: "Main",
        items: [
          { icon: LayoutDashboard, label: "Dashboard", href: "dashboard" },
          { icon: Search, label: "Talent Pool", href: "talent" },
          { icon: Briefcase, label: "Job Postings", href: "jobs" },
          { icon: FileText, label: "Applications", href: "applications" },
        ],
      },
      {
        label: "Account",
        items: [
          { icon: Building2, label: "Profile", href: "profile" },
          { icon: HelpCircle, label: "Support", href: "support" },
        ],
      },
    ],
  },
};

function getPanelKey(pathname: string): string {
  const segment = pathname.split("/")[1];
  if (segment === "employer") return "hiring";
  return segment || "student";
}

const PanelLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const panelKey = getPanelKey(location.pathname);
  const config = panelConfigs[panelKey] || panelConfigs.student;

  const handleMenuClick = () => {
    if (isMobile) {
      setMobileOpen(true);
    } else {
      setCollapsed((c) => !c);
    }
  };

  return (
    <div className="min-h-screen flex">
      <PanelSidebar
        navSections={config.navSections}
        role={config.role}
        basePath={config.basePath}
        collapsed={collapsed}
        onToggle={() => setCollapsed((c) => !c)}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />

      <div className={cn(
        "flex-1 flex flex-col min-h-screen transition-all duration-300",
        !isMobile && (collapsed ? "ml-16" : "ml-64")
      )}>
        <PanelTopbar
          onMenuClick={handleMenuClick}
          basePath={config.basePath}
        />
        <main className="flex-1 bg-marble p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PanelLayout;
