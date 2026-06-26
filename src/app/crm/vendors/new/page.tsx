'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';

export default function NewVendorPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); alert('Vendor created successfully!'); }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/crm/vendors" className="p-2 hover:bg-gray-100 rounded-lg"><ArrowLeft className="w-5 h-5 text-gray-600" /></Link>
        <div><h1 className="text-2xl font-bold text-gray-900">Add New Vendor</h1><p className="text-sm text-gray-500">Register a new fleet owner or transport partner</p></div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-2xl border p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Vendor Name *</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="Full name" required /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Company Name</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="Company" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Type *</label><select className="w-full h-10 px-3 rounded-xl border text-sm"><option>Fleet Owner</option><option>Vehicle Provider</option><option>Transport Partner</option></select></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Phone *</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="Mobile number" required /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Email</label><input type="email" className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="Email" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">City</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="City" /></div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Documents & Banking</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div><label className="block text-xs font-medium text-gray-600 mb-1">GST Number</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="GST" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">PAN Number</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="PAN" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Bank Name</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="Bank" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Account Number</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="Account No" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">IFSC Code</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="IFSC" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Address</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="Address" /></div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3">
          <Link href="/crm/vendors" className="px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl">Cancel</Link>
          <button type="submit" disabled={isSubmitting} className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-700 disabled:opacity-50">
            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {isSubmitting ? 'Creating...' : 'Create Vendor'}
          </button>
        </div>
      </form>
    </div>
  );
}
