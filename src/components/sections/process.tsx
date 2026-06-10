'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  PackageCheck,
  Truck,
  CheckCircle2,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const steps = [
  {
    step: 1,
    icon: FileText,
    title: 'Request Quote',
    description:
      'Submit your logistics requirements through our online form, WhatsApp, or phone call. Our team responds within 2 hours with a customized quote.',
  },
  {
    step: 2,
    icon: PackageCheck,
    title: 'Confirm & Schedule',
    description:
      'Review the quote, confirm your booking, and schedule pickup. We handle all documentation and provide a dedicated tracking ID for your shipment.',
  },
  {
    step: 3,
    icon: Truck,
    title: 'Pickup & Transit',
    description:
      'Our verified driver arrives on schedule for pickup. Track your shipment in real-time as it moves through our optimized delivery network.',
  },
  {
    step: 4,
    icon: CheckCircle2,
    title: 'Safe Delivery',
    description:
      'Your cargo is delivered safely at the destination with proof of delivery. Receive delivery confirmation via SMS and email notification.',
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding bg-accent">
      <Container>
        <SectionHeading
          badge="How It Works"
          title="Simple 4-Step Process"
          subtitle="Getting started with Sri Harinath Logistics is easy. Our streamlined process ensures your shipments are handled professionally from start to finish."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-secondary/30 to-secondary/10" />
                )}

                {/* Step Circle */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-card border border-gray-100 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-secondary text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-heading-sm font-heading font-semibold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-body-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
