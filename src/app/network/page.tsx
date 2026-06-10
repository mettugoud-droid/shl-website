import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/page-hero';
import { CTABanner } from '@/components/shared/cta-banner';
import { NetworkContent } from './network-content';

export const metadata: Metadata = {
  title: 'Network Coverage',
  description:
    'Sri Harinath Logistics operates across 28 states, 500+ cities, and 1000+ pin codes in India. Strategic hubs in Hyderabad, Chennai, Bangalore, Mumbai, Delhi, and more.',
  keywords: [
    'logistics network india',
    'pan india transport coverage',
    'logistics company all india',
    'transport routes telangana',
    'freight network south india',
  ],
};

export default function NetworkPage() {
  return (
    <>
      <PageHero
        title="Our Pan India Network"
        subtitle="Strategic hubs, extensive route coverage, and last-mile connectivity across 28 states and 500+ cities ensure your shipments reach every corner of India."
        breadcrumbs={[{ label: 'Network Coverage' }]}
      />
      <NetworkContent />
      <CTABanner
        title="Need Service in Your Area?"
        subtitle="Check coverage for your route or ask us about connecting new locations to your supply chain."
      />
    </>
  );
}
