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
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';

const industries = [
  {
    icon: ShoppingBag,
    title: 'FMCG & Consumer Goods',
    color: 'bg-blue-50 text-blue-600 border-blue-100',
    description:
      'Fast-moving consumer goods demand precision logistics with tight delivery windows, multi-point distribution, and temperature sensitivity. Our FMCG logistics solution covers primary, secondary, and tertiary distribution with optimized routes and real-time visibility.',
    challenges: [
      'High-frequency multi-point deliveries',
      'Strict shelf-life and freshness requirements',
      'Seasonal demand surges (festivals, promotions)',
      'Multiple SKU management',
    ],
    solutions: [
      'Daily scheduled distribution runs across dealer networks',
      'Temperature-monitored vehicles for sensitive products',
      'Demand-based fleet scaling during peak seasons',
      'Digital POD and real-time delivery confirmation',
      'Route optimization for maximum delivery density',
      'Dedicated distribution management teams',
    ],
    clients: 'Leading FMCG brands across Telangana, AP, and South India',
  },
  {
    icon: Store,
    title: 'Retail & Modern Trade',
    color: 'bg-purple-50 text-purple-600 border-purple-100',
    description:
      'Retail logistics requires precision timing, store-level compliance, and the ability to handle both replenishment and promotional loads. We ensure your stores are never out of stock with reliable scheduled deliveries.',
    challenges: [
      'Store-specific delivery windows and dock schedules',
      'Mixed-case handling and store-level sorting',
      'High peak-season volumes',
      'Returns and reverse logistics',
    ],
    solutions: [
      'Scheduled store replenishment with time-slot delivery',
      'Break-bulk and store-level sorting at distribution hubs',
      'Flexible capacity for promotional surges',
      'Integrated returns collection and processing',
      'Compliance with retail chain delivery standards',
      'Monthly performance reporting and SLA tracking',
    ],
    clients: 'Regional and national retail chains, supermarkets, and department stores',
  },
  {
    icon: Factory,
    title: 'Manufacturing & Industrial',
    color: 'bg-amber-50 text-amber-600 border-amber-100',
    description:
      'Manufacturing logistics demands just-in-time reliability and careful handling of raw materials, components, and finished goods. We provide end-to-end logistics from vendor pickup to plant delivery to market distribution.',
    challenges: [
      'Production line dependency on material delivery',
      'Heavy and oversized cargo handling',
      'Multi-plant coordination and transfers',
      'Vendor milk-run collections',
    ],
    solutions: [
      'Just-in-time (JIT) delivery aligned with production schedules',
      'Heavy-duty and specialized vehicle fleet',
      'Inter-plant transfers with priority scheduling',
      'Vendor collection routes and milk-run services',
      'Finished goods warehousing and distribution',
      'Safety and compliance documentation management',
    ],
    clients: 'Manufacturing plants, engineering companies, and industrial units across India',
  },
  {
    icon: Pill,
    title: 'Pharmaceuticals & Healthcare',
    color: 'bg-green-50 text-green-600 border-green-100',
    description:
      'Pharmaceutical logistics requires strict compliance with Good Distribution Practices (GDP), temperature control, batch tracking, and secure handling. We provide compliant transport that maintains product integrity from factory to pharmacy.',
    challenges: [
      'Temperature-sensitive products (2-8°C, 15-25°C)',
      'Regulatory compliance and documentation',
      'Batch traceability and expiry management',
      'Secure handling of controlled substances',
    ],
    solutions: [
      'Temperature-controlled vehicles with data loggers',
      'GDP-compliant transport and handling procedures',
      'Batch-level tracking and documentation',
      'Secure vehicles for controlled substance transport',
      'Dedicated pharma-trained handling staff',
      'Cold chain integrity validation reports',
    ],
    clients: 'Pharmaceutical manufacturers, distributors, hospitals, and medical device companies',
  },
  {
    icon: Car,
    title: 'Automotive & Auto Parts',
    color: 'bg-red-50 text-red-600 border-red-100',
    description:
      'Automotive logistics requires precision sequencing, damage-free transport, and the ability to handle everything from small components to complete assemblies. Our automotive solutions support both OEM supply chains and aftermarket distribution.',
    challenges: [
      'Just-in-sequence (JIS) delivery requirements',
      'Zero-damage tolerance for finished components',
      'Aftermarket spare parts network management',
      'Multi-vendor consolidation',
    ],
    solutions: [
      'Sequenced delivery aligned with production lines',
      'Custom packaging and damage-prevention measures',
      'Pan-India spare parts distribution network',
      'Vendor consolidation and cross-dock services',
      'Reverse logistics for defective parts and cores',
      'Dedicated automotive fleet with proper fixtures',
    ],
    clients: 'OEMs, tier-1 suppliers, spare parts distributors, and auto dealerships',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce & D2C',
    color: 'bg-orange-50 text-orange-600 border-orange-100',
    description:
      'E-commerce logistics demands speed, accuracy, and flexibility at scale. From warehouse operations to last-mile delivery, we provide complete fulfillment solutions that help online businesses deliver superior customer experiences.',
    challenges: [
      'High volume, small parcel operations',
      'Same-day and next-day delivery expectations',
      'High return rates and reverse logistics',
      'COD management and reconciliation',
    ],
    solutions: [
      'Complete fulfillment: pick, pack, ship operations',
      'Same-day dispatch for orders before 2 PM cutoff',
      'Returns management with quality check and restocking',
      'COD collection with daily reconciliation',
      'Multi-marketplace integration (Amazon, Flipkart, Shopify)',
      'Scalable capacity for sale season and flash sales',
    ],
    clients: 'D2C brands, marketplace sellers, subscription services, and online retailers',
  },
];

export function IndustriesContent() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          badge="Sector Expertise"
          title="Deep Industry Knowledge"
          subtitle="We don't offer one-size-fits-all solutions. Each industry has unique logistics challenges, and we've built specialized capabilities to address them."
        />

        <div className="space-y-12">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-6 md:p-8 rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  {/* Header */}
                  <div className="lg:col-span-2">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${industry.color}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-heading-xl font-heading font-bold text-primary mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-body-sm text-gray-600 leading-relaxed mb-5">
                      {industry.description}
                    </p>
                    <p className="text-xs text-gray-400 italic">{industry.clients}</p>
                  </div>

                  {/* Challenges & Solutions */}
                  <div className="lg:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Challenges */}
                      <div>
                        <h4 className="text-sm font-heading font-semibold text-primary mb-3 uppercase tracking-wider">
                          Industry Challenges
                        </h4>
                        <ul className="space-y-2">
                          {industry.challenges.map((challenge) => (
                            <li key={challenge} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 bg-error rounded-full mt-1.5 flex-shrink-0" />
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Solutions */}
                      <div>
                        <h4 className="text-sm font-heading font-semibold text-primary mb-3 uppercase tracking-wider">
                          Our Solutions
                        </h4>
                        <ul className="space-y-2">
                          {industry.solutions.map((solution) => (
                            <li key={solution} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-body-lg text-gray-600 mb-6">
            Don&apos;t see your industry? We serve many more sectors with customized logistics solutions.
          </p>
          <Link href="/request-quote">
            <Button size="lg">
              Discuss Your Requirements
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
