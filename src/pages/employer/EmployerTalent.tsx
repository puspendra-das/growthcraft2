import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Eye, Download, Mail } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface Candidate {
  id: number;
  name: string;
  email: string;
  skills: string[];
  score: number;
  course: string;
  location: string;
  status: string;
  bio: string;
  experience: string;
  linkedin: string;
  phone: string;
}

const candidates: Candidate[] = [
  { id: 1, name: "Rahul Sharma", email: "rahul@email.com", skills: ["React", "Node.js", "MongoDB"], score: 92, course: "Full Stack Dev", location: "Guwahati", status: "Available", bio: "Full stack developer with strong React and Node.js skills. Completed multiple projects during bootcamp.", experience: "6 months project experience", linkedin: "linkedin.com/in/rahul", phone: "+91 98765 43210" },
  { id: 2, name: "Priya Devi", email: "priya@email.com", skills: ["Python", "Pandas", "ML"], score: 88, course: "Data Science", location: "Delhi", status: "Available", bio: "Data science enthusiast with strong analytical skills and Python expertise.", experience: "Academic projects + internship", linkedin: "linkedin.com/in/priya", phone: "+91 98765 43211" },
  { id: 3, name: "Amit Kumar", email: "amit@email.com", skills: ["React", "TypeScript", "Next.js"], score: 85, course: "React Masterclass", location: "Bangalore", status: "Interviewing", bio: "Frontend specialist with TypeScript and Next.js expertise.", experience: "1 year freelance", linkedin: "linkedin.com/in/amit", phone: "+91 98765 43212" },
  { id: 4, name: "Sneha Gupta", email: "sneha@email.com", skills: ["Figma", "UI/UX", "CSS"], score: 90, course: "Design Sprint", location: "Mumbai", status: "Available", bio: "UI/UX designer with eye for detail and user-centric design approach.", experience: "Portfolio of 10+ designs", linkedin: "linkedin.com/in/sneha", phone: "+91 98765 43213" },
  { id: 5, name: "Ravi Patel", email: "ravi@email.com", skills: ["Java", "Spring Boot", "AWS"], score: 87, course: "Backend Dev", location: "Hyderabad", status: "Available", bio: "Backend developer with Java/Spring Boot expertise and AWS knowledge.", experience: "Fresher with strong projects", linkedin: "linkedin.com/in/ravi", phone: "+91 98765 43214" },
  { id: 6, name: "Meera Singh", email: "meera@email.com", skills: ["React", "Node.js", "PostgreSQL"], score: 94, course: "Full Stack Dev", location: "Pune", status: "Hired", bio: "Full stack developer with startup experience. Strong in React ecosystem.", experience: "1 year at startup", linkedin: "linkedin.com/in/meera", phone: "+91 98765 43215" },
];

const EmployerTalent = () => {
  const [search, setSearch] = useState("");
  const [skillFilter, setSkillFilter] = useState("all");
  const [viewCandidate, setViewCandidate] = useState<Candidate | null>(null);
  const { toast } = useToast();

  const filtered = candidates.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.skills.some(s => s.toLowerCase().includes(search.toLowerCase()));
    const matchesSkill = skillFilter === "all" || c.skills.some(s => s.toLowerCase().includes(skillFilter.toLowerCase()));
    return matchesSearch && matchesSkill;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Talent Pool</h1>
        <p className="text-muted-foreground mt-1 text-sm">Browse job-ready candidates from GrowthCraft programs</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search by name or skill..." className="pl-10" value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <Select value={skillFilter} onValueChange={setSkillFilter}>
          <SelectTrigger className="w-40"><SelectValue placeholder="All Skills" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Skills</SelectItem>
            <SelectItem value="react">React</SelectItem>
            <SelectItem value="python">Python</SelectItem>
            <SelectItem value="node">Node.js</SelectItem>
            <SelectItem value="figma">UI/UX</SelectItem>
            <SelectItem value="java">Java</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-3">
        {filtered.map((c) => (
          <Card key={c.id} className="border-border/50">
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    {c.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{c.name}</p>
                    <p className="text-xs text-muted-foreground">{c.course} · {c.location}</p>
                    <div className="flex gap-1 mt-1 flex-wrap">
                      {c.skills.map(s => <Badge key={s} variant="outline" className="text-[10px] px-1.5 py-0">{s}</Badge>)}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-sm font-bold text-green-600">{c.score}%</p>
                    <Badge variant={c.status === "Hired" ? "default" : c.status === "Interviewing" ? "secondary" : "outline"} className="text-xs">{c.status}</Badge>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setViewCandidate(c)}><Eye className="h-4 w-4" /></Button>
                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => toast({ title: "Resume downloaded", description: `${c.name}'s resume has been downloaded.` })}><Download className="h-4 w-4" /></Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Candidate Detail Dialog */}
      <Dialog open={!!viewCandidate} onOpenChange={() => setViewCandidate(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader><DialogTitle>Candidate Profile</DialogTitle></DialogHeader>
          {viewCandidate && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                  {viewCandidate.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-lg text-foreground">{viewCandidate.name}</p>
                  <p className="text-sm text-muted-foreground">{viewCandidate.email}</p>
                  <p className="text-xs text-muted-foreground">{viewCandidate.phone} · {viewCandidate.location}</p>
                </div>
                <Badge variant={viewCandidate.status === "Hired" ? "default" : "outline"} className="ml-auto">{viewCandidate.status}</Badge>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div><span className="text-muted-foreground">Course:</span><br/><span className="font-medium text-foreground">{viewCandidate.course}</span></div>
                <div><span className="text-muted-foreground">Score:</span><br/><span className="font-bold text-green-600 text-lg">{viewCandidate.score}%</span></div>
                <div><span className="text-muted-foreground">Experience:</span><br/><span className="font-medium text-foreground">{viewCandidate.experience}</span></div>
                <div><span className="text-muted-foreground">LinkedIn:</span><br/><span className="font-medium text-primary">{viewCandidate.linkedin}</span></div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">Skills</p>
                <div className="flex gap-1 flex-wrap">
                  {viewCandidate.skills.map(s => <Badge key={s} variant="outline">{s}</Badge>)}
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">About</p>
                <p className="text-sm text-foreground">{viewCandidate.bio}</p>
              </div>

              <div className="flex gap-2 pt-2 border-t border-border">
                <Button size="sm" onClick={() => toast({ title: "Resume downloaded" })}><Download className="h-3.5 w-3.5 mr-1" /> Download Resume</Button>
                <Button size="sm" variant="outline" onClick={() => toast({ title: "Email sent", description: `Contact email sent to ${viewCandidate.name}` })}><Mail className="h-3.5 w-3.5 mr-1" /> Contact</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EmployerTalent;
