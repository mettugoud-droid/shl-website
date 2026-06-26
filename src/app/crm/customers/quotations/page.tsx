'use client';
import React from 'react';
import { Plus } from 'lucide-react';

const data = [
  { id: 'QT-2026-0045', customer: 'Deccan Foods', date: '10 Jun', amount: '₹2,50,000', validity: '15 Jun', status: 'Sent' },
  { id: 'QT-2026-0044', customer: 'Southern Textiles', date: '08 Jun', amount: '₹4,00,000', validity: '18 Jun', status: 'Accepted' },
  { id: 'QT-2026-0043', customer: 'Star Pharma', date: '05 Jun', amount: '₹1,80,000', validity: '12 Jun', status: 'Expired' },
  { id: 'QT-2026-0042', customer: 'Bharat Electronics', date: '02 Jun', amount: '₹3,20,000', validity: '10 Jun', status: 'Rejected' },
  { id: 'QT-2026-0041', customer: 'Metro Distributors', date: '28 May', amount: '₹6,50,000', validity: '05 Jun', status: 'Accepted' },
];
const sc: Record<string, string> = { Sent: 'bg-blue-100 text-blue-700', Accepted: 'bg-green-100 text-green-700', Expired: 'bg-gray-100 text-gray-600', Rejected: 'bg-red-100 text-red-700' };

export default function QuotationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between"><div><h1 className="text-2xl font-bold text-gray-900">Quotations</h1><p className="text-sm text-gray-500">Manage customer quotations</p></div><button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-xl"><Plus className="w-4 h-4" /> New Quotation</button></div>
      <div className="grid grid-cols-4 gap-4"><div className="bg-white rounded-xl border p-4 text-center"><p className="text-2xl font-bold">45</p><p className="text-xs text-gray-500">Total</p></div><div className="bg-white rounded-xl border p-4 text-center"><p className="text-2xl font-bold text-blue-600">12</p><p className="text-xs text-gray-500">Sent</p></div><div className="bg-white rounded-xl border p-4 text-center"><p className="text-2xl font-bold text-green-600">28</p><p className="text-xs text-gray-500">Accepted</p></div><div className="bg-white rounded-xl border p-4 text-center"><p className="text-2xl font-bold text-red-600">5</p><p className="text-xs text-gray-500">Rejected</p></div></div>
      <div className="bg-white rounded-2xl border overflow-hidden"><table className="w-full"><thead className="bg-gray-50"><tr><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">ID</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Customer</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Date</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Amount</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Valid Till</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Status</th></tr></thead><tbody className="divide-y divide-gray-50">{data.map((q) => (<tr key={q.id} className="hover:bg-gray-50/50"><td className="px-4 py-3 text-xs font-medium text-primary">{q.id}</td><td className="px-4 py-3 text-xs">{q.customer}</td><td className="px-4 py-3 text-xs text-gray-500">{q.date}</td><td className="px-4 py-3 text-xs font-medium">{q.amount}</td><td className="px-4 py-3 text-xs text-gray-500">{q.validity}</td><td className="px-4 py-3"><span className={`text-[10px] px-2 py-0.5 rounded-full ${sc[q.status]}`}>{q.status}</span></td></tr>))}</tbody></table></div>
    </div>
  );
}
