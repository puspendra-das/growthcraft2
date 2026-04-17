import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui-extensions/Section";
import DataCard from "@/components/ui-extensions/DataCard";
import { bootcampsMock } from "@/data/bootcamps.mock";
import { mentorsMock } from "@/data/mentors.mock";
import { ArrowLeft, ArrowRight, Calendar, Users, Star } from "lucide-react";
import { PopupForm, usePopupForm } from "@/components/shared/PopupForm";

const toolLogos = ["React", "Node.js", "MongoDB", "Express", "TypeScript", "Docker", "AWS", "Git"];

const BootcampDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const bootcamp = bootcampsMock.find((b) => b.slug === slug);
  const { isOpen, formType, formTitle, openForm, closeForm } = usePopupForm();

  if (!bootcamp) {
    return (
      <Layout>
        <Section variant="white">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold mb-4">Bootcamp Not Found</h1>
            <Button asChild><Link to="/bootcamps">Browse Bootcamps</Link></Button>
          </div>
        </Section>
      </Layout>
    );
  }

  const seatsLeft = bootcamp.maxSeats - bootcamp.enrolledCount;
  const mentors = mentorsMock.filter((m) => bootcamp.mentorNames.includes(m.name));

  // Generate session timeline from skills
  const sessions = bootcamp.skillsCovered.map((skill, i) => ({
    week: i + 1,
    title: `${skill} — Deep Dive & Projects`,
    mentor: bootcamp.mentorNames[i % bootcamp.mentorNames.length],
    duration: "3 sessions × 2 hours",
  }));

  return (
    <Layout>
      <PopupForm isOpen={isOpen} onClose={closeForm} type={formType} title={formTitle} />

      {/* Hero */}
      <Section variant="graphite">
        <Link to="/bootcamps" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 text-sm transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Bootcamps
        </Link>
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-0.5 rounded text-xs font-semibold bg-success/20 text-success">{bootcamp.status}</span>
              <span className="px-2 py-0.5 rounded text-xs font-semibold bg-lavender/20 text-lavender">{bootcamp.mode}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">{bootcamp.title}</h1>
            <div className="flex items-center gap-4 text-sm text-white/60 mb-6">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{bootcamp.startDate} — {bootcamp.endDate}</span>
              <span className="flex items-center gap-1"><Users className="h-4 w-4" />{bootcamp.maxSeats} seats</span>
            </div>
            {bootcamp.status === "Open" && (
              <p className="text-lg font-bold text-magenta mb-6">{seatsLeft} seats remaining</p>
            )}
            <Button className="bg-magenta text-white hover:bg-magenta/90" size="lg" onClick={() => openForm("enrollment", `Reserve seat — ${bootcamp.title}`)}>
              Reserve Your Seat <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="lg:col-span-5">
            {/* Sticky enroll card */}
            <DataCard variant="dark" className="border border-white/10">
              <div className="text-center">
                <p className="text-3xl font-extrabold text-white mb-1">₹{bootcamp.price.toLocaleString()}</p>
                <p className="text-sm text-white/50 mb-4">EMI from ₹{Math.round(bootcamp.price / 6).toLocaleString()}/mo</p>
                <Button className="w-full bg-magenta text-white hover:bg-magenta/90 mb-3" size="lg" onClick={() => openForm("enrollment", `Reserve seat — ${bootcamp.title}`)}>
                  Enroll Now
                </Button>
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10" onClick={() => openForm("callback")}>
                  Request Callback
                </Button>
              </div>
            </DataCard>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section variant="white">
        <h2 className="text-2xl font-extrabold mb-6">What you'll learn</h2>
        <div className="flex flex-wrap gap-2">
          {bootcamp.skillsCovered.map((skill) => (
            <span key={skill} className="px-3 py-1.5 rounded-full text-sm bg-lavender/10 text-lavender font-medium">{skill}</span>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section variant="marble">
        <h2 className="text-2xl font-extrabold mb-8">Sessions Timeline</h2>
        <div className="relative pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-magenta" />
          <div className="space-y-6">
            {sessions.map((session) => (
              <div key={session.week} className="relative">
                <div className="absolute -left-5 top-1 w-4 h-4 rounded-full bg-magenta border-2 border-background" />
                <DataCard>
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground font-afacad">Week {session.week}</p>
                      <h3 className="font-bold">{session.title}</h3>
                      <p className="text-sm text-muted-foreground">{session.duration}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${session.mentor}`} alt={session.mentor} className="h-6 w-6 rounded-full" />
                      <span className="text-xs text-muted-foreground">{session.mentor}</span>
                    </div>
                  </div>
                </DataCard>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Mentors */}
      <Section variant="white">
        <h2 className="text-2xl font-extrabold mb-8">Meet your mentors</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <DataCard key={mentor._id}>
              <div className="flex items-center gap-4 mb-3">
                <img src={mentor.photo} alt={mentor.name} className="h-12 w-12 rounded-full" />
                <div>
                  <h3 className="font-bold">{mentor.name}</h3>
                  <p className="text-xs text-muted-foreground">{mentor.company}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {mentor.expertiseTags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded text-[10px] bg-lavender/10 text-lavender font-medium">{tag}</span>
                ))}
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>{mentor.sessionsDelivered} sessions</span>
                <span className="flex items-center gap-0.5"><Star className="h-3 w-3 text-warning" />{mentor.rating}</span>
              </div>
            </DataCard>
          ))}
        </div>
      </Section>

      {/* Tools */}
      <Section variant="marble">
        <h2 className="text-2xl font-extrabold mb-6">Tools you'll use</h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {toolLogos.map((tool) => (
            <div key={tool} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border">
              <div className="h-8 w-8 rounded bg-muted flex items-center justify-center text-xs font-mono font-bold text-muted-foreground">
                {tool.charAt(0)}
              </div>
              <span className="text-[10px] text-muted-foreground">{tool}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section variant="graphite">
        <div className="text-center py-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Transform your career in {bootcamp.skillsCovered.length * 2} weeks</h2>
          <p className="text-white/60 mb-6">Limited seats. Enroll now to secure your spot.</p>
          <Button className="bg-magenta text-white hover:bg-magenta/90" size="lg" onClick={() => openForm("enrollment", `Reserve seat — ${bootcamp.title}`)}>
            Reserve Your Seat <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default BootcampDetail;
