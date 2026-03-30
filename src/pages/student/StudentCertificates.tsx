import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Download, ExternalLink } from "lucide-react";

const certificates = [
  { id: 1, title: "UI/UX Design Fundamentals", issuedDate: "Mar 15, 2026", credentialId: "GC-UX-2026-001" },
];

const StudentCertificates = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Certificates</h1>
        <p className="text-muted-foreground text-sm mt-1">Your earned certifications</p>
      </div>

      {certificates.length === 0 ? (
        <Card className="border-border/50">
          <CardContent className="p-12 text-center">
            <Award className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="font-semibold text-foreground mb-1">No certificates yet</h3>
            <p className="text-sm text-muted-foreground">Complete a course to earn your first certificate!</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {certificates.map((cert) => (
            <Card key={cert.id} className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{cert.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">Issued: {cert.issuedDate}</p>
                    <p className="text-xs text-muted-foreground">ID: {cert.credentialId}</p>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" variant="outline"><Download className="h-3.5 w-3.5 mr-1" /> Download</Button>
                      <Button size="sm" variant="ghost"><ExternalLink className="h-3.5 w-3.5 mr-1" /> Share</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentCertificates;
