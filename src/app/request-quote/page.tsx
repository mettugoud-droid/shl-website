import type { Metadata } from 'next';
import { Phone, Clock, Shield, CheckCircle } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { PageHero } from '@/components/shared/page-hero';
import { QuoteForm } from '@/components/forms/quote-form';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Request a Free Quote',
  description:
    'Get a free, customized logistics quote from Sri Harinath Logistics within 2 hours. FTL, PTL, warehousing, distribution, and supply chain services across India.',
  keywords: [
    'logistics quote india',
    'transport quote hyderabad',
    'FTL quote',
    'PTL quote',
    'warehousing quote',
    'free logistics quote',
  ],
};

const benefits = [
  'Customized quote within 2 hours',
  'No obligation, no hidden costs',
  'Competitive pricing guaranteed',
  'Dedicated logistics consultant assigned',
  'Multiple service options provided',
  'Volume discounts for regular shipments',
];

export default function RequestQuotePage() {
  return (
    <>
      <PageHero
        title="Request a Free Quote"
        subtitle="Tell us your logistics requirements and our team will provide a customized, competitive quote within 2 hours. No obligations."
        breadcrumbs={[{ label: 'Request Quote' }]}
      />

      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-heading-xl font-heading font-bold text-primary mb-2">
                  Why Get a Quote From SHL?
                </h2>
                <p className="text-body-md text-gray-600">
                  We provide transparent, competitive pricing tailored to your specific logistics requirements.
                </p>
              </div>

              {/* Benefits */}
              <div className="p-6 bg-accent rounded-2xl border border-gray-100">
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust Badges */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                  <Shield className="w-8 h-8 text-secondary" />
                  <div>
                    <p className="text-sm font-semibold text-primary">Registered & Compliant</p>
                    <p className="text-xs text-gray-500">Fully verified logistics partner</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                  <Clock className="w-8 h-8 text-secondary" />
                  <div>
                    <p className="text-sm font-semibold text-primary">Quick Response Time</p>
                    <p className="text-xs text-gray-500">Quotes delivered within 2 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                  <Phone className="w-8 h-8 text-secondary" />
                  <div>
                    <p className="text-sm font-semibold text-primary">Need Immediate Help?</p>
                    <p className="text-xs text-gray-500">
                      Call: <a href={`tel:${siteConfig.contact.phone}`} className="text-secondary font-medium">{siteConfig.contact.phone}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-card">
                <h3 className="text-heading-lg font-heading font-semibold text-primary mb-2">
                  Fill Your Requirements
                </h3>
                <p className="text-body-sm text-gray-500 mb-6">
                  Provide your shipment details and we&apos;ll design the most cost-effective logistics solution.
                </p>
                <QuoteForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
