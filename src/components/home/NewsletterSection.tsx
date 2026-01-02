import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Bell } from "lucide-react";
import { toast } from "sonner";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for subscribing! We'll keep you updated.");
    setEmail("");
    setName("");
  };

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex p-4 rounded-2xl gradient-bg text-primary-foreground mb-6">
            <Bell className="h-8 w-8" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay in the <span className="gradient-text">Loop</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Don't miss our next bootcamp or hiring call. Get handpicked opportunities, 
            free events, and early bird discounts.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1 space-y-3">
              <Input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-12"
              />
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12"
              />
            </div>
            <Button type="submit" variant="hero" size="lg" className="h-auto sm:h-12">
              <Mail className="mr-2 h-5 w-5" />
              Subscribe
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-4">
            No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};
