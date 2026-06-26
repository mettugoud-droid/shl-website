'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Search, Filter, Download, Package } from 'lucide-react';

const mockShipments = [
  { id: 'SHL-260611-0001', customer: 'Vishwa FMCG Pvt Ltd', origin: 'Hyderabad', destination: 'Chennai', weight: '8 Tons', vehicle: 'TS09AB1234', driver: 'Raju K', mode: 'FTL', status: 'In Transit', date: '11 Jun 2026' },
  { id: 'SHL-260611-0002', customer: 'MedLife Pharmaceuticals', origin: 'Secunderabad', destination: 'Bangalore', weight: '3.5 Tons', vehicle: 'TS10CD5678', driver: 'Suresh M', mode: 'FTL', status: 'Picked Up', date: '11 Jun 2026' },
  { id: 'SHL-260611-0003', customer: 'TechBazaar E-Commerce', origin: 'Hyderabad', destination: 'Mumbai', weight: '1.2 Tons', vehicle: 'AP29EF9012', driver: 'Venkat R', mode: 'PTL', status: 'Booked', date: '11 Jun 2026' },
  { id: 'SHL-260610-0004', customer: 'FreshMart Retail', origin: 'Vijayawada', destination: 'Hyderabad', weight: '5 Tons', vehicle: 'TS08GH3456', driver: 'Prasad L', mode: 'PTL', status: 'Delivered', date: '10 Jun 2026' },
  { id: 'SHL-260610-0005', customer: 'Gujarat Auto Parts', origin: 'Hyderabad', destination: 'Pune', weight: '12 Tons', vehicle: 'TS07IJ7890', driver: 'Mahesh B', mode: 'FTL', status: 'In Transit', date: '10 Jun 2026' },
  { id: 'SHL-260609-0006', customer: 'Horizon Manufacturing', origin: 'Warangal', destination: 'Hyderabad', weight: '2.8 Tons', vehicle: 'AP31KL2345', driver: 'Srinivas D', mode: 'PTL', status: 'Delivered', date: '09 Jun 2026' },
];

const statusColors: Record<string, string> = {
  'Booked': 'bg-blue-100 text-blue-700',
  'Picked Up': 'bg-indigo-100 text-indigo-700',
  'In Transit': 'bg-yellow-100 text-yellow-700',
  'Delivered': 'bg-green-100 text-green-700',
  'Cancelled': 'bg-red-100 text-red-700',
};

export default function ShipmentsPage() {
  const [search, setSearch] = useState('');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Shipments</h1>
          <p className="text-sm text-gray-500">Manage all B2B, B2C, FTL, and PTL shipments</p>
        </div>
        <Link href="/crm/shipments/new"
          className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-700 transition-colors">
          <Plus className="w-4 h-4" /> Create Shipment
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input type="text" placeholder="Search by shipment ID, customer, vehicle..."
              value={search} onChange={(e) => setSearch(e.target.value)}
              className="w-full h-10 pl-10 pr-4 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
          </div>
          <select className="h-10 px-3 rounded-xl border border-gray-200 text-sm">
            <option value="">All Modes</option>
            <option value="FTL">FTL</option>
            <option value="PTL">PTL</option>
            <option value="EXPRESS">Express</option>
          </select>
          <select className="h-10 px-3 rounded-xl border border-gray-200 text-sm">
            <option value="">All Status</option>
            <option value="BOOKED">Booked</option>
            <option value="IN_TRANSIT">In Transit</option>
            <option value="DELIVERED">Delivered</option>
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
                <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Shipment ID</th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Customer</th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Route</th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Weight</th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Vehicle</th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Mode</th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {mockShipments.map((s) => (
                <tr key={s.id} className="hover:bg-gray-50/50 transition-colors cursor-pointer">
                  <td className="px-4 py-3 text-xs font-medium text-primary">{s.id}</td>
                  <td className="px-4 py-3 text-xs text-gray-700">{s.customer}</td>
                  <td className="px-4 py-3 text-xs text-gray-500">{s.origin} → {s.destination}</td>
                  <td className="px-4 py-3 text-xs text-gray-600">{s.weight}</td>
                  <td className="px-4 py-3 text-xs text-gray-600">{s.vehicle}</td>
                  <td className="px-4 py-3"><span className="text-[10px] font-medium px-2 py-0.5 bg-gray-100 rounded-full">{s.mode}</span></td>
                  <td className="px-4 py-3"><span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${statusColors[s.status]}`}>{s.status}</span></td>
                  <td className="px-4 py-3 text-xs text-gray-400">{s.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
