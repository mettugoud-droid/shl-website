'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { siteConfig } from '@/config/site';
import { getWhatsAppUrl } from '@/lib/utils';

export function ContactSection() {
  return (
    <section className="section-padding bg-accent">
      <Container>
        <SectionHeading
          badge="Get In Touch"
          title="Contact Our Logistics Team"
          subtitle="Have questions about our services? Need a customized logistics solution? Our experienced team is here to help."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone */}
          <motion.a
            href={`tel:${siteConfig.contact.phone}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-secondary/20 shadow-card hover:shadow-card-hover text-center transition-all duration-300"
          >
            <div className="w-12 h-12 bg-secondary/10 group-hover:bg-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
              <Phone className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="text-heading-sm font-heading font-semibold text-primary mb-1">
              Call Us
            </h3>
            <p className="text-sm text-gray-600">{siteConfig.contact.phone}</p>
          </motion.a>

          {/* Email */}
          <motion.a
            href={`mailto:${siteConfig.contact.primaryEmail}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-secondary/20 shadow-card hover:shadow-card-hover text-center transition-all duration-300"
          >
            <div className="w-12 h-12 bg-secondary/10 group-hover:bg-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
              <Mail className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="text-heading-sm font-heading font-semibold text-primary mb-1">
              Email Us
            </h3>
            <p className="text-sm text-gray-600 break-all">{siteConfig.contact.primaryEmail}</p>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href={getWhatsAppUrl('Hi! I need logistics services.')}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-green-200 shadow-card hover:shadow-card-hover text-center transition-all duration-300"
          >
            <div className="w-12 h-12 bg-green-50 group-hover:bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
              <MessageCircle className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-heading-sm font-heading font-semibold text-primary mb-1">
              WhatsApp
            </h3>
            <p className="text-sm text-gray-600">Chat Instantly</p>
          </motion.a>

          {/* Office */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-card text-center"
          >
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="text-heading-sm font-heading font-semibold text-primary mb-1">
              Business Hours
            </h3>
            <p className="text-sm text-gray-600">Mon-Sat: 9AM-7PM</p>
          </motion.div>
        </div>

        {/* Office Address */}
        <motion.div
          className="mt-10 p-6 bg-white rounded-2xl border border-gray-100 shadow-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-heading font-semibold text-primary mb-1">
                  Registered Office
                </h4>
                <p className="text-sm text-gray-600">{siteConfig.address.full}</p>
              </div>
            </div>
            <Link href="/contact">
              <Button variant="default" size="default">
                View on Map
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
