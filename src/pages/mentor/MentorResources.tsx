import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink } from "lucide-react";

const resources = [
  { title: "Mentor Handbook 2026", type: "PDF", size: "2.4 MB" },
  { title: "Student Evaluation Template", type: "DOCX", size: "450 KB" },
  { title: "Course Curriculum Guide", type: "PDF", size: "1.8 MB" },
  { title: "Session Planning Template", type: "XLSX", size: "320 KB" },
  { title: "Code Review Checklist", type: "PDF", size: "180 KB" },
];

const links = [
  { title: "GrowthCraft LMS", url: "#", description: "Access the learning management system" },
  { title: "Mentor Community Forum", url: "#", description: "Connect with other mentors" },
  { title: "Teaching Best Practices", url: "#", description: "Resources on effective mentoring" },
];

const MentorResources = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-foreground">Resources</h1>
      <p className="text-muted-foreground mt-1 text-sm">Teaching materials and useful links</p>
    </div>

    <div>
      <h2 className="text-lg font-bold text-foreground mb-4">Documents</h2>
      <div className="grid gap-3">
        {resources.map((res, i) => (
          <Card key={i} className="border-border/50">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium text-sm text-foreground">{res.title}</p>
                  <p className="text-xs text-muted-foreground">{res.type} · {res.size}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm"><Download className="h-4 w-4" /></Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>

    <div>
      <h2 className="text-lg font-bold text-foreground mb-4">Useful Links</h2>
      <div className="grid gap-3 md:grid-cols-3">
        {links.map((link, i) => (
          <Card key={i} className="border-border/50 hover:border-primary/40 transition-colors cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <ExternalLink className="h-4 w-4 text-primary" />
                <p className="font-medium text-sm text-foreground">{link.title}</p>
              </div>
              <p className="text-xs text-muted-foreground">{link.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

export default MentorResources;
