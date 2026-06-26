'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';

export default function NewDriverPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setIsSubmitting(true); setTimeout(() => { setIsSubmitting(false); alert('Driver added successfully!'); }, 1500); };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/crm/drivers" className="p-2 hover:bg-gray-100 rounded-lg"><ArrowLeft className="w-5 h-5 text-gray-600" /></Link>
        <div><h1 className="text-2xl font-bold text-gray-900">Add New Driver</h1><p className="text-sm text-gray-500">Register a new driver</p></div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-2xl border p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Personal Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Full Name *</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="Name" required /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Phone *</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="Phone" required /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Date of Birth</label><input type="date" className="w-full h-10 px-3 rounded-xl border text-sm" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Aadhaar Number</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="Aadhaar" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Blood Group</label><select className="w-full h-10 px-3 rounded-xl border text-sm"><option value="">Select</option><option>A+</option><option>A-</option><option>B+</option><option>B-</option><option>O+</option><option>O-</option><option>AB+</option><option>AB-</option></select></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Emergency Contact</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="Phone" /></div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Licence & Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Licence Number *</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="DL Number" required /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Licence Expiry *</label><input type="date" className="w-full h-10 px-3 rounded-xl border text-sm" required /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Address</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="Address" /></div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Bank Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Bank Name</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="Bank" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Account Number</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="Account" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">IFSC Code</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="IFSC" /></div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3">
          <Link href="/crm/drivers" className="px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl">Cancel</Link>
          <button type="submit" disabled={isSubmitting} className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-700 disabled:opacity-50">
            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}{isSubmitting ? 'Adding...' : 'Add Driver'}
          </button>
        </div>
      </form>
    </div>
  );
}
