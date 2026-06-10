import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/page-hero';
import { CareersContent } from './careers-content';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join Sri Harinath Logistics – explore career opportunities in logistics, transportation, operations, and technology. Grow with a leading Indian logistics company.',
  keywords: [
    'logistics jobs hyderabad',
    'transport company careers',
    'logistics career india',
    'driver jobs hyderabad',
    'supply chain jobs',
  ],
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers at SHL"
        subtitle="Join a team that's driving India's logistics revolution. We're always looking for talented, passionate professionals who want to make a difference."
        breadcrumbs={[{ label: 'Careers' }]}
      />
      <CareersContent />
    </>
  );
}
