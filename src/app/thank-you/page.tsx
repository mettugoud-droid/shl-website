import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Phone, MessageCircle, ArrowRight, Home } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { getWhatsAppUrl } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Thank you for contacting Sri Harinath Logistics. Our team will respond shortly.',
};

export default function ThankYouPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center py-20 bg-accent">
      <Container size="sm">
        <div className="text-center max-w-lg mx-auto">
          {/* Success Icon */}
          <div className="relative inline-flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-success-light rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-success" />
            </div>
            <div className="absolute inset-0 w-20 h-20 bg-success/20 rounded-full animate-ping" />
          </div>

          {/* Heading */}
          <h1 className="text-display-sm font-heading font-bold text-primary mb-4">
            Thank You!
          </h1>
          <p className="text-body-lg text-gray-600 mb-2">
            Your inquiry has been submitted successfully.
          </p>
          <p className="text-body-md text-gray-500 mb-8">
            Our logistics specialist will review your requirements and contact you shortly.
          </p>

          {/* What Happens Next */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 mb-8 text-left">
            <h3 className="text-heading-sm font-heading font-semibold text-primary mb-4">
              What Happens Next?
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-secondary">1</span>
                </span>
                <p className="text-body-sm text-gray-600">
                  Our team reviews your requirements (within 2 hours during business hours)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-secondary">2</span>
                </span>
                <p className="text-body-sm text-gray-600">
                  A logistics consultant contacts you with a customized solution and competitive quote
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-secondary">3</span>
                </span>
                <p className="text-body-sm text-gray-600">
                  Confirm booking and we handle the rest — pickup, transit, and delivery
                </p>
              </div>
            </div>
          </div>

          {/* Immediate Assistance */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 mb-8">
            <h3 className="text-heading-sm font-heading font-semibold text-primary mb-3">
              Need Immediate Assistance?
            </h3>
            <p className="text-body-sm text-gray-500 mb-4">
              Chat with our logistics team on WhatsApp for instant support.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={`tel:${siteConfig.contact.phone}`}>
                <Button variant="primary" size="default">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
              <a
                href={getWhatsAppUrl('Hi! I just submitted an inquiry on your website. Need quick assistance.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="whatsapp" size="default">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>

          {/* Back to Home */}
          <Link href="/">
            <Button variant="ghost" size="default">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
