import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const footerLinks = {
  product: [
    { name: "Courses", path: "/courses" },
    { name: "Bootcamps", path: "/bootcamps" },
    { name: "Mentors", path: "/for-mentors" },
    { name: "For Colleges", path: "/for-colleges" },
    { name: "For Hiring Partners", path: "/for-employers" },
  ],
  company: [
    { name: "About", path: "/about" },
    { name: "Careers", path: "/contact" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/about" },
  ],
  legal: [
    { name: "Terms", path: "/about" },
    { name: "Privacy", path: "/about" },
    { name: "Refund Policy", path: "/about" },
  ],
};

const HomepageFooter = () => {
  return (
    <footer className="bg-graphite text-white">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-extrabold font-display">
                Growth<span className="text-magenta">Craft</span>
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              India's outcome-driven MERN academy. Learn, build, get hired.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider font-afacad text-white/70">Product</h4>
            <ul className="space-y-2.5">
              {footerLinks.product.map((l) => (
                <li key={l.name}>
                  <Link to={l.path} className="text-sm text-white/50 hover:text-white transition-colors">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider font-afacad text-white/70">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((l) => (
                <li key={l.name}>
                  <Link to={l.path} className="text-sm text-white/50 hover:text-white transition-colors">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider font-afacad text-white/70">Legal</h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((l) => (
                <li key={l.name}>
                  <Link to={l.path} className="text-sm text-white/50 hover:text-white transition-colors">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider font-afacad text-white/70">Newsletter</h4>
            <p className="text-sm text-white/50 mb-3">Get weekly tech career tips.</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="you@email.com"
                className="bg-white/10 border-white/10 text-white placeholder:text-white/30 text-sm h-9"
              />
              <Button size="sm" className="flex-shrink-0">Join</Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} GrowthCraft. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {[Linkedin, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <Icon className="h-4 w-4 text-lavender" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomepageFooter;
