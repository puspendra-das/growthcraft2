import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Users, ArrowRight, MapPin } from "lucide-react";
import { PopupForm, usePopupForm } from "@/components/shared/PopupForm";
import PageHeader from "@/components/ui-extensions/PageHeader";
import Section from "@/components/ui-extensions/Section";
import { bootcampsMock } from "@/data/bootcamps.mock";

const modes = ["Online", "Offline", "Hybrid"] as const;
const statuses = ["Open", "Closed", "Completed"] as const;

const Bootcamps = () => {
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const { isOpen, formType, formTitle, openForm, closeForm } = usePopupForm();

  const filtered = bootcampsMock.filter((b) => {
    const matchMode = !selectedMode || b.mode === selectedMode;
    const matchStatus = !selectedStatus || b.status === selectedStatus;
    return matchMode && matchStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return "bg-success/10 text-success";
      case "Closed": return "bg-danger/10 text-danger";
      case "Completed": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Layout>
      <PopupForm isOpen={isOpen} onClose={closeForm} type={formType} title={formTitle} />

      <Section variant="white">
        <PageHeader
          breadcrumb={
            <span>
              <Link to="/" className="hover:text-magenta transition-colors">Home</Link> / Bootcamps
            </span>
          }
          title="Live Bootcamps"
          description="Intensive, mentor-led programs designed to make you job-ready in weeks."
        />

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {modes.map((m) => (
            <button
              key={m}
              onClick={() => setSelectedMode(selectedMode === m ? null : m)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedMode === m ? "bg-magenta text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {m}
            </button>
          ))}
          <span className="w-px h-6 bg-border mx-1" />
          {statuses.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedStatus(selectedStatus === s ? null : s)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedStatus === s ? "bg-magenta text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {s}
            </button>
          ))}
          {(selectedMode || selectedStatus) && (
            <button
              onClick={() => { setSelectedMode(null); setSelectedStatus(null); }}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-danger/10 text-danger hover:bg-danger/20 transition-all"
            >
              Clear
            </button>
          )}
        </div>
      </Section>

      {/* Bootcamp cards — alternating white/marble */}
      {filtered.map((bootcamp, i) => (
        <Section key={bootcamp._id} variant={i % 2 === 0 ? "white" : "marble"}>
          <div className="flex flex-col lg:flex-row gap-6 rounded-xl border border-border overflow-hidden bg-card hover:border-magenta/30 hover:shadow-lg transition-all">
            {/* Banner */}
            <div className="lg:w-[40%] h-48 lg:h-auto bg-graphite flex items-center justify-center">
              <div className="text-center text-white/40">
                <MapPin className="h-8 w-8 mx-auto mb-2" />
                <p className="text-xs">{bootcamp.mode}</p>
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-[60%] p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${getStatusColor(bootcamp.status)}`}>
                    {bootcamp.status}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-lavender/10 text-lavender">
                    {bootcamp.mode}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-2">{bootcamp.title}</h2>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{bootcamp.startDate} — {bootcamp.endDate}</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  {bootcamp.mentorNames.map((name) => (
                    <img key={name} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} alt={name} className="h-7 w-7 rounded-full border-2 border-background -ml-1 first:ml-0" title={name} />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">{bootcamp.mentorNames.length} mentors</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {bootcamp.skillsCovered.map((skill) => (
                    <span key={skill} className="px-2 py-0.5 rounded text-[10px] bg-lavender/10 text-lavender font-medium">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  {bootcamp.status === "Open" && (
                    <p className="text-sm font-bold text-magenta">{bootcamp.maxSeats - bootcamp.enrolledCount} seats left of {bootcamp.maxSeats}</p>
                  )}
                  <p className="text-lg font-extrabold text-foreground">₹{bootcamp.price.toLocaleString()}</p>
                </div>
                {bootcamp.status === "Open" ? (
                  <Button className="bg-magenta text-white hover:bg-magenta/90" onClick={() => openForm("enrollment", `Reserve seat — ${bootcamp.title}`)}>
                    Reserve Seat <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button variant="outline" disabled>{bootcamp.status}</Button>
                )}
              </div>
            </div>
          </div>
        </Section>
      ))}

      {filtered.length === 0 && (
        <Section variant="white">
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-4">No bootcamps match your filters.</p>
            <Button variant="outline" onClick={() => { setSelectedMode(null); setSelectedStatus(null); }}>Clear Filters</Button>
          </div>
        </Section>
      )}

      {/* Final CTA */}
      <Section variant="graphite">
        <div className="text-center py-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Not sure which bootcamp?</h2>
          <p className="text-white/60 mb-6">Talk to our team and we'll help you pick the right one.</p>
          <Button className="bg-magenta text-white hover:bg-magenta/90" size="lg" onClick={() => openForm("callback")}>
            Book Free Counseling
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default Bootcamps;
