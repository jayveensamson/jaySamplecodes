import React from "react";
import Header from "../features/dashboard/components/Header";
import HeroSection from "../features/dashboard/components/HeroSection";
import WhySection from "../features/dashboard/components/WhySection";
import BenefitsGrid from "../features/dashboard/components/BenefitsGrid";
import PricingSection from "../features/dashboard/components/PricingSection";
import ContactSection from "../features/dashboard/components/ContactSection";
import CTACard from "../features/dashboard/components/CTACard";
import Footer from "../features/dashboard/components/Footer";
import Modals from "../features/dashboard/components/Modals";

const DashboardLanding: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <WhySection />
      <BenefitsGrid />
      <PricingSection />
      <ContactSection />
      <CTACard />
      <Footer />
      <Modals />
    </>
  );
};

export default DashboardLanding;
