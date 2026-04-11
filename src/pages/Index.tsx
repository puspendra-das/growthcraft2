import { Layout } from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import TrustStrip from "@/components/sections/TrustStrip";
import PainPath from "@/components/sections/PainPath";
import HowItWorks from "@/components/sections/HowItWorks";
import FeaturedCourses from "@/components/sections/FeaturedCourses";
import BootcampHighlight from "@/components/sections/BootcampHighlight";
import FivePaths from "@/components/sections/FivePaths";
import MentorShowcase from "@/components/sections/MentorShowcase";
import Outcomes from "@/components/sections/Outcomes";
import HiringPartners from "@/components/sections/HiringPartners";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import HomepageFooter from "@/components/sections/HomepageFooter";

const Index = () => {
  return (
    <Layout>
      {/* 1. Hero (white) */}
      <HeroSection />
      {/* 2. Trust strip (white) */}
      <TrustStrip />
      {/* 3. Pain → Path (marble) */}
      <PainPath />
      {/* 4. How it works (white) */}
      <HowItWorks />
      {/* 5. Featured courses (graphite) */}
      <FeaturedCourses />
      {/* 6. Bootcamp highlight (white) */}
      <BootcampHighlight />
      {/* 7. Five paths (marble) */}
      <FivePaths />
      {/* 8. Mentor showcase (white) */}
      <MentorShowcase />
      {/* 9. Outcomes (marble) */}
      <Outcomes />
      {/* 10. Hiring partners (white) */}
      <HiringPartners />
      {/* 11. FAQ (white) */}
      <FAQ />
      {/* 12. Final CTA (graphite) */}
      <FinalCTA />
      {/* 13. Footer (graphite) */}
      <HomepageFooter />
    </Layout>
  );
};

export default Index;
