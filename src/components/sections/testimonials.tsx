'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    company: 'Vishwa FMCG Pvt Ltd',
    role: 'Supply Chain Head',
    content:
      'Sri Harinath Logistics has been our primary logistics partner for 3 years. Their on-time delivery rate is exceptional, and the dedicated account manager ensures our shipments are always prioritized. Highly recommended for FMCG distribution.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    company: 'MedLife Pharmaceuticals',
    role: 'Operations Director',
    content:
      'We trust SHL with our pharmaceutical shipments because of their compliance standards and careful handling. Their temperature-controlled transport and real-time tracking give us complete peace of mind.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Anand Reddy',
    company: 'TechBazaar E-Commerce',
    role: 'Founder & CEO',
    content:
      'Since switching to SHL for our fulfillment needs, our delivery success rate improved by 15%. Their last-mile delivery network in South India is unmatched. Great partner for e-commerce businesses.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Suresh Patel',
    company: 'Gujarat Auto Parts',
    role: 'Logistics Manager',
    content:
      'SHL provides reliable FTL services for our automotive component shipments between Hyderabad and multiple locations. Their modern fleet and professional drivers ensure zero damage during transit.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Meera Krishnan',
    company: 'FreshMart Retail',
    role: 'COO',
    content:
      'Our retail chain relies on SHL for daily store replenishment across Telangana and AP. Their route optimization and flexible scheduling have reduced our logistics costs by 20% compared to our previous provider.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Vikram Singh',
    company: 'Horizon Manufacturing',
    role: 'Plant Manager',
    content:
      'SHL handles all our plant-to-warehouse and inter-state shipments. Their dedicated fleet service gives us the reliability and consistency needed for our production schedules. Excellent communication and tracking.',
    rating: 4,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          badge="Client Testimonials"
          title="Trusted by 1000+ Businesses"
          subtitle="Don't just take our word for it. Here's what our clients across industries say about partnering with Sri Harinath Logistics."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 rounded-2xl border border-gray-100 hover:border-secondary/20 bg-white hover:shadow-card-hover transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gray-200" />
                ))}
              </div>

              {/* Quote */}
              <div className="flex-1 relative">
                <Quote className="absolute -top-1 -left-1 w-8 h-8 text-secondary/10" />
                <p className="text-body-sm text-gray-600 leading-relaxed relative z-10">
                  &quot;{testimonial.content}&quot;
                </p>
              </div>

              {/* Author */}
              <div className="mt-5 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
