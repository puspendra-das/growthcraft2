import { Users, Briefcase, FileText, TrendingUp, Clock, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { label: "Candidates Viewed", value: "156", icon: Users, color: "text-primary" },
  { label: "Active Job Posts", value: "3", icon: Briefcase, color: "text-accent" },
  { label: "Applications", value: "42", icon: FileText, color: "text-green-500" },
  { label: "Hires Made", value: "5", icon: Target, color: "text-yellow-500" },
];

const activeJobs = [
  { title: "Junior React Developer", applications: 18, posted: "Mar 28, 2026", status: "Active" },
  { title: "Data Analyst Intern", applications: 12, posted: "Apr 1, 2026", status: "Active" },
  { title: "Full Stack Developer", applications: 8, posted: "Apr 5, 2026", status: "Active" },
];

const recentCandidates = [
  { name: "Rahul S.", skill: "React, Node.js", score: "92%", course: "Full Stack Dev" },
  { name: "Priya D.", skill: "Python, ML", score: "88%", course: "Data Science" },
  { name: "Amit K.", skill: "React, TypeScript", score: "85%", course: "React Masterclass" },
  { name: "Sneha G.", skill: "UI/UX, Figma", score: "90%", course: "Design Sprint" },
];

const EmployerDashboard = () => (
  <div className="space-y-6 md:space-y-8">
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-foreground">Welcome, Acme Technologies! 🏢</h1>
      <p className="text-muted-foreground mt-1 text-sm md:text-base">Your hiring dashboard</p>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="border-border/50">
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-muted"><stat.icon className={`h-5 w-5 ${stat.color}`} /></div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-foreground">Active Job Postings</h2>
        <Button variant="ghost" size="sm" className="text-primary" asChild><Link to="/employer/jobs">View All</Link></Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {activeJobs.map((job, i) => (
          <Card key={i} className="border-border/50 hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <Badge variant="default" className="text-xs mb-3">{job.status}</Badge>
              <h3 className="font-semibold text-foreground mb-2">{job.title}</h3>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{job.applications} applications</span>
                <span>Posted {job.posted}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>

    <Card className="border-border/50">
      <CardHeader><CardTitle className="text-lg flex items-center gap-2"><TrendingUp className="h-5 w-5 text-primary" /> Top Candidates</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        {recentCandidates.map((c, i) => (
          <div key={i} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                {c.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <p className="font-medium text-sm text-foreground">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.skill}</p>
              </div>
            </div>
            <div className="text-right">
              <Badge variant="outline" className="text-xs">{c.course}</Badge>
              <p className="text-xs text-green-600 font-medium mt-1">Score: {c.score}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  </div>
);

export default EmployerDashboard;
