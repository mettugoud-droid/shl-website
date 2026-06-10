import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/page-hero';
import { TrackingContent } from './tracking-content';

export const metadata: Metadata = {
  title: 'Shipment Tracking',
  description:
    'Track your shipment with Sri Harinath Logistics. Enter your tracking ID or consignment number to get real-time status updates on your cargo.',
  keywords: [
    'track shipment',
    'logistics tracking',
    'consignment tracking',
    'SHL tracking',
    'cargo status',
  ],
};

export default function TrackingPage() {
  return (
    <>
      <PageHero
        title="Track Your Shipment"
        subtitle="Enter your tracking ID or consignment number to get real-time updates on your shipment status, location, and estimated delivery time."
        breadcrumbs={[{ label: 'Tracking' }]}
      />
      <TrackingContent />
    </>
  );
}
