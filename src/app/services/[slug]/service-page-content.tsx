'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, TrendingUp, Package } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';

interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  heroSubtitle: string;
  features: readonly string[];
  benefits: readonly { readonly title: string; readonly description: string }[];
  idealFor: readonly string[];
  stats: readonly { readonly value: string; readonly label: string }[];
}

interface ServicePageContentProps {
  service: ServiceData;
}

export function ServicePageContent({ service }: ServicePageContentProps) {
  return (
    <>
      {/* Stats Bar */}
      <section className="py-10 bg-accent border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {service.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-2xl md:text-3xl font-heading font-bold text-secondary">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading
                badge="Key Features"
                title={`What Our ${service.shortTitle} Includes`}
                align="left"
              />
              <div className="space-y-3">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-accent transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-body-md text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Ideal For */}
            <div>
              <SectionHeading
                badge="Ideal For"
                title="Who This Service Is For"
                align="left"
              />
              <div className="bg-accent rounded-2xl p-6 border border-gray-100">
                <div className="space-y-3">
                  {service.idealFor.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <Package className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-body-sm text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <Link href="/request-quote">
                  <Button size="lg" className="w-full">
                    Get {service.shortTitle} Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-accent">
        <Container>
          <SectionHeading
            badge="Benefits"
            title={`Why Choose SHL for ${service.shortTitle}`}
            subtitle="We don't just move goods – we provide solutions that improve your bottom line and customer satisfaction."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-heading-sm font-heading font-semibold text-primary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-body-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
