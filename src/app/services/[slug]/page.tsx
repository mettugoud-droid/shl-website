import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { servicesData, type ServiceSlug } from '@/config/services';
import { PageHero } from '@/components/shared/page-hero';
import { CTABanner } from '@/components/shared/cta-banner';
import { ServicePageContent } from './service-page-content';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug as ServiceSlug];

  if (!service) return {};

  return {
    title: `${service.title} | Sri Harinath Logistics`,
    description: service.description,
    keywords: [
      `${service.shortTitle} india`,
      `${service.shortTitle} hyderabad`,
      `${service.title.toLowerCase()} services`,
      'logistics company india',
      'transport services hyderabad',
    ],
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData[slug as ServiceSlug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.heroSubtitle}
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: service.shortTitle },
        ]}
      />
      <ServicePageContent service={service} />
      <CTABanner
        title={`Need ${service.shortTitle} Services?`}
        subtitle="Get a customized quote for your logistics requirements. Our team responds within 2 hours."
      />
    </>
  );
}
