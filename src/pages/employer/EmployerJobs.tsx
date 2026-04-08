import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Clock, Users, MapPin, Eye, Pencil } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface Job {
  id: number;
  title: string;
  type: string;
  location: string;
  salary: string;
  applications: number;
  status: string;
  posted: string;
  description: string;
  skills: string;
  experience: string;
}

const initialJobs: Job[] = [
  { id: 1, title: "Junior React Developer", type: "Full-Time", location: "Remote", salary: "₹4-6 LPA", applications: 18, status: "Active", posted: "Mar 28, 2026", description: "Looking for a junior React developer with knowledge of TypeScript and REST APIs.", skills: "React, TypeScript, Node.js", experience: "0-2 years" },
  { id: 2, title: "Data Analyst Intern", type: "Internship", location: "Bangalore", salary: "₹15K/mo", applications: 12, status: "Active", posted: "Apr 1, 2026", description: "Internship opportunity for data analysis using Python and SQL.", skills: "Python, SQL, Excel", experience: "Fresher" },
  { id: 3, title: "Full Stack Developer", type: "Full-Time", location: "Hybrid", salary: "₹6-10 LPA", applications: 8, status: "Active", posted: "Apr 5, 2026", description: "Full stack developer with React + Node.js experience.", skills: "React, Node.js, PostgreSQL, AWS", experience: "1-3 years" },
  { id: 4, title: "UI/UX Designer", type: "Contract", location: "Remote", salary: "₹3-5 LPA", applications: 22, status: "Closed", posted: "Feb 15, 2026", description: "Looking for a talented UI/UX designer for product redesign.", skills: "Figma, Adobe XD, User Research", experience: "1-2 years" },
  { id: 5, title: "Backend Developer", type: "Full-Time", location: "Delhi", salary: "₹5-8 LPA", applications: 15, status: "Closed", posted: "Feb 20, 2026", description: "Backend developer with Java and Spring Boot expertise.", skills: "Java, Spring Boot, MySQL", experience: "2-4 years" },
];

const EmployerJobs = () => {
  const [jobs, setJobs] = useState(initialJobs);
  const [postOpen, setPostOpen] = useState(false);
  
  const [editJob, setEditJob] = useState<Job | null>(null);
  const { toast } = useToast();

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const newJob: Job = {
      id: jobs.length + 1,
      title: formData.get("title") as string || "New Position",
      type: formData.get("type") as string || "Full-Time",
      location: formData.get("location") as string || "Remote",
      salary: formData.get("salary") as string || "Negotiable",
      applications: 0,
      status: "Active",
      posted: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      description: formData.get("description") as string || "",
      skills: formData.get("skills") as string || "",
      experience: formData.get("experience") as string || "Fresher",
    };
    setJobs(prev => [newJob, ...prev]);
    toast({ title: "Job posted!", description: "Your job listing is now live." });
    setPostOpen(false);
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Job updated!", description: "Your job listing has been updated." });
    setEditJob(null);
  };

  const JobFormFields = ({ defaults }: { defaults?: Job }) => (
    <>
      <div className="space-y-2">
        <Label>Job Title</Label>
        <Input name="title" defaultValue={defaults?.title} placeholder="e.g. Junior React Developer" required />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Employment Type</Label>
          <Select name="type" defaultValue={defaults?.type || "Full-Time"}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Full-Time">Full-Time</SelectItem>
              <SelectItem value="Part-Time">Part-Time</SelectItem>
              <SelectItem value="Internship">Internship</SelectItem>
              <SelectItem value="Contract">Contract</SelectItem>
              <SelectItem value="Freelance">Freelance</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Location</Label>
          <Input name="location" defaultValue={defaults?.location} placeholder="e.g. Remote, Bangalore" required />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Salary / Stipend</Label>
          <Input name="salary" defaultValue={defaults?.salary} placeholder="e.g. ₹4-6 LPA" />
        </div>
        <div className="space-y-2">
          <Label>Experience Required</Label>
          <Select name="experience" defaultValue={defaults?.experience || "Fresher"}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Fresher">Fresher</SelectItem>
              <SelectItem value="0-1 years">0-1 years</SelectItem>
              <SelectItem value="0-2 years">0-2 years</SelectItem>
              <SelectItem value="1-3 years">1-3 years</SelectItem>
              <SelectItem value="2-4 years">2-4 years</SelectItem>
              <SelectItem value="3-5 years">3-5 years</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label>Required Skills</Label>
        <Input name="skills" defaultValue={defaults?.skills} placeholder="e.g. React, Node.js, PostgreSQL" />
      </div>
      <div className="space-y-2">
        <Label>Job Description</Label>
        <Textarea name="description" defaultValue={defaults?.description} placeholder="Describe the role, responsibilities, and requirements..." rows={4} required />
      </div>
    </>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Job Postings</h1>
          <p className="text-muted-foreground mt-1 text-sm">Manage your job listings</p>
        </div>
        <Button onClick={() => setPostOpen(true)}><Plus className="h-4 w-4 mr-2" /> Post New Job</Button>
      </div>

      <div className="grid gap-4">
        {jobs.map((job) => (
          <Card key={job.id} className="border-border/50 hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={job.status === "Active" ? "default" : "secondary"} className="text-xs">{job.status}</Badge>
                    <Badge variant="outline" className="text-xs">{job.type}</Badge>
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{job.title}</h3>
                  <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground flex-wrap">
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {job.location}</span>
                    <span>{job.salary}</span>
                    <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {job.applications} applications</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> Posted {job.posted}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/employer/applications">
                      <Eye className="h-3.5 w-3.5 mr-1" /> Applications
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => setEditJob(job)}>
                    <Pencil className="h-3.5 w-3.5 mr-1" /> Edit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Post New Job Dialog */}
      <Dialog open={postOpen} onOpenChange={setPostOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle>Post New Job</DialogTitle></DialogHeader>
          <form onSubmit={handlePostSubmit} className="space-y-4">
            <JobFormFields />
            <div className="flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={() => setPostOpen(false)}>Cancel</Button>
              <Button type="submit">Post Job</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Edit Job Dialog */}
      <Dialog open={!!editJob} onOpenChange={() => setEditJob(null)}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle>Edit Job: {editJob?.title}</DialogTitle></DialogHeader>
          <form onSubmit={handleEditSubmit} className="space-y-4">
            {editJob && <JobFormFields defaults={editJob} />}
            <div className="flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={() => setEditJob(null)}>Cancel</Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EmployerJobs;
