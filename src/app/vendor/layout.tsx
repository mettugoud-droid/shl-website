'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Truck, Route, IndianRupee, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { title: 'My Vehicles', href: '/vendor/vehicles', icon: Truck },
  { title: 'Trips', href: '/vendor/trips', icon: Route },
  { title: 'Payments', href: '/vendor/payments', icon: IndianRupee },
];

export default function VendorLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/vendor/vehicles" className="flex items-center gap-2">
            <img src="/images/logo.png" alt="SHL" className="h-8 w-auto object-contain" />
          </Link>
          <div className="flex items-center gap-3">
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => { const Icon = item.icon; return (
                <Link key={item.href} href={item.href} className={cn('flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium', pathname.startsWith(item.href) ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-100')}>
                  <Icon className="w-3.5 h-3.5" />{item.title}
                </Link>
              ); })}
            </nav>
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"><User className="w-4 h-4 text-gray-500" /></div>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
    </div>
  );
}
