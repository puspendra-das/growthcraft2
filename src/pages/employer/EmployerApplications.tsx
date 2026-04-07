import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Eye, CheckCircle, XCircle } from "lucide-react";

const applications = [
  { name: "Rahul Sharma", role: "Junior React Developer", applied: "Apr 8, 2026", status: "Under Review", score: 92 },
  { name: "Priya Devi", role: "Data Analyst Intern", applied: "Apr 7, 2026", status: "Shortlisted", score: 88 },
  { name: "Amit Kumar", role: "Full Stack Developer", applied: "Apr 6, 2026", status: "Interview Scheduled", score: 85 },
  { name: "Sneha Gupta", role: "Junior React Developer", applied: "Apr 5, 2026", status: "Under Review", score: 78 },
  { name: "Ravi Patel", role: "Full Stack Developer", applied: "Apr 4, 2026", status: "Rejected", score: 65 },
  { name: "Meera Singh", role: "Junior React Developer", applied: "Apr 3, 2026", status: "Hired", score: 94 },
];

const EmployerApplications = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-foreground">Applications</h1>
      <p className="text-muted-foreground mt-1 text-sm">Review candidate applications</p>
    </div>

    <div className="relative max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Search applications..." className="pl-10" />
    </div>

    <div className="grid gap-3">
      {applications.map((app, i) => (
        <Card key={i} className="border-border/50">
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
                <Button variant="outline" size="icon" className="h-8 w-8"><Eye className="h-4 w-4" /></Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default EmployerApplications;
