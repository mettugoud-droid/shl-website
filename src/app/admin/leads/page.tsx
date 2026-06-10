'use client';

import React, { useState, useEffect } from 'react';
import { Search, Download, Filter, RefreshCw, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Lead {
  id: string;
  type: 'CONTACT' | 'QUOTE';
  status: 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'CONVERTED' | 'CLOSED';
  name: string;
  email: string;
  phone: string;
  company: string | null;
  subject: string | null;
  message: string;
  pickupLocation: string | null;
  deliveryLocation: string | null;
  shipmentType: string | null;
  vehicleRequirement: string | null;
  monthlyVolume: string | null;
  source: string;
  createdAt: string;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

const statusColors: Record<string, string> = {
  NEW: 'bg-blue-100 text-blue-700',
  CONTACTED: 'bg-yellow-100 text-yellow-700',
  QUALIFIED: 'bg-purple-100 text-purple-700',
  CONVERTED: 'bg-green-100 text-green-700',
  CLOSED: 'bg-gray-100 text-gray-700',
};

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [pagination, setPagination] = useState<Pagination>({ page: 1, limit: 20, total: 0, totalPages: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });

      const data = await res.json();

      if (data.success) {
        setToken(data.data.token);
        setIsAuthenticated(true);
      } else {
        setLoginError(data.message || 'Login failed');
      }
    } catch {
      setLoginError('Connection error. Please try again.');
    }
  };

  const fetchLeads = async (page = 1) => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        page: String(page),
        limit: '20',
        ...(search && { search }),
        ...(typeFilter && { type: typeFilter }),
        ...(statusFilter && { status: statusFilter }),
      });

      const res = await fetch(`/api/leads?${params}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      if (data.success) {
        setLeads(data.data.leads);
        setPagination(data.data.pagination);
      }
    } catch (error) {
      console.error('Fetch leads error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const res = await fetch('/api/leads', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id, status }),
      });

      if ((await res.json()).success) {
        fetchLeads(pagination.page);
      }
    } catch (error) {
      console.error('Update error:', error);
    }
  };

  const handleExport = async () => {
    const params = new URLSearchParams({
      ...(typeFilter && { type: typeFilter }),
      ...(statusFilter && { status: statusFilter }),
    });

    const res = await fetch(`/api/leads/export?${params}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.ok) {
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `shl-leads-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads();
    }
  }, [isAuthenticated, typeFilter, statusFilter]);

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-accent flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-card border border-gray-100 p-8">
          <div className="text-center mb-6">
            <h1 className="text-heading-xl font-heading font-bold text-primary">Admin Panel</h1>
            <p className="text-body-sm text-gray-500 mt-1">Sri Harinath Logistics</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && (
              <div className="p-3 bg-error-light rounded-xl text-sm text-red-700 text-center">
                {loginError}
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-primary mb-1.5">Email</label>
              <Input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="admin@sriharinathlogistics.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-1.5">Password</label>
              <Input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>
            <Button type="submit" className="w-full" size="lg">
              Login
            </Button>
          </form>
        </div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-accent">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <Container>
          <div className="flex items-center justify-between py-4">
            <div>
              <h1 className="text-heading-lg font-heading font-bold text-primary">Lead Management</h1>
              <p className="text-body-sm text-gray-500">Manage website inquiries and quote requests</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" onClick={() => fetchLeads(pagination.page)}>
                <RefreshCw className="w-4 h-4 mr-1" />
                Refresh
              </Button>
              <Button variant="default" size="sm" onClick={handleExport}>
                <Download className="w-4 h-4 mr-1" />
                Export CSV
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-6">
          {/* Filters */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by name, email, phone, or company..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && fetchLeads(1)}
                    className="w-full h-10 pl-10 pr-4 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="h-10 px-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="">All Types</option>
                <option value="CONTACT">Contact</option>
                <option value="QUOTE">Quote</option>
              </select>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="h-10 px-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="">All Status</option>
                <option value="NEW">New</option>
                <option value="CONTACTED">Contacted</option>
                <option value="QUALIFIED">Qualified</option>
                <option value="CONVERTED">Converted</option>
                <option value="CLOSED">Closed</option>
              </select>
              <Button variant="primary" size="sm" onClick={() => fetchLeads(1)}>
                <Filter className="w-4 h-4 mr-1" />
                Filter
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            <div className="bg-white rounded-xl border border-gray-100 p-4 text-center">
              <p className="text-2xl font-heading font-bold text-primary">{pagination.total}</p>
              <p className="text-xs text-gray-500">Total Leads</p>
            </div>
            <div className="bg-white rounded-xl border border-blue-100 p-4 text-center">
              <p className="text-2xl font-heading font-bold text-blue-600">
                {leads.filter((l) => l.status === 'NEW').length}
              </p>
              <p className="text-xs text-gray-500">New</p>
            </div>
            <div className="bg-white rounded-xl border border-yellow-100 p-4 text-center">
              <p className="text-2xl font-heading font-bold text-yellow-600">
                {leads.filter((l) => l.status === 'CONTACTED').length}
              </p>
              <p className="text-xs text-gray-500">Contacted</p>
            </div>
            <div className="bg-white rounded-xl border border-green-100 p-4 text-center">
              <p className="text-2xl font-heading font-bold text-green-600">
                {leads.filter((l) => l.status === 'CONVERTED').length}
              </p>
              <p className="text-xs text-gray-500">Converted</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-4 text-center">
              <p className="text-2xl font-heading font-bold text-gray-600">
                {leads.filter((l) => l.type === 'QUOTE').length}
              </p>
              <p className="text-xs text-gray-500">Quotes</p>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden">
            {isLoading ? (
              <div className="p-12 text-center text-gray-500">
                <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2" />
                Loading leads...
              </div>
            ) : leads.length === 0 ? (
              <div className="p-12 text-center text-gray-500">
                No leads found. Leads will appear here when inquiries are submitted.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Name</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Type</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Contact</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Company</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Date</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {leads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-4 py-3">
                          <p className="text-sm font-medium text-primary">{lead.name}</p>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${
                            lead.type === 'QUOTE' ? 'bg-secondary/10 text-secondary-700' : 'bg-primary/10 text-primary'
                          }`}>
                            {lead.type}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-xs text-gray-600">{lead.email}</p>
                          <p className="text-xs text-gray-400">{lead.phone}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-xs text-gray-600">{lead.company || '-'}</p>
                        </td>
                        <td className="px-4 py-3">
                          <select
                            value={lead.status}
                            onChange={(e) => updateStatus(lead.id, e.target.value)}
                            className={`text-[10px] font-medium px-2 py-1 rounded-full border-0 cursor-pointer ${statusColors[lead.status]}`}
                          >
                            <option value="NEW">New</option>
                            <option value="CONTACTED">Contacted</option>
                            <option value="QUALIFIED">Qualified</option>
                            <option value="CONVERTED">Converted</option>
                            <option value="CLOSED">Closed</option>
                          </select>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-xs text-gray-500">
                            {new Date(lead.createdAt).toLocaleDateString('en-IN', {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </p>
                        </td>
                        <td className="px-4 py-3">
                          <button
                            onClick={() => setSelectedLead(lead)}
                            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                            title="View Details"
                          >
                            <Eye className="w-4 h-4 text-gray-500" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
                <p className="text-xs text-gray-500">
                  Showing {(pagination.page - 1) * pagination.limit + 1} to{' '}
                  {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => fetchLeads(pagination.page - 1)}
                    disabled={pagination.page <= 1}
                    className="p-1.5 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-gray-600">
                    Page {pagination.page} of {pagination.totalPages}
                  </span>
                  <button
                    onClick={() => fetchLeads(pagination.page + 1)}
                    disabled={pagination.page >= pagination.totalPages}
                    className="p-1.5 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Lead Detail Modal */}
          {selectedLead && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedLead(null)}>
              <div className="bg-white rounded-2xl shadow-hard max-w-lg w-full max-h-[80vh] overflow-y-auto p-6" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-heading-md font-heading font-semibold text-primary">
                    Lead Details
                  </h3>
                  <button onClick={() => setSelectedLead(null)} className="p-1 hover:bg-gray-100 rounded-lg">
                    ✕
                  </button>
                </div>

                <div className="space-y-3">
                  <DetailRow label="Type" value={selectedLead.type} />
                  <DetailRow label="Status" value={selectedLead.status} />
                  <DetailRow label="Name" value={selectedLead.name} />
                  <DetailRow label="Email" value={selectedLead.email} />
                  <DetailRow label="Phone" value={selectedLead.phone} />
                  {selectedLead.company && <DetailRow label="Company" value={selectedLead.company} />}
                  {selectedLead.subject && <DetailRow label="Subject" value={selectedLead.subject} />}
                  {selectedLead.pickupLocation && <DetailRow label="Pickup" value={selectedLead.pickupLocation} />}
                  {selectedLead.deliveryLocation && <DetailRow label="Delivery" value={selectedLead.deliveryLocation} />}
                  {selectedLead.shipmentType && <DetailRow label="Shipment Type" value={selectedLead.shipmentType} />}
                  {selectedLead.vehicleRequirement && <DetailRow label="Vehicle" value={selectedLead.vehicleRequirement} />}
                  {selectedLead.monthlyVolume && <DetailRow label="Monthly Volume" value={selectedLead.monthlyVolume} />}
                  <DetailRow label="Message" value={selectedLead.message} />
                  <DetailRow label="Source" value={selectedLead.source} />
                  <DetailRow label="Date" value={new Date(selectedLead.createdAt).toLocaleString('en-IN')} />
                </div>

                <div className="flex gap-3 mt-6">
                  <a href={`mailto:${selectedLead.email}`} className="flex-1">
                    <Button variant="primary" size="sm" className="w-full">
                      Email
                    </Button>
                  </a>
                  <a href={`tel:+91${selectedLead.phone}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      Call
                    </Button>
                  </a>
                  <a
                    href={`https://wa.me/91${selectedLead.phone}?text=Hi ${selectedLead.name}, this is from Sri Harinath Logistics regarding your inquiry.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="whatsapp" size="sm" className="w-full">
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 py-2 border-b border-gray-50 last:border-0">
      <span className="text-xs font-medium text-gray-400 uppercase w-28 flex-shrink-0 pt-0.5">{label}</span>
      <span className="text-sm text-gray-700 flex-1">{value || '-'}</span>
    </div>
  );
}
