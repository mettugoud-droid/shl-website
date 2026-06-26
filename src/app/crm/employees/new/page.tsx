'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';

export default function NewEmployeePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    try {
      const res = await fetch('/api/crm/employees', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      const result = await res.json();
      if (result.success) { alert('Employee created: ' + result.data.employeeCode); window.location.href = '/crm/employees'; }
      else { alert(result.message); }
    } catch { alert('Error creating employee'); }
    finally { setIsSubmitting(false); }
  };
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4"><Link href="/crm/employees" className="p-2 hover:bg-gray-100 rounded-lg"><ArrowLeft className="w-5 h-5 text-gray-600" /></Link><div><h1 className="text-2xl font-bold text-gray-900">Add Employee</h1><p className="text-sm text-gray-500">Register a new team member</p></div></div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-2xl border p-6"><h2 className="text-sm font-semibold mb-4">Personal</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-4"><div><label className="block text-xs font-medium text-gray-600 mb-1">Name *</label><input name="name" className="w-full h-10 px-3 rounded-xl border text-sm" required /></div><div><label className="block text-xs font-medium text-gray-600 mb-1">Phone *</label><input name="phone" className="w-full h-10 px-3 rounded-xl border text-sm" required /></div><div><label className="block text-xs font-medium text-gray-600 mb-1">Email</label><input name="email" type="email" className="w-full h-10 px-3 rounded-xl border text-sm" /></div><div><label className="block text-xs font-medium text-gray-600 mb-1">Department *</label><select name="department" className="w-full h-10 px-3 rounded-xl border text-sm"><option>Operations</option><option>Sales</option><option>Accounts</option><option>HR</option><option>Dispatch</option><option>Warehouse</option><option>Customer Support</option></select></div><div><label className="block text-xs font-medium text-gray-600 mb-1">Designation *</label><input name="designation" className="w-full h-10 px-3 rounded-xl border text-sm" required /></div><div><label className="block text-xs font-medium text-gray-600 mb-1">Date of Joining</label><input name="dateOfJoining" type="date" className="w-full h-10 px-3 rounded-xl border text-sm" /></div></div></div>
        <div className="flex items-center justify-end gap-3"><Link href="/crm/employees" className="px-5 py-2.5 text-sm text-gray-600 hover:bg-gray-100 rounded-xl">Cancel</Link><button type="submit" disabled={isSubmitting} className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-xl disabled:opacity-50">{isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}{isSubmitting ? 'Adding...' : 'Add Employee'}</button></div>
      </form>
    </div>
  );
}
