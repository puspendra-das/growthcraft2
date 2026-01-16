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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Registration {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  status: string;
  payment_status: string | null;
  amount: number | null;
  notes: string | null;
  course_id: string | null;
  training_program_id: string | null;
  event_id: string | null;
  created_at: string;
}

const statuses = [
  { value: "pending", label: "Pending" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
  { value: "cancelled", label: "Cancelled" },
];

const paymentStatuses = [
  { value: "unpaid", label: "Unpaid" },
  { value: "pending", label: "Pending" },
  { value: "paid", label: "Paid" },
  { value: "refunded", label: "Refunded" },
];

const AdminRegistrations = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedRegistration, setSelectedRegistration] =
    useState<Registration | null>(null);
  const [formData, setFormData] = useState({
    status: "pending",
    payment_status: "unpaid",
    amount: "",
    notes: "",
  });
  const { toast } = useToast();

  const fetchRegistrations = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("registrations")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setRegistrations(data || []);
    } catch (error) {
      console.error("Error fetching registrations:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const handleView = (registration: Registration) => {
    setSelectedRegistration(registration);
    setFormData({
      status: registration.status,
      payment_status: registration.payment_status || "unpaid",
      amount: registration.amount?.toString() || "",
      notes: registration.notes || "",
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (registration: Registration) => {
    if (!confirm("Are you sure you want to delete this registration?")) return;

    try {
      const { error } = await supabase
        .from("registrations")
        .delete()
        .eq("id", registration.id);

      if (error) throw error;

      toast({ title: "Registration deleted successfully" });
      fetchRegistrations();
    } catch (error: any) {
      toast({
        title: "Error deleting registration",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedRegistration) return;

    try {
      const { error } = await supabase
        .from("registrations")
        .update({
          status: formData.status,
          payment_status: formData.payment_status,
          amount: formData.amount ? parseFloat(formData.amount) : null,
          notes: formData.notes || null,
        })
        .eq("id", selectedRegistration.id);

      if (error) throw error;

      toast({ title: "Registration updated successfully" });
      setIsDialogOpen(false);
      fetchRegistrations();
    } catch (error: any) {
      toast({
        title: "Error updating registration",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "approved":
        return "default" as const;
      case "pending":
        return "secondary" as const;
      case "rejected":
        return "destructive" as const;
      case "cancelled":
        return "outline" as const;
      default:
        return "secondary" as const;
    }
  };

  const getPaymentBadgeVariant = (status: string) => {
    switch (status) {
      case "paid":
        return "default" as const;
      case "pending":
        return "secondary" as const;
      case "unpaid":
        return "destructive" as const;
      case "refunded":
        return "outline" as const;
      default:
        return "secondary" as const;
    }
  };

  const getRegistrationType = (reg: Registration) => {
    if (reg.course_id) return "Course";
    if (reg.training_program_id) return "Training";
    if (reg.event_id) return "Event";
    return "Unknown";
  };

  const columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone", render: (value: string) => value || "-" },
    {
      key: "course_id",
      label: "Type",
      render: (_: any, row: Registration) => (
        <Badge variant="outline">{getRegistrationType(row)}</Badge>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <Badge variant={getStatusBadgeVariant(value)} className="capitalize">
          {value}
        </Badge>
      ),
    },
    {
      key: "payment_status",
      label: "Payment",
      render: (value: string) => (
        <Badge
          variant={getPaymentBadgeVariant(value || "unpaid")}
          className="capitalize"
        >
          {value || "Unpaid"}
        </Badge>
      ),
    },
    {
      key: "amount",
      label: "Amount",
      render: (value: number) => (value ? `₹${value}` : "-"),
    },
    {
      key: "created_at",
      label: "Date",
      render: (value: string) => new Date(value).toLocaleDateString(),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Registrations</h1>
        <p className="text-muted-foreground mt-1">
          Manage course, training & event registrations
        </p>
      </div>

      <DataTable
        columns={columns}
        data={registrations}
        searchPlaceholder="Search registrations..."
        onView={handleView}
        onDelete={handleDelete}
        isLoading={isLoading}
      />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Registration Details</DialogTitle>
          </DialogHeader>
          {selectedRegistration && (
            <div className="space-y-4">
              <div className="grid gap-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Name:</span>
                  <span className="font-medium">{selectedRegistration.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email:</span>
                  <span className="font-medium">{selectedRegistration.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Phone:</span>
                  <span className="font-medium">
                    {selectedRegistration.phone || "-"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type:</span>
                  <Badge variant="outline">
                    {getRegistrationType(selectedRegistration)}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date:</span>
                  <span className="font-medium">
                    {new Date(selectedRegistration.created_at).toLocaleString()}
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select
                      value={formData.status}
                      onValueChange={(value) =>
                        setFormData({ ...formData, status: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {statuses.map((status) => (
                          <SelectItem key={status.value} value={status.value}>
                            {status.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="payment_status">Payment Status</Label>
                    <Select
                      value={formData.payment_status}
                      onValueChange={(value) =>
                        setFormData({ ...formData, payment_status: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {paymentStatuses.map((status) => (
                          <SelectItem key={status.value} value={status.value}>
                            {status.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount (₹)</Label>
                  <Input
                    id="amount"
                    type="number"
                    value={formData.amount}
                    onChange={(e) =>
                      setFormData({ ...formData, amount: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Internal Notes</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    rows={3}
                    placeholder="Add internal notes..."
                  />
                </div>
                <div className="flex justify-end gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Close
                  </Button>
                  <Button type="submit">Update</Button>
                </div>
              </form>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminRegistrations;
