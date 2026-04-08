import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Eye, CheckCircle, XCircle, Download } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface Application {
  id: number;
  name: string;
  email: string;
  role: string;
  applied: string;
  status: string;
  score: number;
  skills: string[];
  course: string;
  experience: string;
  resumeLink: string;
  coverNote: string;
}

const initialApplications: Application[] = [
  { id: 1, name: "Rahul Sharma", email: "rahul@email.com", role: "Junior React Developer", applied: "Apr 8, 2026", status: "Under Review", score: 92, skills: ["React", "Node.js", "MongoDB"], course: "Full Stack Dev", experience: "6 months project experience", resumeLink: "#", coverNote: "Passionate about building user interfaces with React. Completed several projects during the GrowthCraft bootcamp." },
  { id: 2, name: "Priya Devi", email: "priya@email.com", role: "Data Analyst Intern", applied: "Apr 7, 2026", status: "Shortlisted", score: 88, skills: ["Python", "Pandas", "SQL"], course: "Data Science", experience: "Academic projects + internship", resumeLink: "#", coverNote: "Strong analytical background with hands-on experience in Python data analysis." },
  { id: 3, name: "Amit Kumar", email: "amit@email.com", role: "Full Stack Developer", applied: "Apr 6, 2026", status: "Interview Scheduled", score: 85, skills: ["React", "TypeScript", "Next.js"], course: "React Masterclass", experience: "1 year freelance", resumeLink: "#", coverNote: "Experienced freelancer transitioning to full-time. Built 5+ production apps." },
  { id: 4, name: "Sneha Gupta", email: "sneha@email.com", role: "Junior React Developer", applied: "Apr 5, 2026", status: "Under Review", score: 78, skills: ["React", "CSS", "JavaScript"], course: "Full Stack Dev", experience: "Fresher", resumeLink: "#", coverNote: "Recent graduate eager to start career in frontend development." },
  { id: 5, name: "Ravi Patel", email: "ravi@email.com", role: "Full Stack Developer", applied: "Apr 4, 2026", status: "Rejected", score: 65, skills: ["Java", "Spring"], course: "Backend Dev", experience: "Fresher", resumeLink: "#", coverNote: "Looking for backend development opportunities." },
  { id: 6, name: "Meera Singh", email: "meera@email.com", role: "Junior React Developer", applied: "Apr 3, 2026", status: "Hired", score: 94, skills: ["React", "Node.js", "PostgreSQL"], course: "Full Stack Dev", experience: "1 year at startup", resumeLink: "#", coverNote: "Full stack developer with startup experience. Strong in React ecosystem." },
];

const EmployerApplications = () => {
  const [applications, setApplications] = useState(initialApplications);
  const [search, setSearch] = useState("");
  const [viewApp, setViewApp] = useState<Application | null>(null);
  const [statusFilter, setStatusFilter] = useState("all");
  const { toast } = useToast();

  const filtered = applications.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(search.toLowerCase()) || app.role.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const updateStatus = (id: number, newStatus: string) => {
    setApplications(prev => prev.map(a => a.id === id ? { ...a, status: newStatus } : a));
    toast({ title: `Application ${newStatus.toLowerCase()}`, description: `Candidate status updated to ${newStatus}.` });
    setViewApp(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Applications</h1>
        <p className="text-muted-foreground mt-1 text-sm">Review candidate applications</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search applications..." className="pl-10" value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-48"><SelectValue placeholder="Filter by status" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="Under Review">Under Review</SelectItem>
            <SelectItem value="Shortlisted">Shortlisted</SelectItem>
            <SelectItem value="Interview Scheduled">Interview Scheduled</SelectItem>
            <SelectItem value="Hired">Hired</SelectItem>
            <SelectItem value="Rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-3">
        {filtered.map((app) => (
          <Card key={app.id} className="border-border/50">
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    {app.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{app.name}</p>
                    <p className="text-xs text-muted-foreground">Applied for: {app.role} · {app.applied}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-sm font-bold text-green-600">{app.score}%</p>
                  <Badge variant={
                    app.status === "Hired" ? "default" :
                    app.status === "Rejected" ? "destructive" :
                    app.status === "Shortlisted" ? "secondary" : "outline"
                  } className="text-xs">{app.status}</Badge>
                  <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setViewApp(app)}>
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-8">No applications found.</p>
        )}
      </div>

      {/* Application Detail Dialog */}
      <Dialog open={!!viewApp} onOpenChange={() => setViewApp(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader><DialogTitle>Application: {viewApp?.name}</DialogTitle></DialogHeader>
          {viewApp && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  {viewApp.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{viewApp.name}</p>
                  <p className="text-sm text-muted-foreground">{viewApp.email}</p>
                </div>
                <Badge variant={viewApp.status === "Hired" ? "default" : viewApp.status === "Rejected" ? "destructive" : "outline"} className="ml-auto">{viewApp.status}</Badge>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div><span className="text-muted-foreground">Applied for:</span><br/><span className="font-medium text-foreground">{viewApp.role}</span></div>
                <div><span className="text-muted-foreground">Score:</span><br/><span className="font-bold text-green-600 text-lg">{viewApp.score}%</span></div>
                <div><span className="text-muted-foreground">Course:</span><br/><span className="font-medium text-foreground">{viewApp.course}</span></div>
                <div><span className="text-muted-foreground">Experience:</span><br/><span className="font-medium text-foreground">{viewApp.experience}</span></div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">Skills</p>
                <div className="flex gap-1 flex-wrap">
                  {viewApp.skills.map(s => <Badge key={s} variant="outline" className="text-xs">{s}</Badge>)}
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">Cover Note</p>
                <p className="text-sm text-foreground">{viewApp.coverNote}</p>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => toast({ title: "Resume downloaded" })}>
                  <Download className="h-3.5 w-3.5 mr-1" /> Resume
                </Button>
              </div>

              {viewApp.status !== "Hired" && viewApp.status !== "Rejected" && (
                <div className="flex gap-2 pt-2 border-t border-border">
                  <Button size="sm" onClick={() => updateStatus(viewApp.id, "Shortlisted")} variant="outline" disabled={viewApp.status === "Shortlisted"}>Shortlist</Button>
                  <Button size="sm" onClick={() => updateStatus(viewApp.id, "Interview Scheduled")} disabled={viewApp.status === "Interview Scheduled"}>Schedule Interview</Button>
                  <Button size="sm" onClick={() => updateStatus(viewApp.id, "Hired")} variant="default">Hire</Button>
                  <Button size="sm" onClick={() => updateStatus(viewApp.id, "Rejected")} variant="destructive">Reject</Button>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EmployerApplications;
