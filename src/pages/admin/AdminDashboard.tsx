import { useEffect, useState } from "react";
import { StatsCard } from "@/components/admin/StatsCard";
import {
  BookOpen,
  GraduationCap,
  Calendar,
  Users,
  MessageSquare,
  ClipboardList,
  TrendingUp,
  Building2,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DashboardStats {
  courses: number;
  trainingPrograms: number;
  events: number;
  users: number;
  enquiries: number;
  registrations: number;
  colleges: number;
  employers: number;
}

interface RecentEnquiry {
  id: string;
  name: string;
  email: string;
  enquiry_type: string;
  status: string;
  created_at: string;
}

interface RecentRegistration {
  id: string;
  name: string;
  email: string;
  status: string;
  created_at: string;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<DashboardStats>({
    courses: 0,
    trainingPrograms: 0,
    events: 0,
    users: 0,
    enquiries: 0,
    registrations: 0,
    colleges: 0,
    employers: 0,
  });
  const [recentEnquiries, setRecentEnquiries] = useState<RecentEnquiry[]>([]);
  const [recentRegistrations, setRecentRegistrations] = useState<RecentRegistration[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [
          coursesRes,
          programsRes,
          eventsRes,
          usersRes,
          enquiriesRes,
          registrationsRes,
          collegesRes,
          employersRes,
          recentEnquiriesRes,
          recentRegistrationsRes,
        ] = await Promise.all([
          supabase.from("courses").select("id", { count: "exact", head: true }),
          supabase.from("training_programs").select("id", { count: "exact", head: true }),
          supabase.from("events").select("id", { count: "exact", head: true }),
          supabase.from("profiles").select("id", { count: "exact", head: true }),
          supabase.from("enquiries").select("id", { count: "exact", head: true }),
          supabase.from("registrations").select("id", { count: "exact", head: true }),
          supabase.from("colleges").select("id", { count: "exact", head: true }),
          supabase.from("employers").select("id", { count: "exact", head: true }),
          supabase.from("enquiries").select("*").order("created_at", { ascending: false }).limit(5),
          supabase.from("registrations").select("*").order("created_at", { ascending: false }).limit(5),
        ]);

        setStats({
          courses: coursesRes.count || 0,
          trainingPrograms: programsRes.count || 0,
          events: eventsRes.count || 0,
          users: usersRes.count || 0,
          enquiries: enquiriesRes.count || 0,
          registrations: registrationsRes.count || 0,
          colleges: collegesRes.count || 0,
          employers: employersRes.count || 0,
        });

        setRecentEnquiries(recentEnquiriesRes.data || []);
        setRecentRegistrations(recentRegistrationsRes.data || []);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      new: "default",
      pending: "secondary",
      approved: "default",
      rejected: "destructive",
      contacted: "outline",
    };
    return <Badge variant={variants[status] || "secondary"}>{status}</Badge>;
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome to GrowthCraft Admin Panel
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Courses"
          value={stats.courses}
          icon={BookOpen}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Training Programs"
          value={stats.trainingPrograms}
          icon={GraduationCap}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Events"
          value={stats.events}
          icon={Calendar}
          trend={{ value: 5, isPositive: true }}
        />
        <StatsCard
          title="Total Users"
          value={stats.users}
          icon={Users}
          trend={{ value: 15, isPositive: true }}
        />
        <StatsCard
          title="Enquiries"
          value={stats.enquiries}
          icon={MessageSquare}
          trend={{ value: 23, isPositive: true }}
        />
        <StatsCard
          title="Registrations"
          value={stats.registrations}
          icon={ClipboardList}
          trend={{ value: 18, isPositive: true }}
        />
        <StatsCard
          title="Partner Colleges"
          value={stats.colleges}
          icon={Building2}
          trend={{ value: 3, isPositive: true }}
        />
        <StatsCard
          title="Employers"
          value={stats.employers}
          icon={TrendingUp}
          trend={{ value: 7, isPositive: true }}
        />
      </div>

      {/* Recent Activity */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Enquiries */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Enquiries</CardTitle>
          </CardHeader>
          <CardContent>
            {recentEnquiries.length === 0 ? (
              <p className="text-muted-foreground text-sm">No recent enquiries</p>
            ) : (
              <div className="space-y-4">
                {recentEnquiries.map((enquiry) => (
                  <div
                    key={enquiry.id}
                    className="flex items-center justify-between border-b border-border pb-3 last:border-0"
                  >
                    <div>
                      <p className="font-medium text-sm">{enquiry.name}</p>
                      <p className="text-xs text-muted-foreground">{enquiry.email}</p>
                    </div>
                    <div className="text-right">
                      {getStatusBadge(enquiry.status)}
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(enquiry.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Registrations */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Registrations</CardTitle>
          </CardHeader>
          <CardContent>
            {recentRegistrations.length === 0 ? (
              <p className="text-muted-foreground text-sm">No recent registrations</p>
            ) : (
              <div className="space-y-4">
                {recentRegistrations.map((registration) => (
                  <div
                    key={registration.id}
                    className="flex items-center justify-between border-b border-border pb-3 last:border-0"
                  >
                    <div>
                      <p className="font-medium text-sm">{registration.name}</p>
                      <p className="text-xs text-muted-foreground">{registration.email}</p>
                    </div>
                    <div className="text-right">
                      {getStatusBadge(registration.status)}
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(registration.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
