'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'What areas does Sri Harinath Logistics cover?',
    answer:
      'SHL provides logistics services across all 28 states and 8 union territories of India. Our primary hubs are in Hyderabad, Secunderabad, and major South Indian cities. We cover 500+ cities and 1000+ pin codes with our extensive network of owned fleet and partner vehicles.',
  },
  {
    question: 'What types of vehicles do you operate?',
    answer:
      'Our fleet includes mini trucks (1-3 tons), LCV (3-7 tons), ICV (7-15 tons), heavy trucks (15-25 tons), multi-axle vehicles (25-40 tons), and container trucks (20-40 ft). All vehicles are GPS-tracked, insured, and regularly maintained.',
  },
  {
    question: 'How quickly can I get a quote?',
    answer:
      'We provide customized quotes within 2 hours of receiving your requirement during business hours (Mon-Sat, 9 AM - 7 PM). For urgent requirements, call us directly at +91 70757 42929 for immediate assistance.',
  },
  {
    question: 'Is Sri Harinath Logistics a GST registered company?',
    answer:
      'Yes, SHL is a fully GST registered logistics company. Our GST number is 36ITMPS6428H1ZX. We provide proper tax invoices and all documentation required for compliance purposes.',
  },
  {
    question: 'Do you provide real-time shipment tracking?',
    answer:
      'Yes, all shipments are trackable in real-time through our tracking system. You receive a unique tracking ID upon booking, and can monitor your shipment status, location, and estimated delivery time via our website or customer support.',
  },
  {
    question: 'What industries do you specialize in?',
    answer:
      'We serve FMCG, retail, manufacturing, pharmaceuticals, automotive, and e-commerce industries. Each sector has specialized solutions addressing specific requirements like temperature control, compliance documentation, time-sensitive deliveries, and secure handling.',
  },
  {
    question: 'Do you offer warehousing services?',
    answer:
      'Yes, we provide comprehensive warehousing solutions including storage, inventory management, order fulfillment, cross-docking, and value-added services. Our warehouses are strategically located near major transportation hubs for efficient distribution.',
  },
  {
    question: 'What is your on-time delivery rate?',
    answer:
      'We maintain a 98% on-time delivery rate across all service categories. This is achieved through route optimization, real-time monitoring, experienced drivers, and proactive communication about any potential delays.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white">
      <Container size="sm">
        <SectionHeading
          badge="FAQs"
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our logistics services, coverage, and operations."
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={cn(
                'border rounded-2xl transition-all duration-300 overflow-hidden',
                openIndex === index
                  ? 'border-secondary/30 shadow-card bg-white'
                  : 'border-gray-100 bg-white hover:border-gray-200'
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className={cn(
                    'w-5 h-5 flex-shrink-0 transition-colors',
                    openIndex === index ? 'text-secondary' : 'text-gray-400'
                  )} />
                  <span className={cn(
                    'text-sm font-medium transition-colors',
                    openIndex === index ? 'text-primary' : 'text-gray-700'
                  )}>
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 flex-shrink-0 transition-transform duration-300 text-gray-400',
                    openIndex === index && 'rotate-180 text-secondary'
                  )}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 pb-5 pl-13 text-body-sm text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
