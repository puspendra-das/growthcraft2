import { Link } from "react-router-dom";
import logoMain from "@/assets/logo-main.png";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

const footerLinks = {
  platform: [
    { name: "Courses", path: "/courses" },
    { name: "Bootcamps", path: "/bootcamps" },
    { name: "Mentorship", path: "/for-mentors" },
    { name: "Career Services", path: "/for-students" },
  ],
  partners: [
    { name: "For Students", path: "/for-students" },
    { name: "For Colleges", path: "/for-colleges" },
    { name: "For Mentors", path: "/for-mentors" },
    { name: "For Employers", path: "/for-employers" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "FAQs", path: "/contact" },
    { name: "Admin Panel", path: "/admin" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src={logoMain} alt="GrowthCraft" className="h-10 brightness-0 invert" />
            </Link>
            <p className="text-background/70 mb-6 max-w-sm">
              GrowthCraft is your all-in-one platform to learn tech, master industry skills, 
              and land your dream job.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@growthcraft.in" className="flex items-center gap-3 text-background/70 hover:text-background transition-colors">
                <Mail className="h-5 w-5" />
                info@growthcraft.in
              </a>
              <a href="tel:+919395303089" className="flex items-center gap-3 text-background/70 hover:text-background transition-colors">
                <Phone className="h-5 w-5" />
                +91-9395303089
              </a>
              <div className="flex items-start gap-3 text-background/70">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>43, JB Road, Kanwachal, Silpukhuri, Guwahati, Assam, India (781005)</span>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-background">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-background">Partners</h4>
            <ul className="space-y-3">
              {footerLinks.partners.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-background">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-background/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} GrowthCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};