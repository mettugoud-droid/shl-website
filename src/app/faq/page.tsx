import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/page-hero';
import { CTABanner } from '@/components/shared/cta-banner';
import { FAQPageContent } from './faq-content';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Find answers to common questions about Sri Harinath Logistics services, coverage, pricing, tracking, and operations.',
  keywords: [
    'logistics FAQ',
    'SHL FAQ',
    'transport questions',
    'logistics company questions',
    'shipping FAQ india',
  ],
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services, coverage, pricing, and operations. Can't find what you're looking for? Contact us."
        breadcrumbs={[{ label: 'FAQ' }]}
      />
      <FAQPageContent />
      <CTABanner
        title="Still Have Questions?"
        subtitle="Our team is happy to answer any questions not covered here. Reach out anytime."
      />
    </>
  );
}
