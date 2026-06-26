'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Package, FileText, MessageSquare, User, Truck } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { title: 'Shipments', href: '/customer/shipments', icon: Package },
  { title: 'Invoices', href: '/customer/invoices', icon: FileText },
  { title: 'Support', href: '/customer/tickets', icon: MessageSquare },
];

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/customer/shipments" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center"><Truck className="w-4 h-4 text-white" /></div>
            <span className="text-sm font-bold text-primary">SHL Customer Portal</span>
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
