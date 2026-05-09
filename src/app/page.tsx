import { AboutSection } from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { HeroSection } from "@/components/herosection";
import { NavbarDemo } from "@/components/navbar";
import ProjectSection from "@/components/ProjectSection";
import ServiceSection from "@/components/ServiceSection";

export default function Home() {
  return (
    <div>
      <NavbarDemo />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}
