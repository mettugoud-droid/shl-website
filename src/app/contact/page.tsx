import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { PageHero } from '@/components/shared/page-hero';
import { ContactForm } from '@/components/forms/contact-form';
import { siteConfig } from '@/config/site';
import { getWhatsAppUrl } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Sri Harinath Logistics for quotes, support, or general inquiries. Call +91 70757 42929, email quotes@sriharinathlogistics.com, or visit our office in Secunderabad.',
  keywords: [
    'contact logistics company',
    'SHL contact',
    'logistics hyderabad contact',
    'transport company phone number',
  ],
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have questions? Need a quote? Our logistics team is ready to help. Reach out through any channel convenient for you."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-heading-xl font-heading font-bold text-primary mb-2">
                  Get In Touch
                </h2>
                <p className="text-body-md text-gray-600">
                  We&apos;re here to answer your questions and provide customized logistics solutions for your business.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 hover:border-secondary/20 hover:shadow-card transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-primary">Phone</h3>
                    <p className="text-sm text-gray-600">{siteConfig.contact.phone}</p>
                    <p className="text-xs text-gray-400 mt-0.5">Mon-Sat, 9 AM – 7 PM</p>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.contact.primaryEmail}`}
                  className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 hover:border-secondary/20 hover:shadow-card transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-primary">Email</h3>
                    <p className="text-sm text-gray-600">{siteConfig.contact.primaryEmail}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{siteConfig.contact.secondaryEmail}</p>
                  </div>
                </a>

                <a
                  href={getWhatsAppUrl('Hi! I need logistics services. Please share details.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-card transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-primary">WhatsApp</h3>
                    <p className="text-sm text-gray-600">Chat with us instantly</p>
                    <p className="text-xs text-gray-400 mt-0.5">Quick response guaranteed</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-primary">Office Address</h3>
                    <p className="text-sm text-gray-600">{siteConfig.address.full}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-primary">Business Hours</h3>
                    <p className="text-sm text-gray-600">{siteConfig.hours.weekday}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{siteConfig.hours.weekend}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-card">
                <h3 className="text-heading-lg font-heading font-semibold text-primary mb-2">
                  Send Us a Message
                </h3>
                <p className="text-body-sm text-gray-500 mb-6">
                  Fill the form below and our team will respond within 2 hours during business hours.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
