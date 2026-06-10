'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Warehouse, Truck, Route, CheckCircle } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const networkStats = [
  { icon: MapPin, value: '28', label: 'States Covered' },
  { icon: Route, value: '500+', label: 'Cities Connected' },
  { icon: Warehouse, value: '50+', label: 'Hubs & Centers' },
  { icon: Truck, value: '1000+', label: 'Pin Codes Served' },
];

const hubs = [
  {
    region: 'Telangana & Andhra Pradesh (Primary)',
    isPrimary: true,
    locations: [
      { city: 'Hyderabad', type: 'Head Office & Main Hub' },
      { city: 'Secunderabad', type: 'Operations Hub' },
      { city: 'Warangal', type: 'Regional Hub' },
      { city: 'Vijayawada', type: 'Distribution Center' },
      { city: 'Visakhapatnam', type: 'Regional Hub' },
      { city: 'Tirupati', type: 'Collection Point' },
      { city: 'Guntur', type: 'Distribution Point' },
      { city: 'Kakinada', type: 'Collection Point' },
    ],
  },
  {
    region: 'South India',
    isPrimary: true,
    locations: [
      { city: 'Chennai', type: 'Major Hub' },
      { city: 'Bangalore', type: 'Major Hub' },
      { city: 'Kochi', type: 'Regional Hub' },
      { city: 'Coimbatore', type: 'Distribution Center' },
      { city: 'Madurai', type: 'Collection Point' },
      { city: 'Mysore', type: 'Distribution Point' },
      { city: 'Mangalore', type: 'Collection Point' },
      { city: 'Trivandrum', type: 'Regional Hub' },
    ],
  },
  {
    region: 'West India',
    isPrimary: false,
    locations: [
      { city: 'Mumbai', type: 'Major Hub' },
      { city: 'Pune', type: 'Regional Hub' },
      { city: 'Ahmedabad', type: 'Distribution Center' },
      { city: 'Surat', type: 'Collection Point' },
      { city: 'Nagpur', type: 'Regional Hub' },
      { city: 'Nashik', type: 'Distribution Point' },
      { city: 'Goa', type: 'Collection Point' },
      { city: 'Vadodara', type: 'Collection Point' },
    ],
  },
  {
    region: 'North India',
    isPrimary: false,
    locations: [
      { city: 'Delhi NCR', type: 'Major Hub' },
      { city: 'Jaipur', type: 'Regional Hub' },
      { city: 'Lucknow', type: 'Distribution Center' },
      { city: 'Chandigarh', type: 'Regional Hub' },
      { city: 'Indore', type: 'Collection Point' },
      { city: 'Bhopal', type: 'Collection Point' },
      { city: 'Kanpur', type: 'Distribution Point' },
      { city: 'Agra', type: 'Collection Point' },
    ],
  },
  {
    region: 'East India',
    isPrimary: false,
    locations: [
      { city: 'Kolkata', type: 'Major Hub' },
      { city: 'Bhubaneswar', type: 'Regional Hub' },
      { city: 'Patna', type: 'Distribution Center' },
      { city: 'Ranchi', type: 'Collection Point' },
      { city: 'Guwahati', type: 'Regional Hub' },
      { city: 'Raipur', type: 'Distribution Point' },
      { city: 'Jamshedpur', type: 'Collection Point' },
      { city: 'Siliguri', type: 'Collection Point' },
    ],
  },
];

const transitTimes = [
  { route: 'Hyderabad – Chennai', time: '12-16 hrs' },
  { route: 'Hyderabad – Bangalore', time: '10-14 hrs' },
  { route: 'Hyderabad – Mumbai', time: '14-18 hrs' },
  { route: 'Hyderabad – Delhi', time: '28-36 hrs' },
  { route: 'Hyderabad – Kolkata', time: '30-38 hrs' },
  { route: 'Hyderabad – Vijayawada', time: '5-7 hrs' },
  { route: 'Hyderabad – Visakhapatnam', time: '10-12 hrs' },
  { route: 'Hyderabad – Pune', time: '10-14 hrs' },
];

export function NetworkContent() {
  return (
    <>
      {/* Network Stats */}
      <section className="py-10 bg-accent border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {networkStats.map((stat, index) => {
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
                  <p className="text-2xl md:text-3xl font-heading font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Hub Network */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            badge="Hub Network"
            title="Strategic Hub Locations"
            subtitle="Our hubs are strategically positioned near major highways, industrial zones, and commercial areas for faster transit and efficient operations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hubs.map((hub, index) => (
              <motion.div
                key={hub.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-card-hover ${
                  hub.isPrimary
                    ? 'bg-white border-secondary/20 shadow-card'
                    : 'bg-white border-gray-100'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className={`w-5 h-5 ${hub.isPrimary ? 'text-secondary' : 'text-primary'}`} />
                  <h3 className="text-sm font-heading font-semibold text-primary">
                    {hub.region}
                  </h3>
                </div>
                <div className="space-y-2">
                  {hub.locations.map((location) => (
                    <div key={location.city} className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-3.5 h-3.5 text-success" />
                        {location.city}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full">
                        {location.type}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Transit Times */}
      <section className="section-padding bg-accent">
        <Container size="sm">
          <SectionHeading
            badge="Transit Times"
            title="Estimated Delivery Times"
            subtitle="Approximate FTL transit times from our Hyderabad hub to major cities. Actual times may vary based on load, route, and weather conditions."
          />

          <div className="bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-4 bg-primary text-white text-sm font-medium">
              <span>Route</span>
              <span className="text-center">Transit Time (FTL)</span>
              <span className="text-right">Service</span>
            </div>
            {transitTimes.map((item, index) => (
              <motion.div
                key={item.route}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="grid grid-cols-3 gap-4 p-4 border-t border-gray-100 text-sm items-center hover:bg-accent/50 transition-colors"
              >
                <span className="text-gray-700 font-medium">{item.route}</span>
                <span className="text-center text-secondary font-semibold">{item.time}</span>
                <span className="text-right">
                  <span className="px-2 py-0.5 bg-success-light text-green-700 text-xs rounded-full">
                    Active
                  </span>
                </span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
