'use client';
import React from 'react';
import { FileText, Plus, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

const contracts = [
  { id: 'CTR-001', customer: 'Vishwa FMCG', title: 'Annual FTL Contract', period: 'Jan-Dec 2026', value: '₹25L/yr', status: 'Active' },
  { id: 'CTR-002', customer: 'MedLife Pharma', title: 'Monthly PTL', period: 'Mar 2026-Feb 2027', value: '₹8L/yr', status: 'Active' },
  { id: 'CTR-003', customer: 'TechBazaar', title: 'Dedicated Fleet', period: 'Apr 2026-Mar 2027', value: '₹15L/yr', status: 'Active' },
  { id: 'CTR-004', customer: 'Gujarat Auto', title: 'FTL Rate Card', period: 'Jan-Jun 2026', value: '₹5L', status: 'Expiring' },
  { id: 'CTR-005', customer: 'Old Corp', title: 'Transport Agreement', period: 'Jan-Dec 2025', value: '₹12L', status: 'Expired' },
];
const sc: Record<string, string> = { Active: 'bg-green-100 text-green-700', Expiring: 'bg-orange-100 text-orange-700', Expired: 'bg-red-100 text-red-700' };

export default function ContractsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between"><div><h1 className="text-2xl font-bold text-gray-900">Contracts</h1><p className="text-sm text-gray-500">Customer contracts and rate cards</p></div><button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-xl"><Plus className="w-4 h-4" /> New Contract</button></div>
      <div className="grid grid-cols-3 gap-4"><div className="bg-white rounded-xl border p-4 flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-600" /><div><p className="text-lg font-bold">12</p><p className="text-[10px] text-gray-500">Active</p></div></div><div className="bg-white rounded-xl border p-4 flex items-center gap-3"><Clock className="w-5 h-5 text-orange-600" /><div><p className="text-lg font-bold">3</p><p className="text-[10px] text-gray-500">Expiring</p></div></div><div className="bg-white rounded-xl border p-4 flex items-center gap-3"><AlertTriangle className="w-5 h-5 text-red-600" /><div><p className="text-lg font-bold">5</p><p className="text-[10px] text-gray-500">Expired</p></div></div></div>
      <div className="space-y-3">{contracts.map((c) => (<div key={c.id} className="bg-white rounded-2xl border p-5 flex items-center justify-between hover:shadow-md transition-shadow"><div className="flex items-center gap-4"><div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center"><FileText className="w-5 h-5 text-primary" /></div><div><p className="text-sm font-bold">{c.title}</p><p className="text-xs text-gray-500">{c.customer} • {c.id}</p><p className="text-[10px] text-gray-400">{c.period}</p></div></div><div className="text-right"><p className="text-sm font-bold">{c.value}</p><span className={`text-[10px] px-2 py-0.5 rounded-full ${sc[c.status]}`}>{c.status}</span></div></div>))}</div>
    </div>
  );
}
