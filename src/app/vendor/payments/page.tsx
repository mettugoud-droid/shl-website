'use client';

import React from 'react';
import { CheckCircle, Clock, IndianRupee } from 'lucide-react';

const payments = [
  { id: 'PAY-001', trips: 'TRP-003, TRP-004', amount: '₹34,000', date: '10 Jun', status: 'Paid', mode: 'NEFT' },
  { id: 'PAY-002', trips: 'TRP-005', amount: '₹8,500', date: '09 Jun', status: 'Paid', mode: 'NEFT' },
  { id: 'PAY-003', trips: 'TRP-001, TRP-002', amount: '₹40,000', date: 'Pending', status: 'Pending', mode: '-' },
];

export default function VendorPaymentsPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-xl font-bold text-gray-900">Payments</h1><p className="text-sm text-gray-500">Track trip payments</p></div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border p-4 flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-600" /><div><p className="text-lg font-bold text-green-600">₹42,500</p><p className="text-[10px] text-gray-500">Received</p></div></div>
        <div className="bg-white rounded-xl border p-4 flex items-center gap-3"><Clock className="w-5 h-5 text-orange-600" /><div><p className="text-lg font-bold text-orange-600">₹40,000</p><p className="text-[10px] text-gray-500">Pending</p></div></div>
        <div className="bg-white rounded-xl border p-4 flex items-center gap-3"><IndianRupee className="w-5 h-5 text-blue-600" /><div><p className="text-lg font-bold">₹2,85,000</p><p className="text-[10px] text-gray-500">Total (YTD)</p></div></div>
      </div>
      <div className="bg-white rounded-2xl border overflow-hidden">
        <table className="w-full"><thead className="bg-gray-50"><tr><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Payment</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Trips</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Amount</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Date</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Status</th></tr></thead>
        <tbody className="divide-y divide-gray-50">{payments.map((p) => (<tr key={p.id}><td className="px-4 py-3 text-xs font-medium">{p.id}</td><td className="px-4 py-3 text-xs">{p.trips}</td><td className="px-4 py-3 text-xs font-bold">{p.amount}</td><td className="px-4 py-3 text-xs text-gray-500">{p.date}</td><td className="px-4 py-3"><span className={`text-[10px] px-2 py-0.5 rounded-full ${p.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>{p.status}</span></td></tr>))}</tbody></table>
      </div>
    </div>
  );
}
