'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
import { SectionHeading } from '@/components/ui/section-heading';

const services = [
  {
    icon: Truck,
    title: 'Full Truck Load (FTL)',
    description: 'Dedicated full truck shipments for large consignments with door-to-door delivery across India. Ideal for bulk cargo and time-sensitive loads.',
    href: '/services/ftl',
  },
  {
    icon: Package,
    title: 'Part Truck Load (PTL)',
    description: 'Cost-effective shared transport for smaller loads. Consolidate your shipments with other cargo for maximum savings without delays.',
    href: '/services/ptl',
  },
  {
    icon: Warehouse,
    title: 'Warehousing Solutions',
    description: 'Secure, modern warehousing facilities with inventory management, order fulfillment, and value-added services across key locations.',
    href: '/services/warehousing',
  },
  {
    icon: Route,
    title: 'Distribution Services',
    description: 'End-to-end product distribution with route optimization, multi-point deliveries, and real-time tracking for complete visibility.',
    href: '/services/distribution',
  },
  {
    icon: CarFront,
    title: 'Dedicated Fleet Services',
    description: 'Exclusive fleet deployed for your business operations. Customized vehicle types, dedicated drivers, and full operational control.',
    href: '/services/dedicated-fleet',
  },
  {
    icon: Network,
    title: 'Supply Chain Management',
    description: 'Comprehensive supply chain optimization from sourcing to delivery. Reduce costs, improve efficiency, and gain competitive advantage.',
    href: '/services/supply-chain',
  },
  {
    icon: MapPin,
    title: 'Last Mile Delivery',
    description: 'Reliable last mile delivery solutions ensuring your products reach end customers on time with proof of delivery and real-time updates.',
    href: '/services/last-mile',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Logistics',
    description: 'Specialized fulfillment for online businesses including pick-pack-ship, returns management, and COD handling across India.',
    href: '/services/ecommerce',
  },
  {
    icon: Zap,
    title: 'Express Cargo Services',
    description: 'Time-critical express deliveries with guaranteed transit times. Next-day and same-day delivery options for urgent shipments.',
    href: '/services/express-cargo',
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-accent">
      <Container>
        <SectionHeading
          badge="Our Services"
          title="Comprehensive Logistics Solutions"
          subtitle="From FTL and PTL transport to warehousing and supply chain management, SHL provides end-to-end logistics services tailored to your business needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link href={service.href} className="block h-full">
                  <div className="h-full p-6 bg-white rounded-2xl border border-gray-100 hover:border-secondary/30 shadow-card hover:shadow-card-hover transition-all duration-300 group">
                    <div className="w-11 h-11 bg-primary/5 group-hover:bg-secondary/10 rounded-xl flex items-center justify-center mb-4 transition-colors">
                      <Icon className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
                    </div>
                    <h3 className="text-heading-sm font-heading font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-body-sm text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
