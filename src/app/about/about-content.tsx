'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Heart,
  Shield,
  Clock,
  Users,
  Award,
  TrendingUp,
  Handshake,
  Truck,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const coreValues = [
  {
    icon: Shield,
    title: 'Reliability',
    description: 'We deliver on our promises. Every shipment, every route, every time – reliability is the foundation of our service.',
  },
  {
    icon: Clock,
    title: 'Punctuality',
    description: 'Time is money in logistics. Our 98% on-time delivery rate reflects our commitment to meeting deadlines consistently.',
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Every decision we make starts with our customer. We build solutions around your needs, not the other way around.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    description: 'We invest in technology, training, and processes to deliver better service, lower costs, and higher efficiency every day.',
  },
  {
    icon: Handshake,
    title: 'Integrity',
    description: 'Transparent pricing, honest communication, and ethical business practices form the backbone of all our relationships.',
  },
  {
    icon: Users,
    title: 'Team Excellence',
    description: 'Our people are our greatest asset. Experienced professionals who take pride in delivering world-class logistics services.',
  },
];

const milestones = [
  { year: '2014', title: 'Company Founded', description: 'Started with 5 vehicles in Hyderabad focusing on local transport.' },
  { year: '2016', title: 'Regional Expansion', description: 'Expanded to 50 vehicles covering Telangana and Andhra Pradesh.' },
  { year: '2018', title: 'Pan India Network', description: 'Launched operations across South India with 150+ vehicles.' },
  { year: '2020', title: 'Warehousing Launch', description: 'Opened warehousing facilities and supply chain management services.' },
  { year: '2022', title: '1000 Clients Milestone', description: 'Crossed 1000+ active business clients with 350+ fleet vehicles.' },
  { year: '2024', title: 'Technology Upgrade', description: '450+ fleet with GPS tracking, digital platform, and nationwide operations.' },
];

export function AboutContent() {
  return (
    <>
      {/* Company Overview */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block mb-4 px-4 py-1.5 bg-secondary/10 text-secondary-700 text-sm font-semibold rounded-full">
                Our Story
              </span>
              <h2 className="text-display-sm font-heading font-bold text-primary mb-6">
                Building India&apos;s Most Trusted Logistics Partner
              </h2>
              <div className="space-y-4 text-body-md text-gray-600 leading-relaxed">
                <p>
                  Sri Harinath Logistics was founded in 2014 with a clear vision: to provide businesses across India with reliable, efficient, and cost-effective logistics solutions. What started as a small fleet of 5 vehicles serving the Hyderabad-Secunderabad corridor has grown into a comprehensive logistics enterprise with 450+ vehicles operating across all 28 states.
                </p>
                <p>
                  Over the past decade, we have earned the trust of 1000+ businesses – from SMEs to large enterprises – across sectors including FMCG, pharmaceuticals, manufacturing, retail, automotive, and e-commerce. Our success is built on a simple principle: treat every shipment as if it were our own.
                </p>
                <p>
                  As a GST-registered company (GST: 36ITMPS6428H1ZX), we ensure complete compliance and transparency in all our operations. Our technology-driven approach combines GPS tracking, route optimization, and real-time communication to deliver an unmatched logistics experience.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-6 bg-accent rounded-2xl text-center">
                <Truck className="w-8 h-8 text-secondary mx-auto mb-3" />
                <p className="text-2xl font-heading font-bold text-primary">450+</p>
                <p className="text-sm text-gray-500">Fleet Vehicles</p>
              </div>
              <div className="p-6 bg-accent rounded-2xl text-center">
                <Users className="w-8 h-8 text-secondary mx-auto mb-3" />
                <p className="text-2xl font-heading font-bold text-primary">1000+</p>
                <p className="text-sm text-gray-500">Business Clients</p>
              </div>
              <div className="p-6 bg-accent rounded-2xl text-center">
                <Award className="w-8 h-8 text-secondary mx-auto mb-3" />
                <p className="text-2xl font-heading font-bold text-primary">10+</p>
                <p className="text-sm text-gray-500">Years Experience</p>
              </div>
              <div className="p-6 bg-accent rounded-2xl text-center">
                <TrendingUp className="w-8 h-8 text-secondary mx-auto mb-3" />
                <p className="text-2xl font-heading font-bold text-primary">98%</p>
                <p className="text-sm text-gray-500">On-Time Rate</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-accent">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-white rounded-2xl border border-gray-100 shadow-card"
            >
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-heading-xl font-heading font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-body-md text-gray-600 leading-relaxed">
                To empower businesses across India with reliable, technology-driven logistics solutions that reduce costs, improve efficiency, and enable growth. We are committed to delivering every shipment on time, every time, while maintaining the highest standards of safety and professionalism.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="p-8 bg-white rounded-2xl border border-gray-100 shadow-card"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-heading-xl font-heading font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-body-md text-gray-600 leading-relaxed">
                To become India&apos;s most trusted and preferred logistics company, recognized for operational excellence, innovation, and customer satisfaction. We envision a future where every business, regardless of size, has access to world-class supply chain solutions that drive their growth.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            badge="Our Values"
            title="What Drives Us Every Day"
            subtitle="Our core values are not just words on a wall – they guide every decision, every shipment, and every interaction with our clients."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="p-6 rounded-2xl border border-gray-100 hover:border-secondary/20 hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-11 h-11 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="text-heading-sm font-heading font-semibold text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-body-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Milestones */}
      <section className="section-padding bg-accent">
        <Container size="sm">
          <SectionHeading
            badge="Our Journey"
            title="Milestones & Growth"
            subtitle="From a small fleet in Hyderabad to a pan-India logistics enterprise – our journey of growth and trust."
          />

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative flex items-start gap-6"
                >
                  {/* Year Badge */}
                  <div className="w-12 h-12 bg-white rounded-xl border-2 border-secondary shadow-soft flex items-center justify-center flex-shrink-0 relative z-10">
                    <span className="text-xs font-bold text-secondary">{milestone.year}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-5 bg-white rounded-2xl border border-gray-100 shadow-card">
                    <h4 className="text-sm font-heading font-semibold text-primary mb-1">
                      {milestone.title}
                    </h4>
                    <p className="text-sm text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
