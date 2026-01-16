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

interface ContentPage {
  id: string;
  slug: string;
  title: string;
  content: any;
  meta_title: string | null;
  meta_description: string | null;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

const AdminContent = () => {
  const [pages, setPages] = useState<ContentPage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPage, setEditingPage] = useState<ContentPage | null>(null);
  const [formData, setFormData] = useState({
    slug: "",
    title: "",
    content: "",
    meta_title: "",
    meta_description: "",
    is_published: false,
  });
  const { toast } = useToast();

  const fetchPages = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("content_pages")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPages(data || []);
    } catch (error) {
      console.error("Error fetching pages:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

  const handleAdd = () => {
    setEditingPage(null);
    setFormData({
      slug: "",
      title: "",
      content: "",
      meta_title: "",
      meta_description: "",
      is_published: false,
    });
    setIsDialogOpen(true);
  };

  const handleEdit = (page: ContentPage) => {
    setEditingPage(page);
    setFormData({
      slug: page.slug,
      title: page.title,
      content:
        typeof page.content === "object"
          ? JSON.stringify(page.content, null, 2)
          : page.content || "",
      meta_title: page.meta_title || "",
      meta_description: page.meta_description || "",
      is_published: page.is_published,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (page: ContentPage) => {
    if (!confirm("Are you sure you want to delete this page?")) return;

    try {
      const { error } = await supabase
        .from("content_pages")
        .delete()
        .eq("id", page.id);

      if (error) throw error;

      toast({ title: "Page deleted successfully" });
      fetchPages();
    } catch (error: any) {
      toast({
        title: "Error deleting page",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let contentJson = null;
      if (formData.content) {
        try {
          contentJson = JSON.parse(formData.content);
        } catch {
          contentJson = { text: formData.content };
        }
      }

      const pageData = {
        slug: formData.slug,
        title: formData.title,
        content: contentJson,
        meta_title: formData.meta_title || null,
        meta_description: formData.meta_description || null,
        is_published: formData.is_published,
      };

      if (editingPage) {
        const { error } = await supabase
          .from("content_pages")
          .update(pageData)
          .eq("id", editingPage.id);

        if (error) throw error;
        toast({ title: "Page updated successfully" });
      } else {
        const { error } = await supabase.from("content_pages").insert(pageData);

        if (error) throw error;
        toast({ title: "Page created successfully" });
      }

      setIsDialogOpen(false);
      fetchPages();
    } catch (error: any) {
      toast({
        title: "Error saving page",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const columns = [
    { key: "title", label: "Title" },
    {
      key: "slug",
      label: "Slug",
      render: (value: string) => (
        <code className="text-xs bg-muted px-2 py-1 rounded">/{value}</code>
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
    {
      key: "updated_at",
      label: "Last Updated",
      render: (value: string) => new Date(value).toLocaleDateString(),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Content Pages</h1>
        <p className="text-muted-foreground mt-1">Manage website content</p>
      </div>

      <DataTable
        columns={columns}
        data={pages}
        searchPlaceholder="Search pages..."
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        addButtonLabel="Add Page"
        isLoading={isLoading}
      />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingPage ? "Edit Page" : "Add New Page"}
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
                <Label htmlFor="slug">Slug *</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      slug: e.target.value.toLowerCase().replace(/\s+/g, "-"),
                    })
                  }
                  placeholder="page-url-slug"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="meta_title">Meta Title</Label>
                <Input
                  id="meta_title"
                  value={formData.meta_title}
                  onChange={(e) =>
                    setFormData({ ...formData, meta_title: e.target.value })
                  }
                  maxLength={60}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="meta_description">Meta Description</Label>
                <Input
                  id="meta_description"
                  value={formData.meta_description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      meta_description: e.target.value,
                    })
                  }
                  maxLength={160}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Content (JSON or plain text)</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                rows={10}
                placeholder='{"heading": "Welcome", "body": "Page content..."}'
                className="font-mono text-sm"
              />
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
            <div className="flex justify-end gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">
                {editingPage ? "Update" : "Create"} Page
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminContent;
