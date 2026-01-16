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

interface Course {
  id: string;
  title: string;
  category: string;
  subcategory: string | null;
  description: string | null;
  duration: string | null;
  level: string | null;
  price: number | null;
  is_published: boolean;
  is_featured: boolean;
  created_at: string;
}

const categories = [
  "Programming Languages",
  "Web Development",
  "Data Science & AI",
  "Cloud & DevOps",
  "Database Management",
  "Cybersecurity",
  "Soft Skills",
  "Design",
];

const levels = ["Beginner", "Intermediate", "Advanced"];

const AdminCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    subcategory: "",
    description: "",
    duration: "",
    level: "Beginner",
    price: "",
    is_published: false,
    is_featured: false,
  });
  const { toast } = useToast();

  const fetchCourses = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setCourses(data || []);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleAdd = () => {
    setEditingCourse(null);
    setFormData({
      title: "",
      category: "",
      subcategory: "",
      description: "",
      duration: "",
      level: "Beginner",
      price: "",
      is_published: false,
      is_featured: false,
    });
    setIsDialogOpen(true);
  };

  const handleEdit = (course: Course) => {
    setEditingCourse(course);
    setFormData({
      title: course.title,
      category: course.category,
      subcategory: course.subcategory || "",
      description: course.description || "",
      duration: course.duration || "",
      level: course.level || "Beginner",
      price: course.price?.toString() || "",
      is_published: course.is_published,
      is_featured: course.is_featured,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (course: Course) => {
    if (!confirm("Are you sure you want to delete this course?")) return;

    try {
      const { error } = await supabase.from("courses").delete().eq("id", course.id);

      if (error) throw error;

      toast({ title: "Course deleted successfully" });
      fetchCourses();
    } catch (error: any) {
      toast({
        title: "Error deleting course",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const courseData = {
        title: formData.title,
        category: formData.category,
        subcategory: formData.subcategory || null,
        description: formData.description || null,
        duration: formData.duration || null,
        level: formData.level,
        price: formData.price ? parseFloat(formData.price) : null,
        is_published: formData.is_published,
        is_featured: formData.is_featured,
      };

      if (editingCourse) {
        const { error } = await supabase
          .from("courses")
          .update(courseData)
          .eq("id", editingCourse.id);

        if (error) throw error;
        toast({ title: "Course updated successfully" });
      } else {
        const { error } = await supabase.from("courses").insert(courseData);

        if (error) throw error;
        toast({ title: "Course created successfully" });
      }

      setIsDialogOpen(false);
      fetchCourses();
    } catch (error: any) {
      toast({
        title: "Error saving course",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const columns = [
    { key: "title", label: "Title" },
    { key: "category", label: "Category" },
    { key: "level", label: "Level" },
    { key: "duration", label: "Duration" },
    {
      key: "price",
      label: "Price",
      render: (value: number) => (value ? `₹${value}` : "Free"),
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
    {
      key: "is_featured",
      label: "Featured",
      render: (value: boolean) =>
        value ? <Badge variant="outline">Featured</Badge> : null,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Courses</h1>
        <p className="text-muted-foreground mt-1">Manage all courses</p>
      </div>

      <DataTable
        columns={columns}
        data={courses}
        searchPlaceholder="Search courses..."
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        addButtonLabel="Add Course"
        isLoading={isLoading}
      />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingCourse ? "Edit Course" : "Add New Course"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
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
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData({ ...formData, category: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subcategory">Subcategory</Label>
                <Input
                  id="subcategory"
                  value={formData.subcategory}
                  onChange={(e) =>
                    setFormData({ ...formData, subcategory: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="level">Level</Label>
                <Select
                  value={formData.level}
                  onValueChange={(value) =>
                    setFormData({ ...formData, level: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    {levels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Input
                  id="duration"
                  value={formData.duration}
                  onChange={(e) =>
                    setFormData({ ...formData, duration: e.target.value })
                  }
                  placeholder="e.g., 40 Hours"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Price (₹)</Label>
                <Input
                  id="price"
                  type="number"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  placeholder="Leave empty for free"
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
            <div className="flex gap-6">
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
                {editingCourse ? "Update" : "Create"} Course
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminCourses;
