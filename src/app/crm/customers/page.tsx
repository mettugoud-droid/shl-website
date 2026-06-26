'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Search, Building2, RefreshCw } from 'lucide-react';

interface Customer {
  id: string;
  customerCode: string;
  companyName: string;
  type: string;
  gst: string | null;
  industry: string | null;
  status: string;
  createdAt: string;
  contacts: { name: string; phone: string | null }[];
}

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search) params.set('search', search);
      const res = await fetch(`/api/crm/customers?${params}`);
      const data = await res.json();
      if (data.success) setCustomers(data.data);
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchCustomers(); }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div><h1 className="text-2xl font-bold text-gray-900">Customers</h1><p className="text-sm text-gray-500">{customers.length} customers registered</p></div>
        <Link href="/crm/customers/new" className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-700"><Plus className="w-4 h-4" /> Add Customer</Link>
      </div>
      <div className="bg-white rounded-2xl border p-4">
        <div className="flex gap-3">
          <div className="flex-1 relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /><input type="text" placeholder="Search company, code..." value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && fetchCustomers()} className="w-full h-10 pl-10 pr-4 rounded-xl border text-sm" /></div>
          <button onClick={fetchCustomers} className="h-10 px-4 border rounded-xl text-sm flex items-center gap-2 hover:bg-gray-50"><RefreshCw className="w-4 h-4" /> Refresh</button>
        </div>
      </div>
      <div className="bg-white rounded-2xl border overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-500"><RefreshCw className="w-5 h-5 animate-spin mx-auto mb-2" />Loading...</div>
        ) : customers.length === 0 ? (
          <div className="p-12 text-center"><Building2 className="w-10 h-10 text-gray-300 mx-auto mb-3" /><p className="text-sm text-gray-500">No customers yet</p><Link href="/crm/customers/new" className="text-xs text-primary hover:underline mt-2 inline-block">+ Add first customer</Link></div>
        ) : (
          <table className="w-full"><thead className="bg-gray-50"><tr><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Customer</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Type</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">GST</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Contact</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Status</th></tr></thead>
          <tbody className="divide-y divide-gray-50">{customers.map((c) => (<tr key={c.id} className="hover:bg-gray-50/50"><td className="px-4 py-3"><div className="flex items-center gap-3"><div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center"><Building2 className="w-4 h-4 text-primary" /></div><div><p className="text-xs font-medium">{c.companyName}</p><p className="text-[10px] text-gray-400">{c.customerCode}</p></div></div></td><td className="px-4 py-3"><span className="text-[10px] px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full">{c.type}</span></td><td className="px-4 py-3 text-xs text-gray-500 font-mono">{c.gst || '-'}</td><td className="px-4 py-3 text-xs text-gray-600">{c.contacts?.[0]?.name || '-'}</td><td className="px-4 py-3"><span className="text-[10px] px-2 py-0.5 rounded-full bg-green-100 text-green-700">{c.status}</span></td></tr>))}</tbody></table>
        )}
      </div>
    </div>
  );
}
