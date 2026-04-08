import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Search, MessageSquare, Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface Student {
  id: number;
  name: string;
  email: string;
  course: string;
  progress: number;
  status: string;
  joinDate: string;
  phone: string;
  lastActive: string;
  strengths: string;
  improvements: string;
}

const studentsData: Student[] = [
  { id: 1, name: "Rahul Sharma", email: "rahul@email.com", course: "Full Stack Dev", progress: 72, status: "Active", joinDate: "Feb 2026", phone: "+91 98765 43210", lastActive: "2 hours ago", strengths: "Strong in React, good problem-solving", improvements: "Needs to work on backend and databases" },
  { id: 2, name: "Priya Devi", email: "priya@email.com", course: "Full Stack Dev", progress: 88, status: "Active", joinDate: "Feb 2026", phone: "+91 98765 43211", lastActive: "1 day ago", strengths: "Excellent coder, fast learner", improvements: "Should participate more in group sessions" },
  { id: 3, name: "Amit Kumar", email: "amit@email.com", course: "React Masterclass", progress: 45, status: "Active", joinDate: "Mar 2026", phone: "+91 98765 43212", lastActive: "3 hours ago", strengths: "Creative UI designs, good CSS skills", improvements: "Needs to improve TypeScript knowledge" },
  { id: 4, name: "Sneha Gupta", email: "sneha@email.com", course: "React Masterclass", progress: 60, status: "Active", joinDate: "Mar 2026", phone: "+91 98765 43213", lastActive: "Today", strengths: "Consistent attendance, good notes", improvements: "Practice more coding problems" },
  { id: 5, name: "Ravi Patel", email: "ravi@email.com", course: "Full Stack Dev", progress: 100, status: "Completed", joinDate: "Jan 2026", phone: "+91 98765 43214", lastActive: "1 week ago", strengths: "Excellent all-round, good communicator", improvements: "Ready for placement" },
  { id: 6, name: "Meera Singh", email: "meera@email.com", course: "React Masterclass", progress: 95, status: "Active", joinDate: "Feb 2026", phone: "+91 98765 43215", lastActive: "5 hours ago", strengths: "Quick learner, strong in state management", improvements: "Work on testing practices" },
];

const MentorStudents = () => {
  const [search, setSearch] = useState("");
  const [viewStudent, setViewStudent] = useState<Student | null>(null);
  const [messageStudent, setMessageStudent] = useState<Student | null>(null);
  const { toast } = useToast();

  const filtered = studentsData.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.course.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">My Students</h1>
        <p className="text-muted-foreground mt-1 text-sm">Students assigned to you for mentorship</p>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search students..." className="pl-10" value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      <div className="grid gap-3">
        {filtered.map((student) => (
          <Card key={student.id} className="border-border/50">
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
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setViewStudent(student)}>
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setMessageStudent(student)}>
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Student Detail Dialog */}
      <Dialog open={!!viewStudent} onOpenChange={() => setViewStudent(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader><DialogTitle>Student Profile</DialogTitle></DialogHeader>
          {viewStudent && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  {viewStudent.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{viewStudent.name}</p>
                  <p className="text-sm text-muted-foreground">{viewStudent.email} · {viewStudent.phone}</p>
                </div>
                <Badge variant={viewStudent.status === "Completed" ? "default" : "outline"} className="ml-auto">{viewStudent.status}</Badge>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div><span className="text-muted-foreground">Course:</span><br/><span className="font-medium text-foreground">{viewStudent.course}</span></div>
                <div><span className="text-muted-foreground">Progress:</span><br/><span className="font-bold text-foreground">{viewStudent.progress}%</span></div>
                <div><span className="text-muted-foreground">Joined:</span><br/><span className="font-medium text-foreground">{viewStudent.joinDate}</span></div>
                <div><span className="text-muted-foreground">Last Active:</span><br/><span className="font-medium text-foreground">{viewStudent.lastActive}</span></div>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground mb-1">Strengths</p>
                <p className="text-sm text-muted-foreground">{viewStudent.strengths}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground mb-1">Areas for Improvement</p>
                <p className="text-sm text-muted-foreground">{viewStudent.improvements}</p>
              </div>
              <Progress value={viewStudent.progress} className="h-3" />
              <Button className="w-full" onClick={() => { setViewStudent(null); setMessageStudent(viewStudent); }}>
                <MessageSquare className="h-4 w-4 mr-2" /> Send Message
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Message Dialog */}
      <Dialog open={!!messageStudent} onOpenChange={() => setMessageStudent(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>Message {messageStudent?.name}</DialogTitle></DialogHeader>
          <form onSubmit={(e) => { e.preventDefault(); toast({ title: "Message sent!", description: `Your message has been sent to ${messageStudent?.name}.` }); setMessageStudent(null); }} className="space-y-4">
            <div className="space-y-2">
              <Label>Subject</Label>
              <Input placeholder="e.g. Progress review, Assignment feedback" />
            </div>
            <div className="space-y-2">
              <Label>Message</Label>
              <Textarea placeholder="Write your message..." rows={4} />
            </div>
            <div className="flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={() => setMessageStudent(null)}>Cancel</Button>
              <Button type="submit">Send Message</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MentorStudents;
