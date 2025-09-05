import HeroSection from "@/components/HeroSection";
import FeaturedExperiences from "@/components/FeaturedExperiences";
import BookingSection from "@/components/BookingSection";
import EquipmentShowcase from "@/components/EquipmentShowcase";
import Testimonials from "@/components/Testimonials";
import CompatibilityChecker from "@/components/CompatibilityChecker";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.title = "VR Arcade - Immersive Virtual Reality Experiences";
  }, []);

  return (
    <div className="overflow-hidden">
      <HeroSection />
      <FeaturedExperiences />
      <BookingSection />
      <EquipmentShowcase />
      <Testimonials />
      <CompatibilityChecker />
      <ContactSection />
    </div>
  );
};

export default HomePage;