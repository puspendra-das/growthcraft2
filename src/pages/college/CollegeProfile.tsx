import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Mail, Phone, Globe, MapPin, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CollegeProfile = () => {
  const { toast } = useToast();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Profile updated!", description: "Your institution profile has been saved." });
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Institution Profile</h1>
        <p className="text-muted-foreground mt-1 text-sm">Manage your college profile and partnership details</p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <Card className="border-border/50">
          <CardHeader><CardTitle className="text-lg">Institution Details</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Institution Name</Label>
                <Input defaultValue="ABC Engineering College" />
              </div>
              <div className="space-y-2">
                <Label>Affiliation / University</Label>
                <Input defaultValue="Gauhati University" />
              </div>
              <div className="space-y-2">
                <Label>Contact Person</Label>
                <Input defaultValue="Dr. R. Sharma" />
              </div>
              <div className="space-y-2">
                <Label>Designation</Label>
                <Input defaultValue="Training & Placement Officer" />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" defaultValue="tpo@abcengg.edu" />
              </div>
              <div className="space-y-2">
                <Label>Phone</Label>
                <Input defaultValue="+91 98765 43210" />
              </div>
              <div className="space-y-2">
                <Label>Website</Label>
                <Input defaultValue="https://abcengg.edu" />
              </div>
              <div className="space-y-2">
                <Label>City, State</Label>
                <Input defaultValue="Guwahati, Assam" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Address</Label>
              <Textarea defaultValue="NH 37, Jalukbari, Guwahati, Assam 781014" rows={2} />
            </div>
            <div className="space-y-2">
              <Label>About the Institution</Label>
              <Textarea defaultValue="ABC Engineering College is a premier institution offering undergraduate and postgraduate programs in engineering and technology since 1995." rows={3} />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader><CardTitle className="text-lg">Partnership Preferences</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Programs of Interest</Label>
              <Textarea defaultValue="Full Stack Development, Data Science, AI/ML, Cloud Computing" rows={2} />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Approximate Student Count</Label>
                <Input defaultValue="500" type="number" />
              </div>
              <div className="space-y-2">
                <Label>Preferred Format</Label>
                <Input defaultValue="Hybrid (On-campus + Online)" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button type="submit"><Save className="h-4 w-4 mr-2" /> Save Changes</Button>
        </div>
      </form>
    </div>
  );
};

export default CollegeProfile;
