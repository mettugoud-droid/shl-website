'use client';

import React from 'react';
import Link from 'next/link';
import { Plus, Search, Download, Building2 } from 'lucide-react';

const mockCustomers = [
  { id: '1', code: 'CUST-001', name: 'Vishwa FMCG Pvt Ltd', type: 'B2B', city: 'Hyderabad', gst: '36ABCDE1234F1Z5', outstanding: '₹1,25,000', shipments: 45, status: 'Active' },
  { id: '2', code: 'CUST-002', name: 'MedLife Pharmaceuticals', type: 'B2B', city: 'Secunderabad', gst: '36FGHIJ5678G2Z6', outstanding: '₹85,000', shipments: 32, status: 'Active' },
  { id: '3', code: 'CUST-003', name: 'TechBazaar E-Commerce', type: 'B2B', city: 'Hyderabad', gst: '36KLMNO9012H3Z7', outstanding: '₹2,10,000', shipments: 78, status: 'Active' },
  { id: '4', code: 'CUST-004', name: 'FreshMart Retail', type: 'B2B', city: 'Vijayawada', gst: '37PQRST3456I4Z8', outstanding: '₹45,000', shipments: 22, status: 'Active' },
  { id: '5', code: 'CUST-005', name: 'Gujarat Auto Parts', type: 'B2B', city: 'Ahmedabad', gst: '24UVWXY7890J5Z9', outstanding: '₹0', shipments: 15, status: 'Active' },
  { id: '6', code: 'CUST-006', name: 'Horizon Manufacturing', type: 'B2B', city: 'Warangal', gst: '36ZABCD1234K6Z0', outstanding: '₹3,50,000', shipments: 56, status: 'Active' },
];

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
          <p className="text-sm text-gray-500">Manage B2B and B2C customer accounts</p>
        </div>
        <Link href="/crm/customers/new"
          className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-700 transition-colors">
          <Plus className="w-4 h-4" /> Add Customer
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
          <p className="text-2xl font-bold text-gray-900">156</p>
          <p className="text-xs text-gray-500">Total Customers</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
          <p className="text-2xl font-bold text-green-600">142</p>
          <p className="text-xs text-gray-500">Active</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
          <p className="text-2xl font-bold text-orange-600">₹8.15L</p>
          <p className="text-xs text-gray-500">Outstanding</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
          <p className="text-2xl font-bold text-blue-600">248</p>
          <p className="text-xs text-gray-500">Shipments (Month)</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4">
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input type="text" placeholder="Search by name, GST, city..."
              className="w-full h-10 pl-10 pr-4 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
          </div>
          <select className="h-10 px-3 rounded-xl border border-gray-200 text-sm">
            <option value="">All Types</option>
            <option value="B2B">B2B</option>
            <option value="B2C">B2C</option>
          </select>
          <button className="h-10 px-4 border border-gray-200 rounded-xl text-sm flex items-center gap-2 hover:bg-gray-50">
            <Download className="w-4 h-4" /> Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Customer</th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Type</th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">City</th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">GST</th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Outstanding</th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Shipments</th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {mockCustomers.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50/50 transition-colors cursor-pointer">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Building2 className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-900">{c.name}</p>
                        <p className="text-[10px] text-gray-400">{c.code}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3"><span className="text-[10px] font-medium px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full">{c.type}</span></td>
                  <td className="px-4 py-3 text-xs text-gray-600">{c.city}</td>
                  <td className="px-4 py-3 text-xs text-gray-500 font-mono">{c.gst}</td>
                  <td className="px-4 py-3 text-xs font-medium text-orange-600">{c.outstanding}</td>
                  <td className="px-4 py-3 text-xs text-gray-600">{c.shipments}</td>
                  <td className="px-4 py-3"><span className="text-[10px] font-medium px-2 py-0.5 bg-green-100 text-green-700 rounded-full">{c.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
