import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MentorProfile = () => {
  const { toast } = useToast();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Profile updated!", description: "Your mentor profile has been saved." });
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Mentor Profile</h1>
        <p className="text-muted-foreground mt-1 text-sm">Manage your profile and expertise</p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <Card className="border-border/50">
          <CardHeader><CardTitle className="text-lg">Personal Information</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2"><Label>Full Name</Label><Input defaultValue="John Doe" /></div>
              <div className="space-y-2"><Label>Email</Label><Input type="email" defaultValue="john@example.com" /></div>
              <div className="space-y-2"><Label>Phone</Label><Input defaultValue="+91 98765 43210" /></div>
              <div className="space-y-2"><Label>Location</Label><Input defaultValue="Bangalore, India" /></div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader><CardTitle className="text-lg">Professional Details</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2"><Label>Current Organization</Label><Input defaultValue="TechCorp India" /></div>
              <div className="space-y-2"><Label>Designation</Label><Input defaultValue="Senior Developer" /></div>
              <div className="space-y-2"><Label>Years of Experience</Label><Input type="number" defaultValue="8" /></div>
              <div className="space-y-2"><Label>LinkedIn Profile</Label><Input defaultValue="https://linkedin.com/in/johndoe" /></div>
            </div>
            <div className="space-y-2">
              <Label>Areas of Expertise</Label>
              <Input defaultValue="React, Node.js, TypeScript, System Design, AWS" />
            </div>
            <div className="space-y-2">
              <Label>Bio</Label>
              <Textarea defaultValue="Passionate about teaching and mentoring the next generation of developers. 8+ years building scalable web applications." rows={3} />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader><CardTitle className="text-lg">Availability</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2"><Label>Hours per Week</Label><Input type="number" defaultValue="10" /></div>
              <div className="space-y-2"><Label>Preferred Time Slots</Label><Input defaultValue="Evenings & Weekends" /></div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end"><Button type="submit"><Save className="h-4 w-4 mr-2" /> Save Changes</Button></div>
      </form>
    </div>
  );
};

export default MentorProfile;
