import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/page-hero';
import { TrackingContent } from './tracking-content';

export const metadata: Metadata = {
  title: 'Vehicle Tracking',
  description:
    'Track your vehicle live with Sri Harinath Logistics. Get real-time GPS location, route updates, and estimated arrival time for all our fleet vehicles.',
  keywords: [
    'vehicle tracking',
    'live GPS tracking',
    'truck tracking',
    'fleet tracking',
    'real-time vehicle location',
  ],
};

export default function TrackingPage() {
  return (
    <>
      <PageHero
        title="Live Vehicle Tracking"
        subtitle="Track your vehicle in real-time with GPS-enabled fleet monitoring. Get live location, route progress, and estimated time of arrival for all shipments."
        breadcrumbs={[{ label: 'Vehicle Tracking' }]}
      />
      <TrackingContent />
    </>
  );
}
