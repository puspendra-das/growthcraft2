import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Phone, MapPin, GraduationCap, Calendar } from "lucide-react";

const StudentProfile = () => {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">My Profile</h1>
        <p className="text-muted-foreground text-sm mt-1">Manage your account settings</p>
      </div>

      {/* Profile Header */}
      <Card className="border-border/50">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">S</AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left flex-1">
              <h2 className="text-xl font-bold text-foreground">Student User</h2>
              <p className="text-muted-foreground text-sm">student@example.com</p>
              <div className="flex flex-wrap gap-2 mt-2 justify-center sm:justify-start">
                <Badge variant="secondary">3 Courses Enrolled</Badge>
                <Badge variant="outline">Member since Mar 2026</Badge>
              </div>
            </div>
            <Button variant="outline" size="sm">Edit Photo</Button>
          </div>
        </CardContent>
      </Card>

      {/* Personal Info */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-lg">Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>Full Name</Label>
              <Input defaultValue="Student User" />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input defaultValue="student@example.com" type="email" />
            </div>
            <div className="space-y-2">
              <Label>Phone</Label>
              <Input defaultValue="+91 98765 43210" type="tel" />
            </div>
            <div className="space-y-2">
              <Label>Location</Label>
              <Input defaultValue="Guwahati, Assam" />
            </div>
          </div>
          <Button className="mt-2">Save Changes</Button>
        </CardContent>
      </Card>

      {/* Education */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-lg">Education</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>College / University</Label>
              <Input defaultValue="IIT Guwahati" />
            </div>
            <div className="space-y-2">
              <Label>Degree</Label>
              <Input defaultValue="B.Tech Computer Science" />
            </div>
            <div className="space-y-2">
              <Label>Graduation Year</Label>
              <Input defaultValue="2027" />
            </div>
          </div>
          <Button className="mt-2">Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentProfile;
