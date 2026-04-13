import { PageHeader } from "@/components/ui-extensions";
import DataCard from "@/components/ui-extensions/DataCard";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageSquare } from "lucide-react";

const AmbassadorSupport = () => (
  <div>
    <PageHeader title="Support" description="Get help with your ambassador account." />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
      <DataCard>
        <div className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-lg bg-lavender/10 flex items-center justify-center shrink-0">
            <HelpCircle className="h-5 w-5 text-lavender" />
          </div>
          <div>
            <h3 className="font-semibold font-display mb-1">FAQs</h3>
            <p className="text-sm text-muted-foreground mb-3">Find answers to common questions about the ambassador program.</p>
            <Button variant="outline" size="sm">Browse FAQs</Button>
          </div>
        </div>
      </DataCard>

      <DataCard>
        <div className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-lg bg-magenta/10 flex items-center justify-center shrink-0">
            <MessageSquare className="h-5 w-5 text-magenta" />
          </div>
          <div>
            <h3 className="font-semibold font-display mb-1">Contact Support</h3>
            <p className="text-sm text-muted-foreground mb-3">Reach out to our team for personalized help.</p>
            <Button size="sm" className="bg-magenta hover:bg-magenta/90 text-white">Send Message</Button>
          </div>
        </div>
      </DataCard>
    </div>
  </div>
);

export default AmbassadorSupport;
