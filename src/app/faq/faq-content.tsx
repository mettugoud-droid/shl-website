'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';

const faqCategories = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is Sri Harinath Logistics?',
        a: 'Sri Harinath Logistics (SHL) is a GST-registered logistics company headquartered in Secunderabad, Telangana. We provide comprehensive transportation, warehousing, and supply chain solutions across India with a fleet of 450+ GPS-tracked vehicles.',
      },
      {
        q: 'Is SHL a registered company?',
        a: 'Yes, Sri Harinath Logistics is a fully registered and GST-compliant company. Our GST number is 36ITMPS6428H1ZX. We provide proper tax invoices and all documentation required for your compliance needs.',
      },
      {
        q: 'What are your business hours?',
        a: 'Our office operates Monday to Saturday, 9:00 AM to 7:00 PM. On Sundays, we offer emergency support for urgent shipments. Our operations team works around the clock to ensure active shipments are monitored and managed.',
      },
      {
        q: 'How long has SHL been in business?',
        a: 'Sri Harinath Logistics was founded in 2021 and has been growing rapidly since then. In this time, we have grown from a small fleet in Hyderabad to a pan-India logistics enterprise serving 1000+ business clients.',
      },
    ],
  },
  {
    category: 'Services & Pricing',
    questions: [
      {
        q: 'What services does SHL offer?',
        a: 'We offer Full Truck Load (FTL), Part Truck Load (PTL), Warehousing Solutions, Distribution Services, Dedicated Fleet Services, Supply Chain Management, Last Mile Delivery, E-Commerce Logistics, and Express Cargo Services.',
      },
      {
        q: 'How are your prices determined?',
        a: 'Pricing depends on factors including distance, cargo weight/volume, vehicle type, service speed (express vs standard), and any special handling requirements. We provide transparent, customized quotes for each requirement. Volume discounts are available for regular shippers.',
      },
      {
        q: 'Do you have minimum shipment requirements?',
        a: 'For PTL services, we accept consignments starting from 100 kg. For FTL, the minimum is a full vehicle load which varies by vehicle type (starting from 1 ton for mini trucks). There are no minimum volume commitments required.',
      },
      {
        q: 'Do you offer insurance for shipments?',
        a: 'Yes, all our vehicles carry basic transit insurance. Additional comprehensive cargo insurance can be arranged upon request for high-value goods. We recommend discussing insurance requirements when requesting a quote.',
      },
    ],
  },
  {
    category: 'Coverage & Transit',
    questions: [
      {
        q: 'What areas do you cover?',
        a: 'SHL provides services across all 28 states and 8 union territories of India. We cover 500+ cities and 1000+ pin codes. Our primary hub is in Hyderabad with strong presence across Telangana, Andhra Pradesh, and South India.',
      },
      {
        q: 'What are your transit times?',
        a: 'Transit times vary by route and service type. For example: Hyderabad to Bangalore takes 10-14 hours (FTL), Hyderabad to Mumbai 14-18 hours, Hyderabad to Delhi 28-36 hours. PTL services typically take 3-5 days for pan-India delivery.',
      },
      {
        q: 'Do you operate on weekends and holidays?',
        a: 'Yes, our operations run 7 days a week including weekends and most holidays. Active shipments in transit are never stopped. However, new pickups and office operations follow our Mon-Sat, 9 AM - 7 PM schedule.',
      },
    ],
  },
  {
    category: 'Tracking & Support',
    questions: [
      {
        q: 'How can I track my shipment?',
        a: 'You can track your shipment using the tracking ID provided at booking time. Visit our tracking page, contact our operations team at +91 70757 42929, or send your tracking ID via WhatsApp for instant status updates.',
      },
      {
        q: 'How quickly do you respond to queries?',
        a: 'During business hours (Mon-Sat, 9 AM - 7 PM), we respond to all queries within 2 hours. For urgent matters, call us directly for immediate assistance. WhatsApp queries are typically responded to within 30 minutes.',
      },
      {
        q: 'What if my delivery is delayed?',
        a: 'We proactively communicate about any potential delays due to weather, road conditions, or other factors. If you notice a delay, contact our operations team immediately and we will provide status and revised ETA. For express services, we offer a money-back guarantee.',
      },
      {
        q: 'How do I file a complaint?',
        a: 'You can file a complaint by calling +91 70757 42929, emailing info@sriharinathlogistics.com, or via WhatsApp. All complaints are acknowledged within 2 hours and resolved within 48 hours. We take customer feedback seriously.',
      },
    ],
  },
  {
    category: 'Booking & Payment',
    questions: [
      {
        q: 'How do I book a shipment?',
        a: 'You can book by: (1) Filling the Request Quote form on our website, (2) Calling +91 70757 42929, (3) Sending requirements via WhatsApp, or (4) Emailing quotes@sriharinathlogistics.com. We confirm bookings within 2 hours.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept bank transfers (NEFT/RTGS/IMPS), UPI payments, cheques, and credit terms for regular business clients. Payment terms are discussed during the quotation process based on shipment type and client relationship.',
      },
      {
        q: 'Do you offer credit terms?',
        a: 'Yes, we offer credit terms (15-30 days) to established business clients after initial transactions. Credit limits and terms are determined based on shipment volume and relationship. New clients start with advance payment.',
      },
    ],
  },
];

export function FAQPageContent() {
  const [openItems, setOpenItems] = useState<Record<string, number | null>>({});

  const toggleItem = (category: string, index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

  return (
    <section className="section-padding bg-white">
      <Container size="sm">
        <div className="space-y-10">
          {faqCategories.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-heading-lg font-heading font-bold text-primary mb-4 pb-2 border-b border-gray-100">
                {cat.category}
              </h2>
              <div className="space-y-2">
                {cat.questions.map((faq, index) => (
                  <div
                    key={index}
                    className={cn(
                      'border rounded-xl transition-all duration-300 overflow-hidden',
                      openItems[cat.category] === index
                        ? 'border-secondary/30 shadow-card'
                        : 'border-gray-100 hover:border-gray-200'
                    )}
                  >
                    <button
                      onClick={() => toggleItem(cat.category, index)}
                      className="w-full flex items-center justify-between gap-4 p-4 text-left"
                      aria-expanded={openItems[cat.category] === index}
                    >
                      <span className={cn(
                        'text-sm font-medium transition-colors',
                        openItems[cat.category] === index ? 'text-primary' : 'text-gray-700'
                      )}>
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 flex-shrink-0 transition-transform duration-300 text-gray-400',
                          openItems[cat.category] === index && 'rotate-180 text-secondary'
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {openItems[cat.category] === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-4 pb-4 text-body-sm text-gray-600 leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
