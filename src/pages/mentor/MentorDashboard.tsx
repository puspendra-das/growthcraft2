import { Users, BookOpen, Calendar, Star, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

const stats = [
  { label: "Active Students", value: "18", icon: Users, color: "text-primary" },
  { label: "Courses Assigned", value: "3", icon: BookOpen, color: "text-accent" },
  { label: "Sessions This Week", value: "5", icon: Calendar, color: "text-green-500" },
  { label: "Avg Rating", value: "4.8", icon: Star, color: "text-yellow-500" },
];

const assignedStudents = [
  { name: "Rahul S.", course: "Full Stack Dev", progress: 72, lastActive: "2 hours ago" },
  { name: "Priya D.", course: "Full Stack Dev", progress: 88, lastActive: "1 day ago" },
  { name: "Amit K.", course: "React Masterclass", progress: 45, lastActive: "3 hours ago" },
  { name: "Sneha G.", course: "React Masterclass", progress: 60, lastActive: "Today" },
];

const upcomingSessions = [
  { title: "1:1 with Rahul S.", time: "Today, 3:00 PM", type: "Mentoring" },
  { title: "Group Code Review", time: "Tomorrow, 10:00 AM", type: "Review" },
  { title: "React Workshop Session 5", time: "Apr 12, 2:00 PM", type: "Workshop" },
];

const MentorDashboard = () => (
  <div className="space-y-6 md:space-y-8">
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-foreground">Welcome back, Mentor! 🧑‍🏫</h1>
      <p className="text-muted-foreground mt-1 text-sm md:text-base">Your mentoring overview</p>
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
        <h2 className="text-lg font-bold text-foreground">My Students</h2>
        <Button variant="ghost" size="sm" className="text-primary" asChild><Link to="/mentor/students">View All</Link></Button>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {assignedStudents.map((s, i) => (
          <Card key={i} className="border-border/50">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                {s.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground text-sm">{s.name}</p>
                <p className="text-xs text-muted-foreground">{s.course}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Progress value={s.progress} className="h-1.5 flex-1" />
                  <span className="text-xs text-muted-foreground">{s.progress}%</span>
                </div>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">{s.lastActive}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>

    <Card className="border-border/50">
      <CardHeader><CardTitle className="text-lg flex items-center gap-2"><Calendar className="h-5 w-5 text-primary" /> Upcoming Sessions</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        {upcomingSessions.map((session, i) => (
          <div key={i} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
            <div>
              <p className="font-medium text-sm text-foreground">{session.title}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" /> {session.time}</p>
            </div>
            <Badge variant="outline" className="text-xs">{session.type}</Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  </div>
);

export default MentorDashboard;
