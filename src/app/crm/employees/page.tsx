'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Search, Users, RefreshCw } from 'lucide-react';

interface Employee {
  id: string;
  employeeCode: string;
  name: string;
  phone: string;
  email: string | null;
  department: string | null;
  designation: string | null;
  status: string;
  createdAt: string;
}

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search) params.set('search', search);
      const res = await fetch(`/api/crm/employees?${params}`);
      const data = await res.json();
      if (data.success) setEmployees(data.data);
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchEmployees(); }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div><h1 className="text-2xl font-bold text-gray-900">Employees</h1><p className="text-sm text-gray-500">Manage team members ({employees.length} total)</p></div>
        <Link href="/crm/employees/new" className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-700"><Plus className="w-4 h-4" /> Add Employee</Link>
      </div>
      <div className="bg-white rounded-2xl border p-4">
        <div className="flex gap-3">
          <div className="flex-1 relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /><input type="text" placeholder="Search by name, code, phone..." value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && fetchEmployees()} className="w-full h-10 pl-10 pr-4 rounded-xl border text-sm" /></div>
          <button onClick={fetchEmployees} className="h-10 px-4 border rounded-xl text-sm flex items-center gap-2 hover:bg-gray-50"><RefreshCw className="w-4 h-4" /> Refresh</button>
        </div>
      </div>
      <div className="bg-white rounded-2xl border overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-500"><RefreshCw className="w-5 h-5 animate-spin mx-auto mb-2" />Loading...</div>
        ) : employees.length === 0 ? (
          <div className="p-12 text-center"><Users className="w-10 h-10 text-gray-300 mx-auto mb-3" /><p className="text-sm text-gray-500">No employees yet</p><Link href="/crm/employees/new" className="text-xs text-primary hover:underline mt-2 inline-block">+ Add first employee</Link></div>
        ) : (
          <table className="w-full"><thead className="bg-gray-50"><tr><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Employee</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Department</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Designation</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Phone</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Status</th></tr></thead>
          <tbody className="divide-y divide-gray-50">{employees.map((e) => (<tr key={e.id} className="hover:bg-gray-50/50"><td className="px-4 py-3"><p className="text-xs font-medium text-gray-900">{e.name}</p><p className="text-[10px] text-gray-400">{e.employeeCode}</p></td><td className="px-4 py-3 text-xs text-gray-600">{e.department || '-'}</td><td className="px-4 py-3 text-xs text-gray-600">{e.designation || '-'}</td><td className="px-4 py-3 text-xs text-gray-600">{e.phone}</td><td className="px-4 py-3"><span className="text-[10px] px-2 py-0.5 rounded-full bg-green-100 text-green-700">{e.status}</span></td></tr>))}</tbody></table>
        )}
      </div>
    </div>
  );
}
