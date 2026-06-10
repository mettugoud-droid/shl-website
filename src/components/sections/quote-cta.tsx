'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Headphones, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { siteConfig } from '@/config/site';

export function QuoteCTASection() {
  return (
    <section className="relative py-12 bg-gradient-to-r from-secondary-500 to-secondary-400 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }} />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            className="text-white text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">
              Ready to Streamline Your Logistics?
            </h3>
            <p className="text-white/90 text-lg">
              Get a customized quote within 2 hours. No obligations.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/request-quote">
              <Button
                size="lg"
                variant="primary"
                className="bg-white text-secondary hover:bg-gray-50 shadow-lg"
              >
                <FileText className="w-5 h-5 mr-2" />
                Request Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href={`tel:${siteConfig.contact.phone}`}>
              <Button
                size="lg"
                variant="outline-light"
                className="border-white text-white hover:bg-white hover:text-secondary"
              >
                <Headphones className="w-5 h-5 mr-2" />
                Talk to Expert
              </Button>
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
