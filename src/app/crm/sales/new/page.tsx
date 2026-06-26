'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';

export default function NewLeadPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setIsSubmitting(true); setTimeout(() => { setIsSubmitting(false); alert('Lead created!'); }, 1500); };
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4"><Link href="/crm/sales" className="p-2 hover:bg-gray-100 rounded-lg"><ArrowLeft className="w-5 h-5 text-gray-600" /></Link><div><h1 className="text-2xl font-bold text-gray-900">Add New Lead</h1><p className="text-sm text-gray-500">Create a sales opportunity</p></div></div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-2xl border p-6"><h2 className="text-sm font-semibold mb-4">Lead Details</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-4"><div><label className="block text-xs font-medium text-gray-600 mb-1">Company Name</label><input className="w-full h-10 px-3 rounded-xl border text-sm" /></div><div><label className="block text-xs font-medium text-gray-600 mb-1">Contact Person *</label><input className="w-full h-10 px-3 rounded-xl border text-sm" required /></div><div><label className="block text-xs font-medium text-gray-600 mb-1">Phone *</label><input className="w-full h-10 px-3 rounded-xl border text-sm" required /></div><div><label className="block text-xs font-medium text-gray-600 mb-1">Email</label><input type="email" className="w-full h-10 px-3 rounded-xl border text-sm" /></div><div><label className="block text-xs font-medium text-gray-600 mb-1">Source</label><select className="w-full h-10 px-3 rounded-xl border text-sm"><option>Website</option><option>Referral</option><option>Cold Call</option><option>LinkedIn</option><option>Other</option></select></div><div><label className="block text-xs font-medium text-gray-600 mb-1">Estimated Value (₹)</label><input type="number" className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="0" /></div><div className="md:col-span-3"><label className="block text-xs font-medium text-gray-600 mb-1">Requirement</label><textarea rows={3} className="w-full px-3 py-2 rounded-xl border text-sm resize-y" placeholder="Logistics requirements..." /></div></div></div>
        <div className="flex items-center justify-end gap-3"><Link href="/crm/sales" className="px-5 py-2.5 text-sm text-gray-600 hover:bg-gray-100 rounded-xl">Cancel</Link><button type="submit" disabled={isSubmitting} className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-xl disabled:opacity-50">{isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}{isSubmitting ? 'Creating...' : 'Create Lead'}</button></div>
      </form>
    </div>
  );
}
