'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Truck, Phone, MessageCircle, MapPin, Navigation, Clock, Shield } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { siteConfig } from '@/config/site';
import { getWhatsAppUrl } from '@/lib/utils';

const trackingFeatures = [
  {
    icon: MapPin,
    title: 'Real-Time GPS Location',
    description: 'Track your vehicle on a live map with GPS coordinates updated every 30 seconds.',
  },
  {
    icon: Navigation,
    title: 'Route Progress',
    description: 'See the exact route your vehicle is taking with distance covered and remaining.',
  },
  {
    icon: Clock,
    title: 'Live ETA Updates',
    description: 'Get accurate estimated time of arrival that updates based on real-time traffic and route conditions.',
  },
  {
    icon: Shield,
    title: 'Vehicle Safety Alerts',
    description: 'Receive alerts for speed violations, route deviations, and unscheduled stops.',
  },
];

export function TrackingContent() {
  const [vehicleId, setVehicleId] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!vehicleId.trim()) return;

    setIsSearching(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSearching(false);
    setHasSearched(true);
  };

  return (
    <section className="section-padding bg-white">
      <Container size="sm">
        {/* Search Form */}
        <motion.div
          className="max-w-xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleTrack} className="flex gap-3">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Enter Vehicle Number or Tracking ID"
                value={vehicleId}
                onChange={(e) => setVehicleId(e.target.value)}
                className="h-12"
              />
            </div>
            <Button type="submit" size="lg" disabled={isSearching || !vehicleId.trim()}>
              {isSearching ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Search className="w-5 h-5 mr-2" />
                  Track
                </>
              )}
            </Button>
          </form>
          <p className="text-xs text-gray-400 mt-2 text-center">
            Enter your vehicle number (e.g., TS 09 AB 1234) or tracking ID shared at the time of booking.
          </p>
        </motion.div>

        {/* Results / Info */}
        {hasSearched ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center p-8 bg-accent rounded-2xl border border-gray-100"
          >
            <Truck className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-heading-md font-heading font-semibold text-primary mb-2">
              Live Tracking Available
            </h3>
            <p className="text-body-sm text-gray-600 mb-6 max-w-md mx-auto">
              For live vehicle location and real-time updates, please contact our operations team. They will share the live GPS link for your vehicle.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`tel:${siteConfig.contact.phone}`}>
                <Button variant="primary" size="default">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Operations
                </Button>
              </a>
              <a
                href={getWhatsAppUrl(`Hi! I want to track my vehicle. Vehicle/Tracking ID: ${vehicleId}`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="whatsapp" size="default">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Track via WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Live Tracking Features */}
            <div className="bg-accent rounded-2xl border border-gray-100 p-6 md:p-8 mb-10">
              <h3 className="text-heading-md font-heading font-semibold text-primary mb-6 text-center">
                Live Vehicle Tracking Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {trackingFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100"
                    >
                      <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-1">{feature.title}</h4>
                        <p className="text-xs text-gray-500">{feature.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-accent rounded-2xl border border-gray-100 p-6 md:p-8">
              <h3 className="text-heading-md font-heading font-semibold text-primary mb-4 text-center">
                How Vehicle Tracking Works
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-sm font-bold text-secondary">1</span>
                  </div>
                  <h4 className="text-sm font-semibold text-primary mb-1">Book Your Shipment</h4>
                  <p className="text-xs text-gray-500">Get a unique tracking ID and vehicle number assigned to your consignment.</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-sm font-bold text-secondary">2</span>
                  </div>
                  <h4 className="text-sm font-semibold text-primary mb-1">Enter Vehicle Number</h4>
                  <p className="text-xs text-gray-500">Use the vehicle number or tracking ID in the search box above to locate your vehicle.</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-sm font-bold text-secondary">3</span>
                  </div>
                  <h4 className="text-sm font-semibold text-primary mb-1">Get Live Updates</h4>
                  <p className="text-xs text-gray-500">View real-time GPS location, route progress, speed, and estimated arrival time.</p>
                </div>
              </div>
            </div>

            {/* Contact for Tracking */}
            <div className="mt-8 text-center">
              <p className="text-body-sm text-gray-600 mb-4">
                Need help tracking your vehicle? Contact our operations team:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={`tel:${siteConfig.contact.phone}`} className="text-sm text-primary font-medium flex items-center gap-2 hover:text-secondary transition-colors">
                  <Phone className="w-4 h-4" />
                  {siteConfig.contact.phone}
                </a>
                <a
                  href={getWhatsAppUrl('Hi! I need help tracking my vehicle.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-600 font-medium flex items-center gap-2 hover:text-green-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Support
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
