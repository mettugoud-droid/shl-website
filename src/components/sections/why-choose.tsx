'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Clock,
  MapPin,
  Headphones,
  Truck,
  BarChart3,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const features = [
  {
    icon: Shield,
    title: 'GST Registered & Verified',
    description:
      'We are a fully GST registered logistics company ensuring complete compliance, transparent billing, and hassle-free documentation for all shipments.',
  },
  {
    icon: Clock,
    title: '98% On-Time Delivery',
    description:
      'Our commitment to punctuality is backed by real performance data. We maintain a 98% on-time delivery rate across all service categories nationwide.',
  },
  {
    icon: MapPin,
    title: 'Pan India Network',
    description:
      'With coverage spanning 500+ cities and 28 states, our extensive network ensures your goods reach any corner of India reliably and efficiently.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support Team',
    description:
      'Our experienced logistics specialists are available Monday to Saturday, 9 AM to 7 PM, with emergency support on Sundays for urgent shipments.',
  },
  {
    icon: Truck,
    title: 'Modern Fleet Management',
    description:
      'GPS-tracked vehicles, well-maintained fleet, and experienced drivers ensure your cargo is always safe, secure, and trackable in real-time.',
  },
  {
    icon: BarChart3,
    title: 'Cost-Effective Solutions',
    description:
      'Optimized routes, consolidated shipments, and efficient operations translate to competitive pricing without compromising service quality.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function WhyChooseSection() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          badge="Why Choose SHL"
          title="The Logistics Partner You Can Trust"
          subtitle="Over 1000+ businesses across India trust Sri Harinath Logistics for their transportation and supply chain needs. Here's why they choose us."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group p-6 lg:p-8 rounded-2xl border border-gray-100 hover:border-secondary/20 bg-white hover:bg-accent transition-all duration-300 hover:shadow-card-hover"
              >
                <div className="w-12 h-12 bg-secondary/10 group-hover:bg-secondary/20 rounded-xl flex items-center justify-center mb-5 transition-colors">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-heading-md font-heading font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-body-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
