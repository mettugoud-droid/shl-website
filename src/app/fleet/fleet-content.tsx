'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Gauge, Shield, Wrench, MapPin, Fuel, CheckCircle } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const fleetStats = [
  { icon: Truck, value: '450+', label: 'Total Vehicles' },
  { icon: Gauge, value: '100%', label: 'GPS Tracked' },
  { icon: Shield, value: '100%', label: 'Fully Insured' },
  { icon: Wrench, value: 'Bi-weekly', label: 'Maintenance Cycle' },
];

const vehicles = [
  {
    type: 'Mini Trucks (Tata Ace, Bolero Pickup)',
    capacity: '1 – 3 Tons',
    count: '50+',
    dimensions: '7ft x 4.5ft x 4.5ft',
    idealFor: ['City deliveries', 'Small consignments', 'Last-mile cargo', 'E-commerce parcels'],
    features: ['Enclosed/open body options', 'GPS tracked', 'City permit compliant'],
  },
  {
    type: 'LCV (Eicher 14ft, Tata 407)',
    capacity: '3 – 7 Tons',
    count: '100+',
    dimensions: '14ft x 6ft x 6ft',
    idealFor: ['Inter-city PTL', 'Medium loads', 'Regional distribution', 'Retail replenishment'],
    features: ['Containerized body', 'GPS tracked', 'Multi-city permits'],
  },
  {
    type: 'ICV (Eicher 19ft, Tata 1109)',
    capacity: '7 – 15 Tons',
    count: '80+',
    dimensions: '19ft x 7ft x 7ft',
    idealFor: ['Regional FTL', 'Manufacturing goods', 'Bulk distribution', 'Warehouse transfers'],
    features: ['High-capacity body', 'GPS + telematics', 'All-India permit'],
  },
  {
    type: 'Heavy Trucks (Tata 2518, Ashok Leyland)',
    capacity: '15 – 25 Tons',
    count: '120+',
    dimensions: '22ft x 7.5ft x 7ft',
    idealFor: ['Long-haul FTL', 'National highways', 'Bulk cargo', 'Industrial goods'],
    features: ['Multi-lock system', 'GPS + driver tracking', 'National permit'],
  },
  {
    type: 'Multi-Axle Vehicles (MAV)',
    capacity: '25 – 40 Tons',
    count: '40+',
    dimensions: '32ft x 8ft x 8ft',
    idealFor: ['Heavy bulk cargo', 'Raw materials', 'ODC (Over Dimensional Cargo)', 'Project logistics'],
    features: ['Heavy-duty chassis', 'Hydraulic braking', 'GPS monitored'],
  },
  {
    type: 'Container Trucks (20ft & 40ft)',
    capacity: '20 – 40 ft Containers',
    count: '60+',
    dimensions: '20ft / 40ft standard',
    idealFor: ['Weatherproof cargo', 'Sensitive goods', 'Export/import logistics', 'Sealed shipments'],
    features: ['Weatherproof sealed containers', 'Temperature monitoring available', 'GPS tracked'],
  },
];

const safetyFeatures = [
  'All vehicles undergo bi-weekly preventive maintenance',
  'Experienced and verified drivers with minimum 5 years experience',
  'Comprehensive cargo insurance on all vehicles',
  'GPS tracking with geo-fencing and route deviation alerts',
  'Speed governors and driver behavior monitoring',
  'Fire extinguishers and first-aid kits in every vehicle',
  'Annual fitness certificate and pollution checks',
  'Night driving protocols with mandatory rest stops',
];

export function FleetContent() {
  return (
    <>
      {/* Fleet Stats */}
      <section className="py-10 bg-accent border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {fleetStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-5 bg-white rounded-2xl shadow-card"
                >
                  <Icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <p className="text-2xl font-heading font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Vehicle Types */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            badge="Vehicle Types"
            title="Right Vehicle for Every Shipment"
            subtitle="Our diverse fleet ensures optimal vehicle allocation based on your cargo type, weight, volume, and delivery requirements."
          />

          <div className="space-y-6">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 rounded-2xl border border-gray-100 hover:border-secondary/20 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {/* Vehicle Info */}
                  <div className="md:col-span-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center">
                        <Truck className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-xs px-2 py-0.5 bg-secondary/10 text-secondary-700 rounded-full font-medium">
                        {vehicle.count}
                      </span>
                    </div>
                    <h3 className="text-sm font-heading font-semibold text-primary mb-1">
                      {vehicle.type}
                    </h3>
                    <p className="text-xs text-gray-500">Capacity: {vehicle.capacity}</p>
                    <p className="text-xs text-gray-400">Dims: {vehicle.dimensions}</p>
                  </div>

                  {/* Ideal For */}
                  <div className="md:col-span-1">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Ideal For
                    </h4>
                    <ul className="space-y-1">
                      {vehicle.idealFor.map((item) => (
                        <li key={item} className="text-sm text-gray-600 flex items-center gap-1.5">
                          <CheckCircle className="w-3 h-3 text-success" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div className="md:col-span-1">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Features
                    </h4>
                    <ul className="space-y-1">
                      {vehicle.features.map((feature) => (
                        <li key={feature} className="text-sm text-gray-600 flex items-center gap-1.5">
                          <Shield className="w-3 h-3 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="md:col-span-1 flex items-center justify-center">
                    <a
                      href="/request-quote"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 hover:bg-secondary/20 text-secondary-700 text-sm font-medium rounded-xl transition-colors"
                    >
                      Book Now →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Safety & Maintenance */}
      <section className="section-padding bg-accent">
        <Container size="sm">
          <SectionHeading
            badge="Safety First"
            title="Fleet Safety & Maintenance"
            subtitle="We invest heavily in maintaining the highest safety standards across our entire fleet to ensure cargo protection and driver well-being."
          />

          <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {safetyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-body-sm text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
