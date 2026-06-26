'use client';

import React from 'react';
import Link from 'next/link';
import { Plus, Search, UserCircle, Star, Phone, MapPin } from 'lucide-react';

const mockDrivers = [
  { id: '1', code: 'DRV-001', name: 'Raju K', phone: '9876543210', licence: 'TS0920210012345', status: 'On Duty', vehicle: 'TS09AB1234', rating: 4.8, trips: 142 },
  { id: '2', code: 'DRV-002', name: 'Suresh M', phone: '9876543211', licence: 'TS1020200054321', status: 'Available', vehicle: '-', rating: 4.5, trips: 98 },
  { id: '3', code: 'DRV-003', name: 'Venkat R', phone: '9876543212', licence: 'AP2920190067890', status: 'On Duty', vehicle: 'AP29EF9012', rating: 4.9, trips: 210 },
  { id: '4', code: 'DRV-004', name: 'Prasad L', phone: '9876543213', licence: 'TS0820180045678', status: 'On Leave', vehicle: '-', rating: 4.3, trips: 76 },
  { id: '5', code: 'DRV-005', name: 'Mahesh B', phone: '9876543214', licence: 'TS0720210098765', status: 'On Duty', vehicle: 'TS07IJ7890', rating: 4.7, trips: 165 },
  { id: '6', code: 'DRV-006', name: 'Srinivas D', phone: '9876543215', licence: 'AP3120200011111', status: 'Available', vehicle: '-', rating: 4.6, trips: 120 },
];

const statusColors: Record<string, string> = { 'Available': 'bg-green-100 text-green-700', 'On Duty': 'bg-blue-100 text-blue-700', 'On Leave': 'bg-orange-100 text-orange-700' };

export default function DriversPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div><h1 className="text-2xl font-bold text-gray-900">Driver Management</h1><p className="text-sm text-gray-500">Manage drivers, trips, and performance</p></div>
        <Link href="/crm/drivers/new" className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-700 transition-colors"><Plus className="w-4 h-4" /> Add Driver</Link>
      </div>
      <div className="bg-white rounded-2xl border border-gray-200 p-4">
        <div className="flex gap-3">
          <div className="flex-1 relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /><input type="text" placeholder="Search drivers..." className="w-full h-10 pl-10 pr-4 rounded-xl border border-gray-200 text-sm" /></div>
          <select className="h-10 px-3 rounded-xl border border-gray-200 text-sm"><option value="">All Status</option><option>Available</option><option>On Duty</option><option>On Leave</option></select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockDrivers.map((d) => (
          <div key={d.id} className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center"><UserCircle className="w-5 h-5 text-primary" /></div>
                <div><p className="text-sm font-bold text-gray-900">{d.name}</p><p className="text-[10px] text-gray-400">{d.code}</p></div>
              </div>
              <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${statusColors[d.status]}`}>{d.status}</span>
            </div>
            <div className="space-y-2 text-xs text-gray-600">
              <div className="flex justify-between"><span className="flex items-center gap-1"><Phone className="w-3 h-3" /> Phone</span><span className="font-medium">{d.phone}</span></div>
              <div className="flex justify-between"><span>Vehicle</span><span className="font-medium text-blue-600">{d.vehicle}</span></div>
              <div className="flex justify-between"><span>Total Trips</span><span className="font-medium">{d.trips}</span></div>
              <div className="flex justify-between"><span className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-500" /> Rating</span><span className="font-medium">{d.rating}/5</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
