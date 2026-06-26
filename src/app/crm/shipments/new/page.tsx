'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';

export default function CreateShipmentPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    try {
      const res = await fetch('/api/crm/shipments', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      const result = await res.json();
      if (result.success) { alert('Shipment created: ' + result.data.shipmentNo); window.location.href = '/crm/shipments'; }
      else { alert(result.message); }
    } catch { alert('Error creating shipment'); }
    finally { setIsSubmitting(false); }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/crm/shipments" className="p-2 hover:bg-gray-100 rounded-lg"><ArrowLeft className="w-5 h-5 text-gray-600" /></Link>
        <div><h1 className="text-2xl font-bold text-gray-900">Create Shipment</h1><p className="text-sm text-gray-500">Fill in details to create a new consignment</p></div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Shipment Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Type *</label><select className="w-full h-10 px-3 rounded-xl border border-gray-200 text-sm"><option value="B2B">B2B</option><option value="B2C">B2C</option></select></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Mode *</label><select className="w-full h-10 px-3 rounded-xl border border-gray-200 text-sm"><option value="FTL">FTL</option><option value="PTL">PTL</option><option value="EXPRESS">Express</option></select></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Customer *</label><select className="w-full h-10 px-3 rounded-xl border border-gray-200 text-sm"><option value="">Select Customer</option><option>Vishwa FMCG</option><option>MedLife Pharma</option><option>TechBazaar</option></select></div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Pickup Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-3"><label className="block text-xs font-medium text-gray-600 mb-1">Address *</label><input className="w-full h-10 px-3 rounded-xl border border-gray-200 text-sm" placeholder="Street address" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">City *</label><input className="w-full h-10 px-3 rounded-xl border border-gray-200 text-sm" placeholder="City" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">State</label><input className="w-full h-10 px-3 rounded-xl border border-gray-200 text-sm" placeholder="State" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Pincode</label><input className="w-full h-10 px-3 rounded-xl border border-gray-200 text-sm" placeholder="Pincode" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Contact Person</label><input className="w-full h-10 px-3 rounded-xl border border-gray-200 text-sm" placeholder="Name" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Phone</label><input className="w-full h-10 px-3 rounded-xl border border-gray-200 text-sm" placeholder="Phone" /></div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Delivery Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-3"><label className="block text-xs font-medium text-gray-600 mb-1">Address *</label><input className="w-full h-10 px-3 rounded-xl border border-gray-200 text-sm" placeholder="Street address" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">City *</label><input className="w-full h-10 px-3 rounded-xl border border-gray-200 text-sm" placeholder="City" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">State</label><input className="w-full h-10 px-3 rounded-xl border border-gray-200 text-sm" placeholder="State" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Pincode</label><input className="w-full h-10 px-3 rounded-xl border border-gray-200 text-sm" placeholder="Pincode" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Contact Person</label><input className="w-full h-10 px-3 rounded-xl border border-gray-200 text-sm" placeholder="Name" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Phone</label><input className="w-full h-10 px-3 rounded-xl border border-gray-200 text-sm" placeholder="Phone" /></div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Cargo & Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Weight (Tons) *</label><input type="number" step="0.1" className="w-full h-10 px-3 rounded-xl border border-gray-200 text-sm" placeholder="0.0" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Packages</label><input type="number" className="w-full h-10 px-3 rounded-xl border border-gray-200 text-sm" placeholder="0" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Goods Value (₹)</label><input type="number" className="w-full h-10 px-3 rounded-xl border border-gray-200 text-sm" placeholder="0" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Freight (₹) *</label><input type="number" className="w-full h-10 px-3 rounded-xl border border-gray-200 text-sm" placeholder="0" /></div>
            <div className="md:col-span-2"><label className="block text-xs font-medium text-gray-600 mb-1">Goods Description</label><input className="w-full h-10 px-3 rounded-xl border border-gray-200 text-sm" placeholder="E.g., FMCG goods" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">E-Way Bill</label><input className="w-full h-10 px-3 rounded-xl border border-gray-200 text-sm" placeholder="Optional" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">PO Number</label><input className="w-full h-10 px-3 rounded-xl border border-gray-200 text-sm" placeholder="Optional" /></div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Remarks</h2>
          <textarea rows={3} className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm resize-y" placeholder="Special instructions..." />
        </div>
        <div className="flex items-center justify-end gap-3">
          <Link href="/crm/shipments" className="px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl">Cancel</Link>
          <button type="submit" disabled={isSubmitting} className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-700 disabled:opacity-50">
            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {isSubmitting ? 'Creating...' : 'Create Shipment'}
          </button>
        </div>
      </form>
    </div>
  );
}
