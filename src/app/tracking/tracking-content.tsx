'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Package, Phone, MessageCircle } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { siteConfig } from '@/config/site';
import { getWhatsAppUrl } from '@/lib/utils';

export function TrackingContent() {
  const [trackingId, setTrackingId] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;

    setIsSearching(true);
    // Simulate API call
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
                placeholder="Enter Tracking ID or Consignment Number"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                className="h-12"
              />
            </div>
            <Button type="submit" size="lg" disabled={isSearching || !trackingId.trim()}>
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
            Your tracking ID was shared via SMS/email when your shipment was booked.
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
            <Package className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-heading-md font-heading font-semibold text-primary mb-2">
              Tracking System Upgrade in Progress
            </h3>
            <p className="text-body-sm text-gray-600 mb-6 max-w-md mx-auto">
              Our online tracking portal is being upgraded for a better experience. For immediate shipment status, please contact our operations team:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`tel:${siteConfig.contact.phone}`}>
                <Button variant="primary" size="default">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Operations
                </Button>
              </a>
              <a
                href={getWhatsAppUrl(`Hi! I want to track my shipment. Tracking ID: ${trackingId}`)}
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
            {/* How Tracking Works */}
            <div className="bg-accent rounded-2xl border border-gray-100 p-6 md:p-8">
              <h3 className="text-heading-md font-heading font-semibold text-primary mb-4 text-center">
                How to Track Your Shipment
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-sm font-bold text-secondary">1</span>
                  </div>
                  <h4 className="text-sm font-semibold text-primary mb-1">Get Your Tracking ID</h4>
                  <p className="text-xs text-gray-500">Shared via SMS and email at the time of booking your shipment.</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-sm font-bold text-secondary">2</span>
                  </div>
                  <h4 className="text-sm font-semibold text-primary mb-1">Enter Above</h4>
                  <p className="text-xs text-gray-500">Enter your tracking ID or consignment number in the search box.</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-sm font-bold text-secondary">3</span>
                  </div>
                  <h4 className="text-sm font-semibold text-primary mb-1">View Status</h4>
                  <p className="text-xs text-gray-500">Get real-time status, location, and estimated delivery information.</p>
                </div>
              </div>
            </div>

            {/* Contact for Tracking */}
            <div className="mt-8 text-center">
              <p className="text-body-sm text-gray-600 mb-4">
                Can&apos;t find your tracking ID? Contact our team for assistance:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={`tel:${siteConfig.contact.phone}`} className="text-sm text-primary font-medium flex items-center gap-2 hover:text-secondary transition-colors">
                  <Phone className="w-4 h-4" />
                  {siteConfig.contact.phone}
                </a>
                <a
                  href={getWhatsAppUrl('Hi! I need help tracking my shipment.')}
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
