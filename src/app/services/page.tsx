import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Truck,
  Package,
  Warehouse,
  Route,
  CarFront,
  Network,
  MapPin,
  ShoppingCart,
  Zap,
  ArrowRight,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { PageHero } from '@/components/shared/page-hero';
import { CTABanner } from '@/components/shared/cta-banner';
import { servicesData } from '@/config/services';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Comprehensive logistics services by Sri Harinath Logistics – FTL, PTL, warehousing, distribution, dedicated fleet, supply chain management, last mile delivery, e-commerce logistics, and express cargo.',
  keywords: [
    'logistics services india',
    'FTL services hyderabad',
    'PTL transport company',
    'warehousing services telangana',
    'supply chain management india',
    'last mile delivery hyderabad',
  ],
};

const serviceIcons: Record<string, React.ElementType> = {
  ftl: Truck,
  ptl: Package,
  warehousing: Warehouse,
  distribution: Route,
  'dedicated-fleet': CarFront,
  'supply-chain': Network,
  'last-mile': MapPin,
  ecommerce: ShoppingCart,
  'express-cargo': Zap,
};

export default function ServicesPage() {
  const services = Object.values(servicesData);

  return (
    <>
      <PageHero
        title="Our Logistics Services"
        subtitle="End-to-end transportation, warehousing, and supply chain solutions designed to power your business growth across India."
        breadcrumbs={[{ label: 'Services' }]}
      />

      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = serviceIcons[service.slug] || Truck;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group block"
                >
                  <div className="h-full p-6 bg-white rounded-2xl border border-gray-100 hover:border-secondary/30 shadow-card hover:shadow-card-hover transition-all duration-300">
                    <div className="w-12 h-12 bg-primary/5 group-hover:bg-secondary/10 rounded-xl flex items-center justify-center mb-4 transition-colors">
                      <Icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                    </div>
                    <h3 className="text-heading-md font-heading font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-body-sm text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-secondary">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Need a Customized Logistics Solution?"
        subtitle="Tell us your requirements and our logistics experts will design a tailored solution for your business."
      />
    </>
  );
}
