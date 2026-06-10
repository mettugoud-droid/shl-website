import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/page-hero';
import { CTABanner } from '@/components/shared/cta-banner';
import { IndustriesContent } from './industries-content';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'Sri Harinath Logistics provides specialized logistics solutions for FMCG, retail, manufacturing, pharmaceuticals, automotive, and e-commerce industries across India.',
  keywords: [
    'logistics for FMCG',
    'pharmaceutical logistics india',
    'retail supply chain',
    'automotive logistics hyderabad',
    'e-commerce logistics india',
    'manufacturing transport services',
  ],
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries We Serve"
        subtitle="Specialized logistics solutions designed around the unique challenges, compliance requirements, and operational needs of each industry sector."
        breadcrumbs={[{ label: 'Industries' }]}
      />
      <IndustriesContent />
      <CTABanner
        title="Need Industry-Specific Logistics?"
        subtitle="Our team understands your sector's unique challenges. Let us design a solution tailored to your industry."
      />
    </>
  );
}
