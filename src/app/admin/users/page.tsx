'use client';
import React, { useState, useEffect } from 'react';
import { Plus, Users, RefreshCw, CheckCircle, XCircle } from 'lucide-react';

interface UserData { id: string; name: string; email: string; phone: string|null; isActive: boolean; role: { displayName: string }; createdAt: string; }
interface RoleData { id: string; name: string; displayName: string; }

export default function AdminUsersPage() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [roles, setRoles] = useState<RoleData[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '', phone: '', roleId: '' });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const fetchUsers = async () => { setLoading(true); try { const res = await fetch('/api/admin/users'); const d = await res.json(); if (d.success) setUsers(d.data); } catch {} finally { setLoading(false); } };
  const fetchRoles = async () => { try { const res = await fetch('/api/admin/roles'); const d = await res.json(); if (d.success) setRoles(d.data); } catch {} };
  useEffect(() => { fetchUsers(); fetchRoles(); }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault(); setSubmitting(true); setError('');
    try {
      const res = await fetch('/api/admin/users', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const result = await res.json();
      if (result.success) { setShowForm(false); setForm({ name: '', email: '', password: '', phone: '', roleId: '' }); fetchUsers(); alert('User created! Login: ' + form.email + ' / ' + form.password); }
      else { setError(result.message); }
    } catch { setError('Failed to create'); } finally { setSubmitting(false); }
  };

  const toggleActive = async (id: string, isActive: boolean) => {
    await fetch('/api/admin/users', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, isActive: !isActive }) });
    fetchUsers();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div><h1 className="text-2xl font-bold text-gray-900">User Management</h1><p className="text-sm text-gray-500">Create and manage employee login accounts</p></div>
          <button onClick={() => setShowForm(!showForm)} className="flex items-center gap-2 px-4 py-2.5 bg-[#0A2342] text-white text-sm font-medium rounded-xl hover:opacity-90"><Plus className="w-4 h-4" /> Create User</button>
        </div>

        {showForm && (
          <div className="bg-white rounded-2xl border p-6">
            <h2 className="text-sm font-semibold mb-4">Create New Login Account</h2>
            {error && <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl mb-4">{error}</div>}
            <form onSubmit={handleCreate} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div><label className="block text-xs font-medium text-gray-600 mb-1">Full Name *</label><input value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full h-10 px-3 rounded-xl border text-sm" required /></div>
              <div><label className="block text-xs font-medium text-gray-600 mb-1">Email *</label><input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="name@sriharinathlogistics.com" required /></div>
              <div><label className="block text-xs font-medium text-gray-600 mb-1">Password *</label><input value={form.password} onChange={e => setForm({...form, password: e.target.value})} className="w-full h-10 px-3 rounded-xl border text-sm" placeholder="Min 6 chars" required /></div>
              <div><label className="block text-xs font-medium text-gray-600 mb-1">Phone</label><input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full h-10 px-3 rounded-xl border text-sm" /></div>
              <div><label className="block text-xs font-medium text-gray-600 mb-1">Role *</label><select value={form.roleId} onChange={e => setForm({...form, roleId: e.target.value})} className="w-full h-10 px-3 rounded-xl border text-sm" required><option value="">Select Role</option>{roles.map(r => <option key={r.id} value={r.id}>{r.displayName}</option>)}</select></div>
              <div className="flex items-end gap-2"><button type="submit" disabled={submitting} className="h-10 px-5 bg-[#0A2342] text-white text-sm font-medium rounded-xl disabled:opacity-50">{submitting ? 'Creating...' : 'Create User'}</button><button type="button" onClick={() => setShowForm(false)} className="h-10 px-5 text-gray-600 text-sm hover:bg-gray-100 rounded-xl">Cancel</button></div>
            </form>
          </div>
        )}

        <div className="bg-white rounded-2xl border overflow-hidden">
          {loading ? (<div className="p-12 text-center"><RefreshCw className="w-5 h-5 animate-spin mx-auto mb-2 text-gray-400" /></div>
          ) : users.length === 0 ? (<div className="p-12 text-center"><Users className="w-10 h-10 text-gray-300 mx-auto mb-3" /><p className="text-sm text-gray-500">No users yet. Click &quot;Create User&quot; to add employee logins.</p></div>
          ) : (
            <table className="w-full"><thead className="bg-gray-50"><tr><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Name</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Email</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Role</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Status</th><th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Action</th></tr></thead>
            <tbody className="divide-y divide-gray-50">{users.map(u => (<tr key={u.id} className="hover:bg-gray-50/50"><td className="px-4 py-3 text-xs font-medium">{u.name}</td><td className="px-4 py-3 text-xs text-gray-600">{u.email}</td><td className="px-4 py-3"><span className="text-[10px] px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full">{u.role?.displayName || '-'}</span></td><td className="px-4 py-3">{u.isActive ? <span className="text-[10px] px-2 py-0.5 bg-green-100 text-green-700 rounded-full flex items-center gap-1 w-fit"><CheckCircle className="w-3 h-3" />Active</span> : <span className="text-[10px] px-2 py-0.5 bg-red-100 text-red-700 rounded-full flex items-center gap-1 w-fit"><XCircle className="w-3 h-3" />Inactive</span>}</td><td className="px-4 py-3"><button onClick={() => toggleActive(u.id, u.isActive)} className={`text-[10px] px-2 py-1 rounded-lg ${u.isActive ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>{u.isActive ? 'Deactivate' : 'Activate'}</button></td></tr>))}</tbody></table>
          )}
        </div>
      </div>
    </div>
  );
}
