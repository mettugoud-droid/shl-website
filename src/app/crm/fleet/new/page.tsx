'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';

export default function NewVehiclePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setIsSubmitting(true); setTimeout(() => { setIsSubmitting(false); alert('Vehicle added successfully!'); }, 1500); };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/crm/fleet" className="p-2 hover:bg-gray-100 rounded-lg"><ArrowLeft className="w-5 h-5 text-gray-600" /></Link>
        <div><h1 className="text-2xl font-bold text-gray-900">Add New Vehicle</h1><p className="text-sm text-gray-500">Register a new vehicle to the fleet</p></div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-2xl border p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Vehicle Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Vehicle Number *</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="TS09AB1234" required /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Type *</label><select className="w-full h-10 px-3 rounded-xl border text-sm"><option>Mini Truck</option><option>LCV</option><option>ICV</option><option>Heavy Truck</option><option>Multi-Axle</option><option>Container</option></select></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Capacity *</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="e.g., 15 Tons" required /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Make</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="e.g., Tata, Eicher" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Model</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="Model" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Year</label><input type="number" className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="2024" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Fuel Type</label><select className="w-full h-10 px-3 rounded-xl border text-sm"><option>Diesel</option><option>Petrol</option><option>CNG</option><option>Electric</option></select></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Owner Type *</label><select className="w-full h-10 px-3 rounded-xl border text-sm"><option>Own</option><option>Vendor</option><option>Leased</option></select></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Chassis No</label><input className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="Chassis" /></div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Insurance Expiry</label><input type="date" className="w-full h-10 px-3 rounded-xl border text-sm" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Fitness Expiry</label><input type="date" className="w-full h-10 px-3 rounded-xl border text-sm" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">PUC Expiry</label><input type="date" className="w-full h-10 px-3 rounded-xl border text-sm" /></div>
            <div><label className="block text-xs font-medium text-gray-600 mb-1">Permit Expiry</label><input type="date" className="w-full h-10 px-3 rounded-xl border text-sm" /></div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3">
          <Link href="/crm/fleet" className="px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl">Cancel</Link>
          <button type="submit" disabled={isSubmitting} className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-700 disabled:opacity-50">
            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}{isSubmitting ? 'Adding...' : 'Add Vehicle'}
          </button>
        </div>
      </form>
    </div>
  );
}
