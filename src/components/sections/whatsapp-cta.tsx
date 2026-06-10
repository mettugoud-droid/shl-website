'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { getWhatsAppUrl } from '@/lib/utils';

export function WhatsAppCTASection() {
  return (
    <section className="py-12 bg-[#25D366]/5 border-y border-[#25D366]/20">
      <Container>
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/20">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-primary">
                Need Immediate Assistance?
              </h3>
              <p className="text-sm text-gray-600">
                Chat with our logistics team on WhatsApp for instant quotes and support.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppUrl('Hi! I need logistics services. Please share details about your offerings and pricing.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="whatsapp" size="lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
