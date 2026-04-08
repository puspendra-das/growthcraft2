import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface Session {
  id: number;
  title: string;
  date: string;
  time: string;
  type: string;
  mode: string;
  description?: string;
}

const initialSessions: Session[] = [
  { id: 1, title: "1:1 Mentoring - Rahul S.", date: "Apr 10, 2026", time: "3:00 PM - 3:45 PM", type: "1:1", mode: "Online", description: "Review progress on Full Stack project module 4." },
  { id: 2, title: "Group Code Review", date: "Apr 11, 2026", time: "10:00 AM - 11:30 AM", type: "Group", mode: "Online", description: "Review submitted assignments from last week." },
  { id: 3, title: "React Workshop - Session 5", date: "Apr 12, 2026", time: "2:00 PM - 5:00 PM", type: "Workshop", mode: "Hybrid", description: "Advanced state management with Redux and Context API." },
  { id: 4, title: "1:1 Mentoring - Priya D.", date: "Apr 14, 2026", time: "4:00 PM - 4:45 PM", type: "1:1", mode: "Online", description: "Career counseling and project feedback." },
  { id: 5, title: "Mock Interview Session", date: "Apr 16, 2026", time: "11:00 AM - 1:00 PM", type: "Interview", mode: "Online", description: "Practice interviews for placement-ready students." },
  { id: 6, title: "Full Stack Dev - Module Review", date: "Apr 18, 2026", time: "10:00 AM - 12:00 PM", type: "Review", mode: "Online", description: "Module 5 completion review and Q&A." },
];

const MentorSchedule = () => {
  const [sessions, setSessions] = useState(initialSessions);
  const [addOpen, setAddOpen] = useState(false);
  const [detailSession, setDetailSession] = useState<Session | null>(null);
  const { toast } = useToast();

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const newSession: Session = {
      id: sessions.length + 1,
      title: formData.get("title") as string || "New Session",
      date: formData.get("date") as string || "TBD",
      time: formData.get("time") as string || "TBD",
      type: formData.get("type") as string || "1:1",
      mode: formData.get("mode") as string || "Online",
      description: formData.get("notes") as string || "",
    };
    setSessions(prev => [newSession, ...prev]);
    toast({ title: "Session added!", description: "New session has been scheduled." });
    setAddOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Schedule</h1>
          <p className="text-muted-foreground mt-1 text-sm">Your upcoming sessions and appointments</p>
        </div>
        <Button onClick={() => setAddOpen(true)}><Calendar className="h-4 w-4 mr-2" /> Add Session</Button>
      </div>

      <div className="grid gap-3">
        {sessions.map((session) => (
          <Card key={session.id} className="border-border/50">
            <CardContent className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">
                  <Calendar className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{session.title}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {session.date} · {session.time}</span>
                    <span className="flex items-center gap-1"><Video className="h-3 w-3" /> {session.mode}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">{session.type}</Badge>
                <Button variant="outline" size="sm" onClick={() => setDetailSession(session)}>View</Button>
                <Button variant="default" size="sm" onClick={() => toast({ title: "Joining session...", description: "Redirecting to meeting link." })}>Join</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add Session Dialog */}
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader><DialogTitle>Add New Session</DialogTitle></DialogHeader>
          <form onSubmit={handleAddSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label>Session Title</Label>
              <Input name="title" placeholder="e.g. 1:1 with Student Name" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Date</Label>
                <Input name="date" type="date" required />
              </div>
              <div className="space-y-2">
                <Label>Time</Label>
                <Input name="time" placeholder="e.g. 3:00 PM - 4:00 PM" required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Session Type</Label>
                <Select name="type" defaultValue="1:1">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1:1">1:1 Mentoring</SelectItem>
                    <SelectItem value="Group">Group Session</SelectItem>
                    <SelectItem value="Workshop">Workshop</SelectItem>
                    <SelectItem value="Review">Code Review</SelectItem>
                    <SelectItem value="Interview">Mock Interview</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Mode</Label>
                <Select name="mode" defaultValue="Online">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Online">Online</SelectItem>
                    <SelectItem value="Offline">Offline</SelectItem>
                    <SelectItem value="Hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Meeting Link (Optional)</Label>
              <Input name="link" placeholder="https://meet.google.com/..." />
            </div>
            <div className="space-y-2">
              <Label>Notes (Optional)</Label>
              <Textarea name="notes" placeholder="Agenda or preparation notes..." rows={3} />
            </div>
            <div className="flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={() => setAddOpen(false)}>Cancel</Button>
              <Button type="submit">Add Session</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Session Detail Dialog */}
      <Dialog open={!!detailSession} onOpenChange={() => setDetailSession(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>{detailSession?.title}</DialogTitle></DialogHeader>
          {detailSession && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <Badge variant="outline">{detailSession.type}</Badge>
                <Badge variant="secondary">{detailSession.mode}</Badge>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-muted-foreground">Date:</span> <span className="font-medium text-foreground">{detailSession.date}</span></div>
                <div><span className="text-muted-foreground">Time:</span> <span className="font-medium text-foreground">{detailSession.time}</span></div>
              </div>
              {detailSession.description && (
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Notes</p>
                  <p className="text-sm text-foreground">{detailSession.description}</p>
                </div>
              )}
              <Button className="w-full" onClick={() => { setDetailSession(null); toast({ title: "Joining session..." }); }}>Join Session</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MentorSchedule;
