'use client';

import React from 'react';
import Link from 'next/link';
import { Plus, Search, Truck, Fuel, Wrench, MapPin } from 'lucide-react';

const mockVehicles = [
  { id: '1', vehicleNo: 'TS09AB1234', type: 'Heavy Truck', capacity: '15 Tons', make: 'Tata', status: 'On Trip', driver: 'Raju K', location: 'Hyderabad-Chennai NH', fuel: '75%' },
  { id: '2', vehicleNo: 'TS10CD5678', type: 'LCV', capacity: '5 Tons', make: 'Eicher', status: 'Available', driver: '-', location: 'Hyderabad Hub', fuel: '90%' },
  { id: '3', vehicleNo: 'AP29EF9012', type: 'Multi-Axle', capacity: '30 Tons', make: 'Ashok Leyland', status: 'On Trip', driver: 'Venkat R', location: 'Pune Highway', fuel: '45%' },
  { id: '4', vehicleNo: 'TS08GH3456', type: 'Container', capacity: '20ft', make: 'Tata', status: 'Maintenance', driver: '-', location: 'Service Center', fuel: '60%' },
  { id: '5', vehicleNo: 'TS07IJ7890', type: 'Mini Truck', capacity: '2 Tons', make: 'Tata Ace', status: 'Available', driver: '-', location: 'Secunderabad Hub', fuel: '85%' },
  { id: '6', vehicleNo: 'AP31KL2345', type: 'ICV', capacity: '10 Tons', make: 'Eicher', status: 'On Trip', driver: 'Srinivas D', location: 'Warangal', fuel: '55%' },
];

const statusColors: Record<string, string> = { 'Available': 'bg-green-100 text-green-700', 'On Trip': 'bg-blue-100 text-blue-700', 'Maintenance': 'bg-orange-100 text-orange-700' };

export default function FleetPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div><h1 className="text-2xl font-bold text-gray-900">Fleet Management</h1><p className="text-sm text-gray-500">Manage vehicles, maintenance, and tracking</p></div>
        <Link href="/crm/fleet/new" className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-700 transition-colors"><Plus className="w-4 h-4" /> Add Vehicle</Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-3"><div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center"><Truck className="w-5 h-5 text-blue-600" /></div><div><p className="text-lg font-bold">45</p><p className="text-[10px] text-gray-500">Total</p></div></div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-3"><div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center"><MapPin className="w-5 h-5 text-green-600" /></div><div><p className="text-lg font-bold">28</p><p className="text-[10px] text-gray-500">On Trip</p></div></div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-3"><div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center"><Fuel className="w-5 h-5 text-purple-600" /></div><div><p className="text-lg font-bold">12</p><p className="text-[10px] text-gray-500">Available</p></div></div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-3"><div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center"><Wrench className="w-5 h-5 text-orange-600" /></div><div><p className="text-lg font-bold">5</p><p className="text-[10px] text-gray-500">Maintenance</p></div></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockVehicles.map((v) => (
          <div key={v.id} className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2"><div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center"><Truck className="w-4 h-4 text-primary" /></div><div><p className="text-sm font-bold">{v.vehicleNo}</p><p className="text-[10px] text-gray-400">{v.make} • {v.type}</p></div></div>
              <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${statusColors[v.status]}`}>{v.status}</span>
            </div>
            <div className="space-y-2 text-xs text-gray-600">
              <div className="flex justify-between"><span>Capacity</span><span className="font-medium">{v.capacity}</span></div>
              <div className="flex justify-between"><span>Driver</span><span className="font-medium">{v.driver}</span></div>
              <div className="flex justify-between"><span>Location</span><span className="font-medium text-blue-600">{v.location}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
