import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  ArrowRight,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { siteConfig } from '@/config/site';
import { footerNavigation } from '@/config/navigation';

export function Footer() {
  return (
    <footer className="bg-gradient-dark text-white">
      {/* Main Footer */}
      <div className="pt-16 pb-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-6 group">
                <Image
                  src="/images/logo-white.png"
                  alt="Sri Harinath Logistics"
                  width={160}
                  height={45}
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {siteConfig.tagline} — Your trusted partner for comprehensive
                transportation, logistics, and supply chain solutions across India.
              </p>
              <div className="space-y-3">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-secondary transition-colors"
                >
                  <Phone className="w-4 h-4 text-secondary" />
                  {siteConfig.contact.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.contact.primaryEmail}`}
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-secondary transition-colors"
                >
                  <Mail className="w-4 h-4 text-secondary" />
                  {siteConfig.contact.primaryEmail}
                </a>
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>{siteConfig.address.full}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Clock className="w-4 h-4 text-secondary" />
                  <span>{siteConfig.hours.weekday}</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-heading font-semibold text-white mb-5 uppercase tracking-wider">
                Our Services
              </h4>
              <ul className="space-y-2.5">
                {footerNavigation.services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-secondary transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-secondary" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-heading font-semibold text-white mb-5 uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-2.5">
                {footerNavigation.company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-secondary transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-secondary" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Social */}
            <div>
              <h4 className="text-sm font-heading font-semibold text-white mb-5 uppercase tracking-wider">
                Support
              </h4>
              <ul className="space-y-2.5 mb-8">
                {footerNavigation.support.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-secondary transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-secondary" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <h4 className="text-sm font-heading font-semibold text-white mb-4 uppercase tracking-wider">
                Connect With Us
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-9 h-9 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Trust Bar */}
      <div className="border-t border-white/10 py-6">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-gray-400">
            <span className="flex items-center gap-2">
              <span className="text-secondary">✓</span> GST Registered: {siteConfig.gst}
            </span>
            <span className="flex items-center gap-2">
              <span className="text-secondary">✓</span> Pan India Coverage
            </span>
            <span className="flex items-center gap-2">
              <span className="text-secondary">✓</span> 24/7 Customer Support
            </span>
            <span className="flex items-center gap-2">
              <span className="text-secondary">✓</span> Real-Time Tracking
            </span>
            <span className="flex items-center gap-2">
              <span className="text-secondary">✓</span> On-Time Delivery
            </span>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Sri Harinath Logistics. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-300 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/sitemap.xml" className="hover:text-gray-300 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
