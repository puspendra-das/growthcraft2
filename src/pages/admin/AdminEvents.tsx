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
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Event {
  id: string;
  title: string;
  description: string | null;
  event_type: string | null;
  event_date: string | null;
  event_time: string | null;
  location: string | null;
  is_online: boolean;
  is_published: boolean;
  is_featured: boolean;
  created_at: string;
}

const eventTypes = [
  "Webinar",
  "Workshop",
  "Hackathon",
  "Career Fair",
  "Tech Talk",
  "Conference",
  "Meetup",
  "Seminar",
];

const AdminEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    event_type: "",
    event_date: "",
    event_time: "",
    location: "",
    is_online: false,
    is_published: false,
    is_featured: false,
  });
  const { toast } = useToast();

  const fetchEvents = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setEvents(data || []);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleAdd = () => {
    setEditingEvent(null);
    setFormData({
      title: "",
      description: "",
      event_type: "",
      event_date: "",
      event_time: "",
      location: "",
      is_online: false,
      is_published: false,
      is_featured: false,
    });
    setIsDialogOpen(true);
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    setFormData({
      title: event.title,
      description: event.description || "",
      event_type: event.event_type || "",
      event_date: event.event_date || "",
      event_time: event.event_time || "",
      location: event.location || "",
      is_online: event.is_online,
      is_published: event.is_published,
      is_featured: event.is_featured,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (event: Event) => {
    if (!confirm("Are you sure you want to delete this event?")) return;

    try {
      const { error } = await supabase.from("events").delete().eq("id", event.id);

      if (error) throw error;

      toast({ title: "Event deleted successfully" });
      fetchEvents();
    } catch (error: any) {
      toast({
        title: "Error deleting event",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const eventData = {
        title: formData.title,
        description: formData.description || null,
        event_type: formData.event_type || null,
        event_date: formData.event_date || null,
        event_time: formData.event_time || null,
        location: formData.location || null,
        is_online: formData.is_online,
        is_published: formData.is_published,
        is_featured: formData.is_featured,
      };

      if (editingEvent) {
        const { error } = await supabase
          .from("events")
          .update(eventData)
          .eq("id", editingEvent.id);

        if (error) throw error;
        toast({ title: "Event updated successfully" });
      } else {
        const { error } = await supabase.from("events").insert(eventData);

        if (error) throw error;
        toast({ title: "Event created successfully" });
      }

      setIsDialogOpen(false);
      fetchEvents();
    } catch (error: any) {
      toast({
        title: "Error saving event",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const columns = [
    { key: "title", label: "Title" },
    { key: "event_type", label: "Type" },
    {
      key: "event_date",
      label: "Date",
      render: (value: string) =>
        value ? new Date(value).toLocaleDateString() : "-",
    },
    { key: "location", label: "Location" },
    {
      key: "is_online",
      label: "Mode",
      render: (value: boolean) => (
        <Badge variant="outline">{value ? "Online" : "Offline"}</Badge>
      ),
    },
    {
      key: "is_published",
      label: "Status",
      render: (value: boolean) => (
        <Badge variant={value ? "default" : "secondary"}>
          {value ? "Published" : "Draft"}
        </Badge>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Events</h1>
        <p className="text-muted-foreground mt-1">Manage all events</p>
      </div>

      <DataTable
        columns={columns}
        data={events}
        searchPlaceholder="Search events..."
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        addButtonLabel="Add Event"
        isLoading={isLoading}
      />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingEvent ? "Edit Event" : "Add New Event"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="event_type">Event Type</Label>
                <Select
                  value={formData.event_type}
                  onValueChange={(value) =>
                    setFormData({ ...formData, event_type: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {eventTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="event_date">Event Date</Label>
                <Input
                  id="event_date"
                  type="date"
                  value={formData.event_date}
                  onChange={(e) =>
                    setFormData({ ...formData, event_date: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="event_time">Event Time</Label>
                <Input
                  id="event_time"
                  type="time"
                  value={formData.event_time}
                  onChange={(e) =>
                    setFormData({ ...formData, event_time: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  placeholder="e.g., Virtual / City Name"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                rows={4}
              />
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Switch
                  id="is_online"
                  checked={formData.is_online}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, is_online: checked })
                  }
                />
                <Label htmlFor="is_online">Online Event</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="is_published"
                  checked={formData.is_published}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, is_published: checked })
                  }
                />
                <Label htmlFor="is_published">Published</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="is_featured"
                  checked={formData.is_featured}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, is_featured: checked })
                  }
                />
                <Label htmlFor="is_featured">Featured</Label>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">
                {editingEvent ? "Update" : "Create"} Event
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminEvents;
