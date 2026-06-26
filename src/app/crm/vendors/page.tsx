'use client';

import React from 'react';
import Link from 'next/link';
import { Plus, Search, Building2, Star, Truck, IndianRupee } from 'lucide-react';

const mockVendors = [
  { id: '1', code: 'VND-001', name: 'Sai Transport', type: 'Fleet Owner', city: 'Hyderabad', vehicles: 12, rating: 4.5, pending: '₹1,80,000', status: 'Active' },
  { id: '2', code: 'VND-002', name: 'Balaji Logistics', type: 'Fleet Owner', city: 'Vijayawada', vehicles: 8, rating: 4.2, pending: '₹95,000', status: 'Active' },
  { id: '3', code: 'VND-003', name: 'Krishna Transport', type: 'Vehicle Provider', city: 'Warangal', vehicles: 5, rating: 4.7, pending: '₹0', status: 'Active' },
  { id: '4', code: 'VND-004', name: 'Lakshmi Fleet', type: 'Fleet Owner', city: 'Chennai', vehicles: 15, rating: 4.0, pending: '₹2,40,000', status: 'Active' },
  { id: '5', code: 'VND-005', name: 'Ganesh Carriers', type: 'Transport Partner', city: 'Bangalore', vehicles: 10, rating: 4.3, pending: '₹1,20,000', status: 'Inactive' },
];

export default function VendorsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div><h1 className="text-2xl font-bold text-gray-900">Vendor Management</h1><p className="text-sm text-gray-500">Manage fleet owners and transport partners</p></div>
        <Link href="/crm/vendors/new" className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-700"><Plus className="w-4 h-4" /> Add Vendor</Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border p-4 flex items-center gap-3"><div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center"><Building2 className="w-5 h-5 text-blue-600" /></div><div><p className="text-lg font-bold">25</p><p className="text-[10px] text-gray-500">Total Vendors</p></div></div>
        <div className="bg-white rounded-xl border p-4 flex items-center gap-3"><div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center"><Truck className="w-5 h-5 text-green-600" /></div><div><p className="text-lg font-bold">85</p><p className="text-[10px] text-gray-500">Vendor Vehicles</p></div></div>
        <div className="bg-white rounded-xl border p-4 flex items-center gap-3"><div className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center"><Star className="w-5 h-5 text-yellow-600" /></div><div><p className="text-lg font-bold">4.3</p><p className="text-[10px] text-gray-500">Avg Rating</p></div></div>
        <div className="bg-white rounded-xl border p-4 flex items-center gap-3"><div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center"><IndianRupee className="w-5 h-5 text-orange-600" /></div><div><p className="text-lg font-bold">₹6.35L</p><p className="text-[10px] text-gray-500">Pending Pay</p></div></div>
      </div>
      <div className="bg-white rounded-2xl border p-4"><div className="flex gap-3"><div className="flex-1 relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /><input type="text" placeholder="Search vendors..." className="w-full h-10 pl-10 pr-4 rounded-xl border border-gray-200 text-sm" /></div><select className="h-10 px-3 rounded-xl border text-sm"><option value="">All Types</option><option>Fleet Owner</option><option>Vehicle Provider</option><option>Transport Partner</option></select></div></div>
      <div className="bg-white rounded-2xl border overflow-hidden">
        <table className="w-full"><thead className="bg-gray-50"><tr><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Vendor</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Type</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">City</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Vehicles</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Rating</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Pending</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Status</th></tr></thead>
        <tbody className="divide-y divide-gray-50">{mockVendors.map((v) => (<tr key={v.id} className="hover:bg-gray-50/50"><td className="px-4 py-3"><p className="text-xs font-medium">{v.name}</p><p className="text-[10px] text-gray-400">{v.code}</p></td><td className="px-4 py-3 text-xs text-gray-600">{v.type}</td><td className="px-4 py-3 text-xs text-gray-600">{v.city}</td><td className="px-4 py-3 text-xs font-medium">{v.vehicles}</td><td className="px-4 py-3"><div className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-500 fill-yellow-500" /><span className="text-xs">{v.rating}</span></div></td><td className="px-4 py-3 text-xs font-medium text-orange-600">{v.pending}</td><td className="px-4 py-3"><span className={`text-[10px] px-2 py-0.5 rounded-full ${v.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>{v.status}</span></td></tr>))}</tbody></table>
      </div>
    </div>
  );
}
