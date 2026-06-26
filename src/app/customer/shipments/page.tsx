'use client';

import React from 'react';
import { Package, Search, MapPin, Clock } from 'lucide-react';

const myShipments = [
  { id: 'SHL-260611-0001', origin: 'Hyderabad', destination: 'Chennai', weight: '8 Tons', status: 'In Transit', eta: '11 Jun, 4 PM', mode: 'FTL' },
  { id: 'SHL-260610-0004', origin: 'Vijayawada', destination: 'Hyderabad', weight: '5 Tons', status: 'Delivered', eta: 'Delivered 10 Jun', mode: 'PTL' },
  { id: 'SHL-260608-0012', origin: 'Hyderabad', destination: 'Mumbai', weight: '12 Tons', status: 'Delivered', eta: 'Delivered 09 Jun', mode: 'FTL' },
  { id: 'SHL-260605-0008', origin: 'Hyderabad', destination: 'Bangalore', weight: '3 Tons', status: 'Delivered', eta: 'Delivered 06 Jun', mode: 'PTL' },
];

const statusColors: Record<string, string> = { 'In Transit': 'bg-yellow-100 text-yellow-700', 'Delivered': 'bg-green-100 text-green-700', 'Booked': 'bg-blue-100 text-blue-700' };

export default function CustomerShipmentsPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-xl font-bold text-gray-900">My Shipments</h1><p className="text-sm text-gray-500">Track and view your shipment history</p></div>
      <div className="relative max-w-md"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /><input type="text" placeholder="Search by shipment ID..." className="w-full h-10 pl-10 pr-4 rounded-xl border text-sm" /></div>
      <div className="space-y-3">
        {myShipments.map((s) => (
          <div key={s.id} className="bg-white rounded-2xl border p-5 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center"><Package className="w-5 h-5 text-primary" /></div>
                <div><p className="text-sm font-bold text-primary">{s.id}</p><p className="text-xs text-gray-500 flex items-center gap-1"><MapPin className="w-3 h-3" />{s.origin} → {s.destination}</p></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right"><p className="text-xs text-gray-500">{s.mode} • {s.weight}</p><p className="text-xs text-gray-400 flex items-center gap-1 justify-end"><Clock className="w-3 h-3" />{s.eta}</p></div>
                <span className={`text-[10px] px-2.5 py-1 rounded-full font-medium ${statusColors[s.status]}`}>{s.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
