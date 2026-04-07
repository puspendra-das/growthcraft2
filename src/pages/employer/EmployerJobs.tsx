import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Clock, Users, MapPin } from "lucide-react";

const jobs = [
  { title: "Junior React Developer", type: "Full-Time", location: "Remote", salary: "₹4-6 LPA", applications: 18, status: "Active", posted: "Mar 28, 2026" },
  { title: "Data Analyst Intern", type: "Internship", location: "Bangalore", salary: "₹15K/mo", applications: 12, status: "Active", posted: "Apr 1, 2026" },
  { title: "Full Stack Developer", type: "Full-Time", location: "Hybrid", salary: "₹6-10 LPA", applications: 8, status: "Active", posted: "Apr 5, 2026" },
  { title: "UI/UX Designer", type: "Contract", location: "Remote", salary: "₹3-5 LPA", applications: 22, status: "Closed", posted: "Feb 15, 2026" },
  { title: "Backend Developer", type: "Full-Time", location: "Delhi", salary: "₹5-8 LPA", applications: 15, status: "Closed", posted: "Feb 20, 2026" },
];

const EmployerJobs = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Job Postings</h1>
        <p className="text-muted-foreground mt-1 text-sm">Manage your job listings</p>
      </div>
      <Button><Plus className="h-4 w-4 mr-2" /> Post New Job</Button>
    </div>

    <div className="grid gap-4">
      {jobs.map((job, i) => (
        <Card key={i} className="border-border/50 hover:shadow-md transition-shadow">
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
                <Button variant="outline" size="sm">View Applications</Button>
                <Button variant="ghost" size="sm">Edit</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default EmployerJobs;
