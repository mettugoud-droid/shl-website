'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Search, Users, RefreshCw, TrendingUp } from 'lucide-react';

interface Lead {
  id: string;
  companyName: string | null;
  contactName: string;
  phone: string;
  email: string | null;
  source: string;
  requirement: string | null;
  stage: string;
  createdAt: string;
}

const stageColors: Record<string, string> = {
  'NEW': 'bg-blue-100 text-blue-700', 'QUALIFIED': 'bg-indigo-100 text-indigo-700',
  'PROPOSAL': 'bg-purple-100 text-purple-700', 'NEGOTIATION': 'bg-orange-100 text-orange-700',
  'WON': 'bg-green-100 text-green-700', 'LOST': 'bg-red-100 text-red-700',
};

export default function SalesPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search) params.set('search', search);
      const res = await fetch(`/api/crm/leads?${params}`);
      const data = await res.json();
      if (data.success) setLeads(data.data);
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  };

  const updateStage = async (id: string, stage: string) => {
    try {
      await fetch('/api/crm/leads', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, stage }) });
      fetchLeads();
    } catch (e) { console.error(e); }
  };

  useEffect(() => { fetchLeads(); }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div><h1 className="text-2xl font-bold text-gray-900">Sales CRM</h1><p className="text-sm text-gray-500">{leads.length} leads in pipeline</p></div>
        <Link href="/crm/sales/new" className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-700"><Plus className="w-4 h-4" /> Add Lead</Link>
      </div>
      <div className="bg-white rounded-2xl border p-4">
        <div className="flex gap-3">
          <div className="flex-1 relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /><input type="text" placeholder="Search leads..." value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && fetchLeads()} className="w-full h-10 pl-10 pr-4 rounded-xl border text-sm" /></div>
          <button onClick={fetchLeads} className="h-10 px-4 border rounded-xl text-sm flex items-center gap-2 hover:bg-gray-50"><RefreshCw className="w-4 h-4" /> Refresh</button>
        </div>
      </div>
      <div className="bg-white rounded-2xl border overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-500"><RefreshCw className="w-5 h-5 animate-spin mx-auto mb-2" />Loading...</div>
        ) : leads.length === 0 ? (
          <div className="p-12 text-center"><TrendingUp className="w-10 h-10 text-gray-300 mx-auto mb-3" /><p className="text-sm text-gray-500">No leads yet</p><Link href="/crm/sales/new" className="text-xs text-primary hover:underline mt-2 inline-block">+ Add first lead</Link></div>
        ) : (
          <table className="w-full"><thead className="bg-gray-50"><tr><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Contact</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Company</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Phone</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Source</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Stage</th></tr></thead>
          <tbody className="divide-y divide-gray-50">{leads.map((l) => (<tr key={l.id} className="hover:bg-gray-50/50"><td className="px-4 py-3 text-xs font-medium">{l.contactName}</td><td className="px-4 py-3 text-xs text-gray-600">{l.companyName || '-'}</td><td className="px-4 py-3 text-xs text-gray-600">{l.phone}</td><td className="px-4 py-3 text-xs text-gray-500">{l.source}</td><td className="px-4 py-3"><select value={l.stage} onChange={(e) => updateStage(l.id, e.target.value)} className={`text-[10px] font-medium px-2 py-1 rounded-full border-0 cursor-pointer ${stageColors[l.stage] || 'bg-gray-100'}`}><option value="NEW">New</option><option value="QUALIFIED">Qualified</option><option value="PROPOSAL">Proposal</option><option value="NEGOTIATION">Negotiation</option><option value="WON">Won</option><option value="LOST">Lost</option></select></td></tr>))}</tbody></table>
        )}
      </div>
    </div>
  );
}
