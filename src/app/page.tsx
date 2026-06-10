import {
  HeroSection,
  QuoteCTASection,
  WhyChooseSection,
  ServicesSection,
  IndustriesSection,
  FleetSection,
  CoverageSection,
  StatisticsSection,
  TestimonialsSection,
  ProcessSection,
  FAQSection,
  ContactSection,
  WhatsAppCTASection,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Banner */}
      <HeroSection />

      {/* 2. Request Quote CTA */}
      <QuoteCTASection />

      {/* 3. Why Choose SHL */}
      <WhyChooseSection />

      {/* 4. Service Highlights */}
      <ServicesSection />

      {/* 5. Industries Served */}
      <IndustriesSection />

      {/* 6. Fleet Showcase */}
      <FleetSection />

      {/* 7. Coverage Map */}
      <CoverageSection />

      {/* 8. Logistics Statistics */}
      <StatisticsSection />

      {/* 9. Testimonials */}
      <TestimonialsSection />

      {/* 10. Process Workflow */}
      <ProcessSection />

      {/* 11. FAQ Section */}
      <FAQSection />

      {/* 12. Contact Section */}
      <ContactSection />

      {/* 13. WhatsApp CTA */}
      <WhatsAppCTASection />

      {/* 14. Footer is in layout */}
    </>
  );
}
