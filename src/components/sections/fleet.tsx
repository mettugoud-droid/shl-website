'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Gauge, Shield, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const vehicles = [
  {
    type: 'Mini Trucks',
    capacity: '1-3 Tons',
    description: 'Ideal for city deliveries and small consignments',
    count: '50+',
  },
  {
    type: 'LCV (Light Commercial)',
    capacity: '3-7 Tons',
    description: 'Perfect for inter-city PTL and medium loads',
    count: '100+',
  },
  {
    type: 'ICV (Intermediate)',
    capacity: '7-15 Tons',
    description: 'Versatile for regional FTL shipments',
    count: '80+',
  },
  {
    type: 'Heavy Trucks',
    capacity: '15-25 Tons',
    description: 'Long-haul FTL across national highways',
    count: '120+',
  },
  {
    type: 'Multi-Axle Vehicles',
    capacity: '25-40 Tons',
    description: 'High-capacity transport for bulk cargo',
    count: '40+',
  },
  {
    type: 'Container Trucks',
    capacity: '20-40 ft',
    description: 'Weatherproof containers for sensitive cargo',
    count: '60+',
  },
];

const features = [
  { icon: Gauge, label: 'GPS Tracked', value: '100%' },
  { icon: Shield, label: 'Insured Fleet', value: 'Full' },
  { icon: Truck, label: 'Total Vehicles', value: '450+' },
  { icon: MapPin, label: 'Routes Covered', value: '1000+' },
];

export function FleetSection() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          badge="Our Fleet"
          title="Modern & Well-Maintained Fleet"
          subtitle="Our diverse fleet of 450+ vehicles is equipped with GPS tracking, regularly maintained, and operated by experienced drivers to ensure safe and timely deliveries."
        />

        {/* Fleet Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-5 rounded-2xl bg-accent border border-gray-100"
              >
                <Icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-2xl font-heading font-bold text-primary">{feature.value}</p>
                <p className="text-xs text-gray-500 mt-1">{feature.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.type}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-secondary/20 hover:shadow-card transition-all duration-300"
            >
              <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                <Truck className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm font-heading font-semibold text-primary">
                    {vehicle.type}
                  </h3>
                  <span className="text-[10px] px-2 py-0.5 bg-secondary/10 text-secondary-700 rounded-full font-medium">
                    {vehicle.count}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-1">Capacity: {vehicle.capacity}</p>
                <p className="text-xs text-gray-400">{vehicle.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
