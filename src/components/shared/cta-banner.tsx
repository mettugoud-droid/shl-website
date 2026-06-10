'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { siteConfig } from '@/config/site';
import { getWhatsAppUrl } from '@/lib/utils';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  variant?: 'primary' | 'secondary';
}

export function CTABanner({
  title = 'Ready to Get Started?',
  subtitle = 'Get a free, customized logistics quote within 2 hours. No obligations, no hidden costs.',
  variant = 'primary',
}: CTABannerProps) {
  return (
    <section
      className={`section-padding ${
        variant === 'primary' ? 'bg-gradient-hero' : 'bg-gradient-to-r from-secondary-500 to-secondary-400'
      }`}
    >
      <Container>
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-white/80 mb-8">{subtitle}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/request-quote">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-50 shadow-lg">
                Request Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href={`tel:${siteConfig.contact.phone}`}>
              <Button size="lg" variant="outline-light">
                <Phone className="w-5 h-5 mr-2" />
                Call {siteConfig.contact.phone}
              </Button>
            </a>
            <a
              href={getWhatsAppUrl('Hi! I am interested in your logistics services.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="whatsapp">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
