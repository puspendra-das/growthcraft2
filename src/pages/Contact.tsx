import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "info@growthcraft.in",
    link: "mailto:info@growthcraft.in",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+91-9395303089",
    link: "tel:+919395303089",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "43, JB Road, Kanwachal, Silpukhuri, Guwahati, Assam, India (781005)",
    link: "#",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Mon - Sat: 9:00 AM - 6:00 PM",
    link: "#",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 gradient-hero-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message 
              and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Name</label>
                    <Input
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Email</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                  />
                </div>
                <Button type="submit" variant="hero" size="lg">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg gradient-bg text-primary-foreground group-hover:scale-110 transition-transform">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      <p className="text-muted-foreground">{info.details}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* FAQ Link */}
              <div className="mt-8 p-6 rounded-xl gradient-hero-bg border border-primary/20">
                <h3 className="font-bold mb-2">Have Questions?</h3>
                <p className="text-muted-foreground mb-4">
                  Check out our frequently asked questions for quick answers.
                </p>
                <Button variant="outline" asChild>
                  <a href="#faq">View FAQs</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
