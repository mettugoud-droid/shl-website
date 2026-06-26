'use client';

import React from 'react';
import Link from 'next/link';
import { Plus, Users, Target, IndianRupee, TrendingUp, Star } from 'lucide-react';

const pipelineStages = [
  { name: 'New', count: 12, value: '₹8.5L', color: 'bg-blue-500' },
  { name: 'Qualified', count: 8, value: '₹12.2L', color: 'bg-indigo-500' },
  { name: 'Proposal', count: 5, value: '₹18.5L', color: 'bg-purple-500' },
  { name: 'Negotiation', count: 3, value: '₹9.8L', color: 'bg-orange-500' },
  { name: 'Won', count: 6, value: '₹22.1L', color: 'bg-green-500' },
  { name: 'Lost', count: 4, value: '₹5.2L', color: 'bg-red-500' },
];

const recentLeads = [
  { id: '1', company: 'Deccan Foods Pvt Ltd', contact: 'Ramesh Gupta', source: 'Website', stage: 'New', value: '₹2.5L', assignee: 'Priya S' },
  { id: '2', company: 'Southern Textiles', contact: 'Lakshmi N', source: 'Referral', stage: 'Qualified', value: '₹4.0L', assignee: 'Priya S' },
  { id: '3', company: 'Metro Distributors', contact: 'Anil K', source: 'Cold Call', stage: 'Proposal', value: '₹6.5L', assignee: 'Rahul K' },
  { id: '4', company: 'Star Pharma Ltd', contact: 'Dr. Reddy', source: 'Website', stage: 'Negotiation', value: '₹3.2L', assignee: 'Priya S' },
  { id: '5', company: 'Bharat Electronics', contact: 'Suresh P', source: 'LinkedIn', stage: 'New', value: '₹1.8L', assignee: 'Rahul K' },
];

const stageColors: Record<string, string> = {
  'New': 'bg-blue-100 text-blue-700', 'Qualified': 'bg-indigo-100 text-indigo-700',
  'Proposal': 'bg-purple-100 text-purple-700', 'Negotiation': 'bg-orange-100 text-orange-700',
  'Won': 'bg-green-100 text-green-700', 'Lost': 'bg-red-100 text-red-700',
};

const todayFollowUps = [
  { company: 'Deccan Foods', type: 'Call', time: '10:30 AM', note: 'Discuss FTL rates' },
  { company: 'Southern Textiles', type: 'Email', time: '12:00 PM', note: 'Send revised quotation' },
  { company: 'Star Pharma', type: 'Meeting', time: '3:00 PM', note: 'Contract discussion' },
];

export default function SalesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div><h1 className="text-2xl font-bold text-gray-900">Sales CRM</h1><p className="text-sm text-gray-500">Manage leads, pipeline, and follow-ups</p></div>
        <Link href="/crm/sales/new" className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-700"><Plus className="w-4 h-4" /> Add Lead</Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border p-4 flex items-center gap-3"><div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center"><Users className="w-5 h-5 text-blue-600" /></div><div><p className="text-lg font-bold">38</p><p className="text-[10px] text-gray-500">Total Leads</p></div></div>
        <div className="bg-white rounded-xl border p-4 flex items-center gap-3"><div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center"><Target className="w-5 h-5 text-green-600" /></div><div><p className="text-lg font-bold">6</p><p className="text-[10px] text-gray-500">Won This Month</p></div></div>
        <div className="bg-white rounded-xl border p-4 flex items-center gap-3"><div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center"><IndianRupee className="w-5 h-5 text-purple-600" /></div><div><p className="text-lg font-bold">₹22.1L</p><p className="text-[10px] text-gray-500">Won Value</p></div></div>
        <div className="bg-white rounded-xl border p-4 flex items-center gap-3"><div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center"><TrendingUp className="w-5 h-5 text-orange-600" /></div><div><p className="text-lg font-bold">68%</p><p className="text-[10px] text-gray-500">Win Rate</p></div></div>
      </div>
      <div className="bg-white rounded-2xl border p-5">
        <h2 className="text-sm font-semibold text-gray-900 mb-4">Sales Pipeline</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {pipelineStages.map((stage) => (
            <div key={stage.name} className="text-center p-3 rounded-xl bg-gray-50 border border-gray-100">
              <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${stage.color}`} />
              <p className="text-xs font-semibold text-gray-700">{stage.name}</p>
              <p className="text-lg font-bold text-gray-900">{stage.count}</p>
              <p className="text-[10px] text-gray-500">{stage.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl border overflow-hidden">
          <div className="px-5 py-4 border-b flex items-center justify-between"><h2 className="text-sm font-semibold">Recent Leads</h2></div>
          <table className="w-full"><thead className="bg-gray-50"><tr><th className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase">Company</th><th className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase">Source</th><th className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase">Value</th><th className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase">Stage</th><th className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase">Assigned</th></tr></thead>
          <tbody className="divide-y divide-gray-50">{recentLeads.map((l) => (<tr key={l.id} className="hover:bg-gray-50/50"><td className="px-4 py-3"><p className="text-xs font-medium">{l.company}</p><p className="text-[10px] text-gray-400">{l.contact}</p></td><td className="px-4 py-3 text-xs text-gray-600">{l.source}</td><td className="px-4 py-3 text-xs font-medium">{l.value}</td><td className="px-4 py-3"><span className={`text-[10px] px-2 py-0.5 rounded-full ${stageColors[l.stage]}`}>{l.stage}</span></td><td className="px-4 py-3 text-xs text-gray-600">{l.assignee}</td></tr>))}</tbody></table>
        </div>
        <div className="bg-white rounded-2xl border">
          <div className="px-5 py-4 border-b"><h2 className="text-sm font-semibold">Today&apos;s Follow-ups</h2></div>
          <div className="p-4 space-y-3">{todayFollowUps.map((f, i) => (<div key={i} className="p-3 rounded-xl bg-gray-50 border"><div className="flex justify-between mb-1"><p className="text-xs font-medium">{f.company}</p><span className="text-[10px] text-gray-400">{f.time}</span></div><p className="text-[10px] text-gray-500">{f.note}</p><span className={`text-[10px] px-2 py-0.5 rounded-full mt-1 inline-block ${f.type === 'Call' ? 'bg-green-50 text-green-700' : f.type === 'Email' ? 'bg-blue-50 text-blue-700' : 'bg-purple-50 text-purple-700'}`}>{f.type}</span></div>))}</div>
        </div>
      </div>
    </div>
  );
}
