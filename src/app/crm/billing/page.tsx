'use client';

import React from 'react';
import Link from 'next/link';
import { Plus, Search, Download, IndianRupee, FileText, CheckCircle, Clock } from 'lucide-react';

const stats = [
  { title: 'Total Invoiced', value: '₹18.5L', icon: FileText, color: 'bg-blue-50 text-blue-600' },
  { title: 'Collected', value: '₹14.2L', icon: CheckCircle, color: 'bg-green-50 text-green-600' },
  { title: 'Outstanding', value: '₹4.3L', icon: Clock, color: 'bg-orange-50 text-orange-600' },
  { title: 'Overdue', value: '₹1.8L', icon: IndianRupee, color: 'bg-red-50 text-red-600' },
];

const mockInvoices = [
  { id: 'INV-2026-0145', customer: 'Vishwa FMCG', date: '10 Jun', amount: '₹85,000', paid: '₹85,000', status: 'Paid', due: '-' },
  { id: 'INV-2026-0144', customer: 'MedLife Pharma', date: '09 Jun', amount: '₹1,25,000', paid: '₹0', status: 'Unpaid', due: '24 Jun' },
  { id: 'INV-2026-0143', customer: 'TechBazaar', date: '08 Jun', amount: '₹45,000', paid: '₹45,000', status: 'Paid', due: '-' },
  { id: 'INV-2026-0142', customer: 'FreshMart', date: '07 Jun', amount: '₹2,10,000', paid: '₹1,50,000', status: 'Partial', due: '22 Jun' },
  { id: 'INV-2026-0141', customer: 'Gujarat Auto', date: '05 Jun', amount: '₹68,000', paid: '₹0', status: 'Overdue', due: '10 Jun' },
];

const statusColors: Record<string, string> = { 'Paid': 'bg-green-100 text-green-700', 'Unpaid': 'bg-yellow-100 text-yellow-700', 'Partial': 'bg-blue-100 text-blue-700', 'Overdue': 'bg-red-100 text-red-700' };

export default function BillingPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div><h1 className="text-2xl font-bold text-gray-900">Billing & Invoices</h1><p className="text-sm text-gray-500">Manage invoices, payments, and outstanding</p></div>
        <Link href="/crm/billing/new" className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-700"><Plus className="w-4 h-4" /> Create Invoice</Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">{stats.map((s) => { const Icon = s.icon; return (<div key={s.title} className="bg-white rounded-xl border p-4 flex items-center gap-3"><div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.color}`}><Icon className="w-5 h-5" /></div><div><p className="text-lg font-bold">{s.value}</p><p className="text-[10px] text-gray-500">{s.title}</p></div></div>); })}</div>
      <div className="bg-white rounded-2xl border p-4"><div className="flex flex-col md:flex-row gap-3"><div className="flex-1 relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /><input type="text" placeholder="Search invoice, customer..." className="w-full h-10 pl-10 pr-4 rounded-xl border text-sm" /></div><select className="h-10 px-3 rounded-xl border text-sm"><option value="">All Status</option><option>Paid</option><option>Unpaid</option><option>Partial</option><option>Overdue</option></select><button className="h-10 px-4 border rounded-xl text-sm flex items-center gap-2 hover:bg-gray-50"><Download className="w-4 h-4" /> Export</button></div></div>
      <div className="bg-white rounded-2xl border overflow-hidden">
        <table className="w-full"><thead className="bg-gray-50"><tr><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Invoice</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Customer</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Date</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Amount</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Paid</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Due</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Status</th></tr></thead>
        <tbody className="divide-y divide-gray-50">{mockInvoices.map((inv) => (<tr key={inv.id} className="hover:bg-gray-50/50"><td className="px-4 py-3 text-xs font-medium text-primary">{inv.id}</td><td className="px-4 py-3 text-xs">{inv.customer}</td><td className="px-4 py-3 text-xs text-gray-500">{inv.date}</td><td className="px-4 py-3 text-xs font-medium">{inv.amount}</td><td className="px-4 py-3 text-xs text-green-600">{inv.paid}</td><td className="px-4 py-3 text-xs text-gray-500">{inv.due}</td><td className="px-4 py-3"><span className={`text-[10px] px-2 py-0.5 rounded-full ${statusColors[inv.status]}`}>{inv.status}</span></td></tr>))}</tbody></table>
      </div>
    </div>
  );
}
