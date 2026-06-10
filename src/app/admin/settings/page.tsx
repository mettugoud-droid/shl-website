'use client';

import React from 'react';
import Link from 'next/link';
import { Settings, Database, Mail, Shield, BarChart3 } from 'lucide-react';
import { Container } from '@/components/ui/container';

export default function AdminSettingsPage() {
  return (
    <div className="min-h-screen bg-accent py-12">
      <Container size="sm">
        <div className="mb-8">
          <h1 className="text-heading-xl font-heading font-bold text-primary">Admin Settings</h1>
          <p className="text-body-sm text-gray-500 mt-1">System configuration and management</p>
        </div>

        <div className="space-y-4">
          <Link href="/admin/leads" className="block p-5 bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="text-sm font-heading font-semibold text-primary">Lead Management</h3>
                <p className="text-xs text-gray-500">View, search, filter, and export website inquiries</p>
              </div>
            </div>
          </Link>

          <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-card">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center">
                <Database className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-heading font-semibold text-primary">Database</h3>
                <p className="text-xs text-gray-500">PostgreSQL via Prisma ORM. Run `npx prisma studio` for visual editor.</p>
              </div>
            </div>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-card">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-heading font-semibold text-primary">Email Configuration</h3>
                <p className="text-xs text-gray-500">SMTP settings in .env file. Sends to quotes@ with CC to info@</p>
              </div>
            </div>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-card">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-heading font-semibold text-primary">Security</h3>
                <p className="text-xs text-gray-500">Rate limiting (5 req/min), CSRF headers, input validation via Zod</p>
              </div>
            </div>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-card">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center">
                <Settings className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-heading font-semibold text-primary">Site Configuration</h3>
                <p className="text-xs text-gray-500">Edit src/config/site.ts for company details and src/config/navigation.ts for menus</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
