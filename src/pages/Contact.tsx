import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { PopupForm, usePopupForm } from "@/components/shared/PopupForm";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const contactInfo = [
  { icon: Mail, title: "Email Us", details: "info@growthcraft.in", link: "mailto:info@growthcraft.in" },
  { icon: Phone, title: "Call Us", details: "+91-9395303089", link: "tel:+919395303089" },
  { icon: MapPin, title: "Visit Us", details: "43, JB Road, Kanwachal, Silpukhuri, Guwahati, Assam, India (781005)", link: "#" },
  { icon: Clock, title: "Working Hours", details: "Mon - Sat: 9:00 AM - 6:00 PM", link: "#" },
];

const Contact = () => {
  const { isOpen, formType, formTitle, openForm, closeForm } = usePopupForm();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    try {
      contactSchema.parse(formData);
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        err.errors.forEach((error) => { if (error.path[0]) fieldErrors[error.path[0].toString()] = error.message; });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <Layout>
      <PopupForm isOpen={isOpen} onClose={closeForm} type={formType} title={formTitle} />
      
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" onClick={() => openForm("enquiry")}>
                <MessageCircle className="mr-2 h-5 w-5" />
                Quick Enquiry
              </Button>
              <Button variant="hero-outline" size="lg" onClick={() => openForm("callback")}>
                <Phone className="mr-2 h-5 w-5" />
                Request Callback
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Input placeholder="Your Name *" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={errors.name ? "border-destructive" : ""} />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email *" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={errors.email ? "border-destructive" : ""} />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <Input placeholder="Subject *" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className={errors.subject ? "border-destructive" : ""} />
                  {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject}</p>}
                </div>
                <div>
                  <Textarea placeholder="Your Message *" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={6} className={errors.message ? "border-destructive" : ""} />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                </div>
                <Button type="submit" variant="default" size="lg"><Send className="mr-2 h-5 w-5" />Send Message</Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a key={info.title} href={info.link} className="flex gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-card transition-all duration-300 group">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <p className="text-muted-foreground text-sm">{info.details}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-16 border-t border-border bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <Link to="/for-students" className="p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-all group">
              <h3 className="font-bold text-foreground group-hover:text-primary text-sm">For Students</h3>
            </Link>
            <Link to="/for-colleges" className="p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-all group">
              <h3 className="font-bold text-foreground group-hover:text-primary text-sm">For Colleges</h3>
            </Link>
            <Link to="/for-mentors" className="p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-all group">
              <h3 className="font-bold text-foreground group-hover:text-primary text-sm">For Mentors</h3>
            </Link>
            <Link to="/for-employers" className="p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-all group">
              <h3 className="font-bold text-foreground group-hover:text-primary text-sm">For Employers</h3>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;