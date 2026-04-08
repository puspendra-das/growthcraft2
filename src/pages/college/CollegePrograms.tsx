import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users, Eye } from "lucide-react";
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

interface Program {
  id: number;
  title: string;
  duration: string;
  students: number;
  status: string;
  category: string;
  description: string;
  startDate: string;
  endDate: string;
  instructor: string;
  format: string;
}

const initialPrograms: Program[] = [
  { id: 1, title: "Full Stack Development Bootcamp", duration: "12 weeks", students: 45, status: "In Progress", category: "Web Dev", description: "Comprehensive bootcamp covering React, Node.js, databases and deployment.", startDate: "Mar 15, 2026", endDate: "Jun 15, 2026", instructor: "Vikram M.", format: "Hybrid" },
  { id: 2, title: "Data Science Workshop", duration: "4 weeks", students: 30, status: "Upcoming", category: "Data Science", description: "Hands-on workshop on Python, Pandas, ML basics and data visualization.", startDate: "Apr 20, 2026", endDate: "May 20, 2026", instructor: "Dr. Priya K.", format: "On-Campus" },
  { id: 3, title: "Career Readiness Program", duration: "8 weeks", students: 120, status: "Completed", category: "Career", description: "Interview prep, resume building, aptitude training and soft skills.", startDate: "Jan 10, 2026", endDate: "Mar 10, 2026", instructor: "Anita S.", format: "On-Campus" },
  { id: 4, title: "UI/UX Design Sprint", duration: "3 weeks", students: 25, status: "Upcoming", category: "Design", description: "Learn Figma, design thinking, prototyping and user research methods.", startDate: "May 5, 2026", endDate: "May 25, 2026", instructor: "TBD", format: "Online" },
  { id: 5, title: "Cloud Computing Fundamentals", duration: "6 weeks", students: 0, status: "Planning", category: "DevOps", description: "AWS/GCP basics, containerization, CI/CD pipelines.", startDate: "TBD", endDate: "TBD", instructor: "TBD", format: "Hybrid" },
];

const CollegePrograms = () => {
  const [programs] = useState(initialPrograms);
  const [requestOpen, setRequestOpen] = useState(false);
  const [detailProgram, setDetailProgram] = useState<Program | null>(null);
  const { toast } = useToast();

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Program request submitted!", description: "Our team will review and get back to you within 48 hours." });
    setRequestOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Programs</h1>
          <p className="text-muted-foreground mt-1 text-sm">Training programs running at your campus</p>
        </div>
        <Button onClick={() => setRequestOpen(true)}><BookOpen className="h-4 w-4 mr-2" /> Request New Program</Button>
      </div>

      <div className="grid gap-4">
        {programs.map((program) => (
          <Card key={program.id} className="border-border/50 hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={
                      program.status === "In Progress" ? "default" :
                      program.status === "Upcoming" ? "secondary" :
                      program.status === "Completed" ? "outline" : "secondary"
                    } className="text-xs">{program.status}</Badge>
                    <Badge variant="outline" className="text-xs">{program.category}</Badge>
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{program.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{program.description}</p>
                  <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {program.duration}</span>
                    <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {program.students} students</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={() => setDetailProgram(program)}>
                  <Eye className="h-3.5 w-3.5 mr-1" /> View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Request New Program Dialog */}
      <Dialog open={requestOpen} onOpenChange={setRequestOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Request New Program</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleRequestSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label>Program Type</Label>
              <Select>
                <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="bootcamp">Bootcamp (6-16 weeks)</SelectItem>
                  <SelectItem value="workshop">Workshop (1-4 weeks)</SelectItem>
                  <SelectItem value="seminar">Seminar (1-2 days)</SelectItem>
                  <SelectItem value="hackathon">Hackathon</SelectItem>
                  <SelectItem value="custom">Custom Program</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Domain / Technology</Label>
              <Select>
                <SelectTrigger><SelectValue placeholder="Select domain" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="web-dev">Web Development</SelectItem>
                  <SelectItem value="data-science">Data Science & AI</SelectItem>
                  <SelectItem value="mobile">Mobile Development</SelectItem>
                  <SelectItem value="devops">DevOps & Cloud</SelectItem>
                  <SelectItem value="design">UI/UX Design</SelectItem>
                  <SelectItem value="career">Career Readiness</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Estimated Students</Label>
                <Input type="number" placeholder="e.g. 50" />
              </div>
              <div className="space-y-2">
                <Label>Preferred Format</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="on-campus">On-Campus</SelectItem>
                    <SelectItem value="online">Online</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Preferred Start Date</Label>
              <Input type="date" />
            </div>
            <div className="space-y-2">
              <Label>Additional Requirements</Label>
              <Textarea placeholder="Any specific topics, tools, or outcomes you want covered..." rows={3} />
            </div>
            <div className="flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={() => setRequestOpen(false)}>Cancel</Button>
              <Button type="submit">Submit Request</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Program Detail Dialog */}
      <Dialog open={!!detailProgram} onOpenChange={() => setDetailProgram(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{detailProgram?.title}</DialogTitle>
          </DialogHeader>
          {detailProgram && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <Badge variant={detailProgram.status === "In Progress" ? "default" : detailProgram.status === "Upcoming" ? "secondary" : "outline"}>{detailProgram.status}</Badge>
                <Badge variant="outline">{detailProgram.category}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{detailProgram.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-muted-foreground">Duration:</span> <span className="font-medium text-foreground">{detailProgram.duration}</span></div>
                <div><span className="text-muted-foreground">Format:</span> <span className="font-medium text-foreground">{detailProgram.format}</span></div>
                <div><span className="text-muted-foreground">Students:</span> <span className="font-medium text-foreground">{detailProgram.students}</span></div>
                <div><span className="text-muted-foreground">Instructor:</span> <span className="font-medium text-foreground">{detailProgram.instructor}</span></div>
                <div><span className="text-muted-foreground">Start Date:</span> <span className="font-medium text-foreground">{detailProgram.startDate}</span></div>
                <div><span className="text-muted-foreground">End Date:</span> <span className="font-medium text-foreground">{detailProgram.endDate}</span></div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CollegePrograms;
