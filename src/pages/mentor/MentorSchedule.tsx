import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Video, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const sessions = [
  { title: "1:1 Mentoring - Rahul S.", date: "Apr 10, 2026", time: "3:00 PM - 3:45 PM", type: "1:1", mode: "Online" },
  { title: "Group Code Review", date: "Apr 11, 2026", time: "10:00 AM - 11:30 AM", type: "Group", mode: "Online" },
  { title: "React Workshop - Session 5", date: "Apr 12, 2026", time: "2:00 PM - 5:00 PM", type: "Workshop", mode: "Hybrid" },
  { title: "1:1 Mentoring - Priya D.", date: "Apr 14, 2026", time: "4:00 PM - 4:45 PM", type: "1:1", mode: "Online" },
  { title: "Mock Interview Session", date: "Apr 16, 2026", time: "11:00 AM - 1:00 PM", type: "Interview", mode: "Online" },
  { title: "Full Stack Dev - Module Review", date: "Apr 18, 2026", time: "10:00 AM - 12:00 PM", type: "Review", mode: "Online" },
];

const MentorSchedule = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Schedule</h1>
        <p className="text-muted-foreground mt-1 text-sm">Your upcoming sessions and appointments</p>
      </div>
      <Button><Calendar className="h-4 w-4 mr-2" /> Add Session</Button>
    </div>

    <div className="grid gap-3">
      {sessions.map((session, i) => (
        <Card key={i} className="border-border/50">
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
              <Button variant="outline" size="sm">Join</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default MentorSchedule;
