import { PageHeader } from "@/components/ui-extensions";
import DataCard from "@/components/ui-extensions/DataCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const AmbassadorProfile = () => (
  <div>
    <PageHeader title="Profile" description="Manage your ambassador profile." />

    <DataCard className="max-w-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label className="mb-2 block">Full Name</Label>
          <Input defaultValue="Aarav Mehta" />
        </div>
        <div>
          <Label className="mb-2 block">Email</Label>
          <Input type="email" defaultValue="aarav@example.com" readOnly className="bg-marble" />
        </div>
        <div>
          <Label className="mb-2 block">Phone</Label>
          <Input defaultValue="+91 98765 43210" />
        </div>
        <div>
          <Label className="mb-2 block">City</Label>
          <Input defaultValue="Mumbai" />
        </div>
        <div className="md:col-span-2">
          <Label className="mb-2 block">LinkedIn Profile</Label>
          <Input defaultValue="https://linkedin.com/in/aaravmehta" />
        </div>
        <div className="md:col-span-2">
          <Label className="mb-2 block">Bio</Label>
          <Textarea rows={4} defaultValue="Tech enthusiast and educator helping students find the right learning path." />
        </div>
      </div>
      <div className="mt-6">
        <Button className="bg-magenta hover:bg-magenta/90 text-white">Save Profile</Button>
      </div>
    </DataCard>
  </div>
);

export default AmbassadorProfile;
