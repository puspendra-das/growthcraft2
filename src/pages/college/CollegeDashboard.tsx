import { Building2, Users, BookOpen, Calendar, TrendingUp, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { label: "Students Trained", value: "245", icon: Users, color: "text-primary" },
  { label: "Active Programs", value: "4", icon: BookOpen, color: "text-accent" },
  { label: "Placement Rate", value: "87%", icon: TrendingUp, color: "text-green-500" },
  { label: "Certifications", value: "189", icon: Award, color: "text-yellow-500" },
];

const activePrograms = [
  { title: "Full Stack Development Bootcamp", students: 45, status: "In Progress", startDate: "Mar 15, 2026", endDate: "Jun 15, 2026" },
  { title: "Data Science Workshop", students: 30, status: "Upcoming", startDate: "Apr 20, 2026", endDate: "May 20, 2026" },
  { title: "Career Readiness Program", students: 120, status: "Completed", startDate: "Jan 10, 2026", endDate: "Mar 10, 2026" },
];

const recentPlacements = [
  { name: "Rahul Sharma", course: "Full Stack Dev", company: "TCS", role: "Junior Developer" },
  { name: "Priya Devi", course: "Data Science", company: "Infosys", role: "Data Analyst" },
  { name: "Amit Kumar", course: "React Bootcamp", company: "Wipro", role: "Frontend Dev" },
];

const CollegeDashboard = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Welcome, ABC Engineering College! 🏫</h1>
        <p className="text-muted-foreground mt-1 text-sm md:text-base">Your campus partnership dashboard</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-border/50">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-muted">
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
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
          <h2 className="text-lg md:text-xl font-bold text-foreground">Active Programs</h2>
          <Button variant="ghost" size="sm" className="text-primary" asChild>
            <Link to="/college/programs">View All</Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {activePrograms.map((program) => (
            <Card key={program.title} className="border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant={program.status === "In Progress" ? "default" : program.status === "Upcoming" ? "secondary" : "outline"} className="text-xs">
                    {program.status}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{program.students} students</span>
                </div>
                <h3 className="font-semibold text-foreground mb-3 text-sm">{program.title}</h3>
                <p className="text-xs text-muted-foreground">{program.startDate} → {program.endDate}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" /> Recent Placements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentPlacements.map((p, i) => (
              <div key={i} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                <div>
                  <p className="font-medium text-sm text-foreground">{p.name}</p>
                  <p className="text-xs text-muted-foreground">{p.course}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">{p.company}</p>
                  <p className="text-xs text-muted-foreground">{p.role}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" /> Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { title: "Campus Hackathon", date: "Apr 15, 2026", type: "Event" },
              { title: "Industry Connect Webinar", date: "Apr 22, 2026", type: "Webinar" },
              { title: "Placement Drive", date: "May 5, 2026", type: "Placement" },
            ].map((event, i) => (
              <div key={i} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                <div>
                  <p className="font-medium text-sm text-foreground">{event.title}</p>
                  <p className="text-xs text-muted-foreground">{event.date}</p>
                </div>
                <Badge variant="outline" className="text-xs">{event.type}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CollegeDashboard;
