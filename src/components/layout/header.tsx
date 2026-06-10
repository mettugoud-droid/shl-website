'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { siteConfig } from '@/config/site';
import { mainNavigation } from '@/config/navigation';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-white py-2">
        <Container>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                {siteConfig.contact.phone}
              </a>
              <a
                href={`mailto:${siteConfig.contact.primaryEmail}`}
                className="flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                {siteConfig.contact.primaryEmail}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white/80">{siteConfig.hours.weekday}</span>
              <span className="text-white/50">|</span>
              <span className="text-secondary font-medium">GST: {siteConfig.gst}</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navigation */}
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-medium py-3'
            : 'bg-white py-4'
        )}
      >
        <Container>
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/images/logo.png"
                alt="Sri Harinath Logistics"
                width={180}
                height={50}
                className="h-10 md:h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {mainNavigation.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && setActiveDropdown(item.title)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-lg transition-colors',
                      item.children && 'pr-2'
                    )}
                  >
                    {item.title}
                    {item.children && (
                      <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && (
                    <AnimatePresence>
                      {activeDropdown === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-80 bg-white rounded-2xl shadow-hard border border-gray-100 p-3 z-50"
                        >
                          <div className="grid gap-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.title}
                                href={child.href}
                                className="flex flex-col gap-0.5 p-3 rounded-xl hover:bg-accent transition-colors group"
                              >
                                <span className="text-sm font-medium text-primary group-hover:text-secondary transition-colors">
                                  {child.title}
                                </span>
                                {child.description && (
                                  <span className="text-xs text-gray-500">
                                    {child.description}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/request-quote">
                <Button variant="default" size="default">
                  Get Free Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-xl hover:bg-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </nav>
        </Container>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-100 bg-white"
            >
              <Container>
                <div className="py-4 space-y-1">
                  {mainNavigation.map((item) => (
                    <div key={item.title}>
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-accent rounded-xl transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                      {item.children && (
                        <div className="ml-4 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.title}
                              href={child.href}
                              className="block px-4 py-2 text-xs text-gray-500 hover:text-primary hover:bg-accent/50 rounded-lg transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="pt-4 px-4 space-y-3">
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="flex items-center gap-2 text-sm text-primary font-medium"
                    >
                      <Phone className="w-4 h-4" />
                      {siteConfig.contact.phone}
                    </a>
                    <Link href="/request-quote" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full" variant="default" size="lg">
                        Get Free Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
