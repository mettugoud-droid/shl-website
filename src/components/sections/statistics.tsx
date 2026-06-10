'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';

const statistics = [
  { value: '10+', label: 'Years of Experience', suffix: '' },
  { value: '1000+', label: 'Satisfied Clients', suffix: '' },
  { value: '500+', label: 'Cities Covered', suffix: '' },
  { value: '10K+', label: 'Monthly Deliveries', suffix: '' },
  { value: '450+', label: 'Fleet Vehicles', suffix: '' },
  { value: '98%', label: 'On-Time Delivery', suffix: '' },
];

export function StatisticsSection() {
  return (
    <section className="relative py-16 bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="text-center"
            >
              <motion.p
                className="text-3xl md:text-4xl font-heading font-bold text-secondary"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 + 0.2 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-sm text-white/80 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
