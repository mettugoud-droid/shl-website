'use client';

import React from 'react';
import { Route } from 'lucide-react';

const trips = [
  { id: 'TRP-001', vehicle: 'TS09AB1234', route: 'Hyderabad → Chennai', date: '11 Jun', distance: '625 km', amount: '₹18,000', status: 'In Progress' },
  { id: 'TRP-002', vehicle: 'AP29EF9012', route: 'Hyderabad → Mumbai', date: '11 Jun', distance: '710 km', amount: '₹22,000', status: 'In Progress' },
  { id: 'TRP-003', vehicle: 'TS10CD5678', route: 'Hyderabad → Bangalore', date: '09 Jun', distance: '570 km', amount: '₹16,000', status: 'Completed' },
  { id: 'TRP-004', vehicle: 'TS09AB1234', route: 'Chennai → Hyderabad', date: '08 Jun', distance: '625 km', amount: '₹18,000', status: 'Completed' },
];

const statusColors: Record<string, string> = { 'In Progress': 'bg-yellow-100 text-yellow-700', 'Completed': 'bg-green-100 text-green-700' };

export default function VendorTripsPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-xl font-bold text-gray-900">Trip History</h1><p className="text-sm text-gray-500">All trips assigned to your vehicles</p></div>
      <div className="bg-white rounded-2xl border overflow-hidden">
        <table className="w-full"><thead className="bg-gray-50"><tr><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Trip</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Vehicle</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Route</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Distance</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Amount</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Status</th></tr></thead>
        <tbody className="divide-y divide-gray-50">{trips.map((t) => (<tr key={t.id}><td className="px-4 py-3"><p className="text-xs font-medium">{t.id}</p><p className="text-[10px] text-gray-400">{t.date}</p></td><td className="px-4 py-3 text-xs">{t.vehicle}</td><td className="px-4 py-3 text-xs">{t.route}</td><td className="px-4 py-3 text-xs">{t.distance}</td><td className="px-4 py-3 text-xs font-medium">{t.amount}</td><td className="px-4 py-3"><span className={`text-[10px] px-2 py-0.5 rounded-full ${statusColors[t.status]}`}>{t.status}</span></td></tr>))}</tbody></table>
      </div>
    </div>
  );
}
