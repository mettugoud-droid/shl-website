'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const regions = [
  {
    title: 'Telangana & AP',
    cities: ['Hyderabad', 'Secunderabad', 'Warangal', 'Vijayawada', 'Visakhapatnam', 'Tirupati'],
    isPrimary: true,
  },
  {
    title: 'South India',
    cities: ['Chennai', 'Bangalore', 'Kochi', 'Coimbatore', 'Madurai', 'Mysore'],
    isPrimary: true,
  },
  {
    title: 'West India',
    cities: ['Mumbai', 'Pune', 'Ahmedabad', 'Surat', 'Nagpur', 'Goa'],
    isPrimary: false,
  },
  {
    title: 'North India',
    cities: ['Delhi NCR', 'Jaipur', 'Lucknow', 'Chandigarh', 'Indore', 'Bhopal'],
    isPrimary: false,
  },
  {
    title: 'East India',
    cities: ['Kolkata', 'Bhubaneswar', 'Patna', 'Ranchi', 'Guwahati', 'Raipur'],
    isPrimary: false,
  },
];

const coverageStats = [
  { value: '28', label: 'States Covered' },
  { value: '500+', label: 'Cities Served' },
  { value: '1000+', label: 'Pin Codes' },
  { value: '50+', label: 'Hubs & Centers' },
];

export function CoverageSection() {
  return (
    <section className="section-padding bg-accent">
      <Container>
        <SectionHeading
          badge="Network Coverage"
          title="Pan India Logistics Network"
          subtitle="Our extensive network covers 28 states and 500+ cities across India, with strategic hubs in key locations for faster transit times and reliable last-mile connectivity."
        />

        {/* Coverage Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {coverageStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-2xl shadow-card"
            >
              <p className="text-3xl font-heading font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Region Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region, index) => (
            <motion.div
              key={region.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-card-hover ${
                region.isPrimary
                  ? 'bg-white border-secondary/20 shadow-card'
                  : 'bg-white border-gray-100'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  region.isPrimary ? 'bg-secondary/10' : 'bg-primary/5'
                }`}>
                  <MapPin className={`w-4 h-4 ${
                    region.isPrimary ? 'text-secondary' : 'text-primary'
                  }`} />
                </div>
                <h3 className="text-heading-sm font-heading font-semibold text-primary">
                  {region.title}
                </h3>
                {region.isPrimary && (
                  <span className="ml-auto text-[10px] px-2 py-0.5 bg-secondary/10 text-secondary-700 rounded-full font-medium">
                    Primary Hub
                  </span>
                )}
              </div>
              <div className="grid grid-cols-2 gap-2">
                {region.cities.map((city) => (
                  <span key={city} className="flex items-center gap-1.5 text-sm text-gray-600">
                    <CheckCircle className="w-3.5 h-3.5 text-success flex-shrink-0" />
                    {city}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
