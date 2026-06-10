'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  Store,
  Factory,
  Pill,
  Car,
  ShoppingCart,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const industries = [
  {
    icon: ShoppingBag,
    title: 'FMCG',
    description: 'Temperature-controlled transport, multi-point distribution, and just-in-time delivery for fast-moving consumer goods across retail networks.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Store,
    title: 'Retail',
    description: 'Store replenishment, seasonal surge handling, and seamless supply chain management for retail chains and department stores.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Raw material inbound logistics, finished goods distribution, and plant-to-plant transfers with scheduling precision.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Pill,
    title: 'Pharmaceuticals',
    description: 'GDP-compliant transport, cold chain logistics, and secure handling for pharmaceutical products and medical devices.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Car,
    title: 'Automotive',
    description: 'Just-in-sequence delivery, spare parts distribution, and specialized handling for automotive components and assemblies.',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Fulfillment center operations, last mile delivery, returns management, and COD handling for online marketplaces and D2C brands.',
    color: 'bg-orange-50 text-orange-600',
  },
];

export function IndustriesSection() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          badge="Industries We Serve"
          title="Specialized Solutions for Every Sector"
          subtitle="Our deep industry expertise allows us to design logistics solutions that address the unique challenges and compliance requirements of each sector."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-secondary/20 hover:shadow-card-hover transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${industry.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-heading-md font-heading font-semibold text-primary mb-2">
                  {industry.title}
                </h3>
                <p className="text-body-sm text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
          >
            Explore All Industries
            <motion.span whileHover={{ x: 4 }}>→</motion.span>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
