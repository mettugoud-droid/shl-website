'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';

export default function NewCustomerPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    try {
      const res = await fetch('/api/crm/customers', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      const result = await res.json();
      if (result.success) { alert('Customer created: ' + result.data.customerCode); window.location.href = '/crm/customers'; }
      else { alert(result.message); }
    } catch { alert('Error creating customer'); }
    finally { setIsSubmitting(false); }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/crm/customers" className="p-2 hover:bg-gray-100 rounded-lg"><ArrowLeft className="w-5 h-5 text-gray-600" /></Link>
        <div><h1 className="text-2xl font-bold text-gray-900">Add New Customer</h1><p className="text-sm text-gray-500">Register a new B2B or B2C customer</p></div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-2xl border p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Company Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Company Name *</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="Company name" required /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Type *</label><select className="w-full h-10 px-3 rounded-xl border text-sm"><option>B2B</option><option>B2C</option></select></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Industry</label><select className="w-full h-10 px-3 rounded-xl border text-sm"><option value="">Select</option><option>FMCG</option><option>Retail</option><option>Manufacturing</option><option>Pharma</option><option>E-Commerce</option><option>Automotive</option><option>Other</option></select></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">GST Number</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="GST" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">PAN Number</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="PAN" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Credit Limit (₹)</label><input type="number" className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="0" /></div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Contact Person</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Contact Name *</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="Full name" required /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Designation</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="Designation" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Phone *</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="Phone" required /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Email</label><input type="email" className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="Email" /></div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-3"><label className="block text-xs font-medium text-gray-600 mb-1">Address</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="Street address" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">City</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="City" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">State</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="State" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Pincode</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="Pincode" /></div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3">
          <Link href="/crm/customers" className="px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl">Cancel</Link>
          <button type="submit" disabled={isSubmitting} className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-700 disabled:opacity-50">
            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {isSubmitting ? 'Creating...' : 'Create Customer'}
          </button>
        </div>
      </form>
    </div>
  );
}
