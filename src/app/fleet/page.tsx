import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/page-hero';
import { CTABanner } from '@/components/shared/cta-banner';
import { FleetContent } from './fleet-content';

export const metadata: Metadata = {
  title: 'Our Fleet',
  description:
    'Sri Harinath Logistics operates a modern fleet of 450+ GPS-tracked vehicles including mini trucks, LCVs, heavy trucks, multi-axle vehicles, and container trucks.',
  keywords: [
    'logistics fleet india',
    'truck transport hyderabad',
    'GPS tracked vehicles',
    'fleet management telangana',
    'heavy truck transport india',
  ],
};

export default function FleetPage() {
  return (
    <>
      <PageHero
        title="Our Fleet"
        subtitle="A modern, GPS-tracked fleet of 450+ vehicles maintained to the highest safety standards. The right vehicle for every shipment, every time."
        breadcrumbs={[{ label: 'Fleet' }]}
      />
      <FleetContent />
      <CTABanner
        title="Need a Vehicle for Your Shipment?"
        subtitle="From 1-ton mini trucks to 40-ton multi-axle vehicles – tell us your cargo and we'll recommend the best option."
      />
    </>
  );
}
