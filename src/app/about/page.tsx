import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/page-hero';
import { CTABanner } from '@/components/shared/cta-banner';
import { AboutContent } from './about-content';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Sri Harinath Logistics (SHL) – a trusted GST-registered logistics company offering transportation, warehousing, and supply chain solutions across India since 2021.',
  keywords: [
    'about sri harinath logistics',
    'logistics company hyderabad',
    'transport company secunderabad',
    'about SHL logistics',
  ],
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Sri Harinath Logistics"
        subtitle="A decade of delivering trust, building partnerships, and driving growth for businesses across India."
        breadcrumbs={[{ label: 'About Us' }]}
      />
      <AboutContent />
      <CTABanner
        title="Partner With a Logistics Leader"
        subtitle="Join 1000+ businesses that trust SHL for their transportation and supply chain needs."
      />
    </>
  );
}
