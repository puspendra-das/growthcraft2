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

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustStrip />
      <PainPath />
      <HowItWorks />
      <FeaturedCourses />
      <BootcampHighlight />
      <FivePaths />
      <MentorShowcase />
      <Outcomes />
      <HiringPartners />
      <FAQ />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
