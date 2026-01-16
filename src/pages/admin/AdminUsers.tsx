import { useEffect, useState } from "react";
import { DataTable } from "@/components/admin/DataTable";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Profile {
  id: string;
  user_id: string | null;
  email: string;
  full_name: string | null;
  phone: string | null;
  role: "platform_admin" | "college_admin" | "mentor" | "employer" | "student";
  organization: string | null;
  is_active: boolean;
  avatar_url: string | null;
  created_at: string;
}

const roles = [
  { value: "platform_admin", label: "Platform Admin" },
  { value: "college_admin", label: "College Admin" },
  { value: "mentor", label: "Mentor" },
  { value: "employer", label: "Employer" },
  { value: "student", label: "Student" },
];

const AdminUsers = () => {
  const [users, setUsers] = useState<Profile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<Profile | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    full_name: "",
    phone: "",
    role: "student" as Profile["role"],
    organization: "",
    is_active: true,
  });
  const { toast } = useToast();

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setUsers(data || []);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEdit = (user: Profile) => {
    setEditingUser(user);
    setFormData({
      email: user.email,
      full_name: user.full_name || "",
      phone: user.phone || "",
      role: user.role,
      organization: user.organization || "",
      is_active: user.is_active,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (user: Profile) => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    try {
      const { error } = await supabase.from("profiles").delete().eq("id", user.id);

      if (error) throw error;

      toast({ title: "User deleted successfully" });
      fetchUsers();
    } catch (error: any) {
      toast({
        title: "Error deleting user",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!editingUser) return;

    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          full_name: formData.full_name || null,
          phone: formData.phone || null,
          role: formData.role,
          organization: formData.organization || null,
          is_active: formData.is_active,
        })
        .eq("id", editingUser.id);

      if (error) throw error;

      toast({ title: "User updated successfully" });
      setIsDialogOpen(false);
      fetchUsers();
    } catch (error: any) {
      toast({
        title: "Error updating user",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const getRoleBadgeVariant = (role: Profile["role"]) => {
    switch (role) {
      case "platform_admin":
        return "destructive" as const;
      case "college_admin":
        return "default" as const;
      case "mentor":
        return "secondary" as const;
      case "employer":
        return "outline" as const;
      default:
        return "secondary" as const;
    }
  };

  const columns = [
    {
      key: "full_name",
      label: "User",
      render: (value: string, row: Profile) => (
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={row.avatar_url || ""} />
            <AvatarFallback className="text-xs">
              {(value || row.email)?.[0]?.toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{value || "No name"}</p>
            <p className="text-xs text-muted-foreground">{row.email}</p>
          </div>
        </div>
      ),
    },
    { key: "phone", label: "Phone", render: (value: string) => value || "-" },
    {
      key: "role",
      label: "Role",
      render: (value: Profile["role"]) => (
        <Badge variant={getRoleBadgeVariant(value)}>
          {roles.find((r) => r.value === value)?.label || value}
        </Badge>
      ),
    },
    {
      key: "organization",
      label: "Organization",
      render: (value: string) => value || "-",
    },
    {
      key: "is_active",
      label: "Status",
      render: (value: boolean) => (
        <Badge variant={value ? "default" : "secondary"}>
          {value ? "Active" : "Inactive"}
        </Badge>
      ),
    },
    {
      key: "created_at",
      label: "Joined",
      render: (value: string) => new Date(value).toLocaleDateString(),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Users</h1>
        <p className="text-muted-foreground mt-1">Manage all platform users</p>
      </div>

      <DataTable
        columns={columns}
        data={users}
        searchPlaceholder="Search users..."
        onEdit={handleEdit}
        onDelete={handleDelete}
        isLoading={isLoading}
      />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" value={formData.email} disabled />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="full_name">Full Name</Label>
                <Input
                  id="full_name"
                  value={formData.full_name}
                  onChange={(e) =>
                    setFormData({ ...formData, full_name: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select
                  value={formData.role}
                  onValueChange={(value) =>
                    setFormData({ ...formData, role: value as Profile["role"] })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((role) => (
                      <SelectItem key={role.value} value={role.value}>
                        {role.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="organization">Organization</Label>
                <Input
                  id="organization"
                  value={formData.organization}
                  onChange={(e) =>
                    setFormData({ ...formData, organization: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="is_active"
                checked={formData.is_active}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, is_active: checked })
                }
              />
              <Label htmlFor="is_active">Active</Label>
            </div>
            <div className="flex justify-end gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Update User</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminUsers;
