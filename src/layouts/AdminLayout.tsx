import { Outlet, Navigate } from "react-router-dom";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";

const AdminLayout = () => {
  const { user, profile, isLoading, signOut, isAdmin } = useAuth();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  // For now, allow any authenticated user to access admin panel
  // In production, you would check: if (!isAdmin) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-muted/30">
      <AdminSidebar onLogout={signOut} />
      <div className={cn("transition-all duration-300 ml-64")}>
        <AdminHeader
          user={profile ? { email: profile.email, full_name: profile.full_name || undefined } : null}
          onLogout={signOut}
        />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
