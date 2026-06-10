'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, TrendingUp, Heart, Mail } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

const whyJoin = [
  {
    icon: TrendingUp,
    title: 'Growth Opportunities',
    description: 'Fast-growing company with clear career paths. Grow from entry-level to leadership roles based on performance.',
  },
  {
    icon: Users,
    title: 'Great Team Culture',
    description: 'Collaborative environment where every voice matters. We work hard, support each other, and celebrate wins together.',
  },
  {
    icon: Heart,
    title: 'Employee Wellbeing',
    description: 'Competitive compensation, health benefits, and work-life balance. Your wellbeing is our priority.',
  },
  {
    icon: Briefcase,
    title: 'Meaningful Work',
    description: 'Power India\'s commerce by ensuring goods reach their destination. Your work directly impacts thousands of businesses.',
  },
];

const openPositions = [
  {
    title: 'Operations Executive',
    department: 'Operations',
    location: 'Hyderabad',
    type: 'Full-time',
    description: 'Manage daily logistics operations, coordinate with drivers and clients, ensure timely dispatch and delivery.',
  },
  {
    title: 'Business Development Manager',
    department: 'Sales',
    location: 'Hyderabad / Remote',
    type: 'Full-time',
    description: 'Identify and acquire new business clients, manage key accounts, develop logistics proposals and solutions.',
  },
  {
    title: 'Fleet Supervisor',
    department: 'Fleet Management',
    location: 'Hyderabad',
    type: 'Full-time',
    description: 'Oversee fleet maintenance schedules, driver management, vehicle allocation, and compliance documentation.',
  },
  {
    title: 'Customer Service Executive',
    department: 'Customer Support',
    location: 'Secunderabad',
    type: 'Full-time',
    description: 'Handle client queries, provide shipment updates, manage complaints, and ensure customer satisfaction.',
  },
  {
    title: 'Heavy Vehicle Drivers',
    department: 'Operations',
    location: 'Pan India',
    type: 'Full-time',
    description: 'Drive assigned vehicles on designated routes. Minimum 5 years experience with heavy vehicle license required.',
  },
  {
    title: 'Warehouse Executive',
    department: 'Warehousing',
    location: 'Hyderabad',
    type: 'Full-time',
    description: 'Manage warehouse operations including receiving, storage, picking, packing, and dispatch. Inventory management experience preferred.',
  },
];

export function CareersContent() {
  return (
    <>
      {/* Why Join */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            badge="Why Join SHL"
            title="Build Your Career With Us"
            subtitle="We're building India's most trusted logistics company, and we need great people to make it happen."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {whyJoin.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-2xl border border-gray-100 text-center hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-heading-sm font-heading font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-body-sm text-gray-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-accent">
        <Container>
          <SectionHeading
            badge="Open Positions"
            title="Current Openings"
            subtitle="Explore our current job openings and find the role that's right for you."
          />

          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-5 md:p-6 bg-white rounded-2xl border border-gray-100 hover:border-secondary/20 hover:shadow-card transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-heading-sm font-heading font-semibold text-primary">
                        {position.title}
                      </h3>
                      <span className="px-2 py-0.5 bg-secondary/10 text-secondary-700 text-xs font-medium rounded-full">
                        {position.type}
                      </span>
                    </div>
                    <p className="text-body-sm text-gray-600 mb-2">{position.description}</p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3 h-3" />
                        {position.department}
                      </span>
                      <span>•</span>
                      <span>{position.location}</span>
                    </div>
                  </div>
                  <a href={`mailto:${siteConfig.contact.secondaryEmail}?subject=Application: ${position.title}`}>
                    <Button variant="outline" size="sm">
                      Apply Now
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* General Application */}
          <motion.div
            className="mt-10 p-6 md:p-8 bg-white rounded-2xl border border-gray-100 shadow-card text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Mail className="w-10 h-10 text-secondary mx-auto mb-4" />
            <h3 className="text-heading-md font-heading font-semibold text-primary mb-2">
              Don&apos;t See Your Role?
            </h3>
            <p className="text-body-sm text-gray-600 mb-5 max-w-md mx-auto">
              We&apos;re always looking for talented people. Send your resume and we&apos;ll reach out when we have a matching opportunity.
            </p>
            <a href={`mailto:${siteConfig.contact.secondaryEmail}?subject=General Application - SHL Careers`}>
              <Button variant="default" size="lg">
                <Mail className="w-4 h-4 mr-2" />
                Send Your Resume
              </Button>
            </a>
            <p className="text-xs text-gray-400 mt-3">
              Email: {siteConfig.contact.secondaryEmail}
            </p>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
