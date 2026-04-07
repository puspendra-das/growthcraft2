import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Search, MessageSquare } from "lucide-react";

const students = [
  { name: "Rahul Sharma", email: "rahul@email.com", course: "Full Stack Dev", progress: 72, status: "Active", joinDate: "Feb 2026" },
  { name: "Priya Devi", email: "priya@email.com", course: "Full Stack Dev", progress: 88, status: "Active", joinDate: "Feb 2026" },
  { name: "Amit Kumar", email: "amit@email.com", course: "React Masterclass", progress: 45, status: "Active", joinDate: "Mar 2026" },
  { name: "Sneha Gupta", email: "sneha@email.com", course: "React Masterclass", progress: 60, status: "Active", joinDate: "Mar 2026" },
  { name: "Ravi Patel", email: "ravi@email.com", course: "Full Stack Dev", progress: 100, status: "Completed", joinDate: "Jan 2026" },
  { name: "Meera Singh", email: "meera@email.com", course: "React Masterclass", progress: 95, status: "Active", joinDate: "Feb 2026" },
];

const MentorStudents = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-foreground">My Students</h1>
      <p className="text-muted-foreground mt-1 text-sm">Students assigned to you for mentorship</p>
    </div>

    <div className="relative max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Search students..." className="pl-10" />
    </div>

    <div className="grid gap-3">
      {students.map((student, i) => (
        <Card key={i} className="border-border/50">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                  {student.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-medium text-foreground">{student.name}</p>
                  <p className="text-xs text-muted-foreground">{student.email} · Joined {student.joinDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 ml-13 sm:ml-0">
                <Badge variant="outline" className="text-xs">{student.course}</Badge>
                <Progress value={student.progress} className="h-2 w-20" />
                <span className="text-xs text-muted-foreground w-8">{student.progress}%</span>
                <Button variant="ghost" size="icon" className="h-8 w-8"><MessageSquare className="h-4 w-4" /></Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default MentorStudents;
