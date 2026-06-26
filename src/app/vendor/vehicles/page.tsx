'use client';

import React from 'react';
import { Truck, MapPin } from 'lucide-react';

const myVehicles = [
  { vehicleNo: 'TS09AB1234', type: 'Heavy Truck', capacity: '15 Tons', status: 'On Trip', location: 'HYD-CHN Highway', driver: 'Raju K' },
  { vehicleNo: 'TS10CD5678', type: 'LCV', capacity: '5 Tons', status: 'Available', location: 'Hyderabad Hub', driver: '-' },
  { vehicleNo: 'TS08GH3456', type: 'Container', capacity: '20ft', status: 'Maintenance', location: 'Service Center', driver: '-' },
  { vehicleNo: 'AP29EF9012', type: 'Multi-Axle', capacity: '30 Tons', status: 'On Trip', location: 'Pune Highway', driver: 'Venkat R' },
];

const statusColors: Record<string, string> = { 'Available': 'bg-green-100 text-green-700', 'On Trip': 'bg-blue-100 text-blue-700', 'Maintenance': 'bg-orange-100 text-orange-700' };

export default function VendorVehiclesPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-xl font-bold text-gray-900">My Vehicles</h1><p className="text-sm text-gray-500">View fleet status and assignments</p></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border p-4 text-center"><p className="text-2xl font-bold">4</p><p className="text-xs text-gray-500">Total</p></div>
        <div className="bg-white rounded-xl border p-4 text-center"><p className="text-2xl font-bold text-blue-600">2</p><p className="text-xs text-gray-500">On Trip</p></div>
        <div className="bg-white rounded-xl border p-4 text-center"><p className="text-2xl font-bold text-green-600">1</p><p className="text-xs text-gray-500">Available</p></div>
        <div className="bg-white rounded-xl border p-4 text-center"><p className="text-2xl font-bold text-orange-600">1</p><p className="text-xs text-gray-500">Maintenance</p></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {myVehicles.map((v) => (
          <div key={v.vehicleNo} className="bg-white rounded-2xl border p-5">
            <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-2"><Truck className="w-5 h-5 text-primary" /><p className="text-sm font-bold">{v.vehicleNo}</p></div><span className={`text-[10px] px-2 py-0.5 rounded-full ${statusColors[v.status]}`}>{v.status}</span></div>
            <div className="space-y-1.5 text-xs text-gray-600">
              <div className="flex justify-between"><span>{v.type}</span><span>{v.capacity}</span></div>
              <div className="flex justify-between"><span>Driver</span><span className="font-medium">{v.driver}</span></div>
              <div className="flex items-center gap-1 text-blue-600"><MapPin className="w-3 h-3" />{v.location}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
