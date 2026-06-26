'use client';

import React from 'react';
import Link from 'next/link';
import { Plus, Route, MapPin, Fuel, Truck } from 'lucide-react';

const activeRoutes = [
  { id: '1', origin: 'Hyderabad', destination: 'Chennai', distance: '625 km', duration: '10-12 hrs', fuelEst: '150L', vehicles: 4 },
  { id: '2', origin: 'Hyderabad', destination: 'Bangalore', distance: '570 km', duration: '9-11 hrs', fuelEst: '135L', vehicles: 3 },
  { id: '3', origin: 'Hyderabad', destination: 'Mumbai', distance: '710 km', duration: '12-14 hrs', fuelEst: '170L', vehicles: 5 },
  { id: '4', origin: 'Hyderabad', destination: 'Delhi', distance: '1500 km', duration: '28-32 hrs', fuelEst: '350L', vehicles: 2 },
  { id: '5', origin: 'Hyderabad', destination: 'Vijayawada', distance: '275 km', duration: '5-6 hrs', fuelEst: '65L', vehicles: 6 },
  { id: '6', origin: 'Hyderabad', destination: 'Visakhapatnam', distance: '620 km', duration: '10-12 hrs', fuelEst: '145L', vehicles: 2 },
  { id: '7', origin: 'Hyderabad', destination: 'Pune', distance: '560 km', duration: '9-11 hrs', fuelEst: '130L', vehicles: 3 },
];

const todayTrips = [
  { vehicle: 'TS09AB1234', driver: 'Raju K', route: 'HYD-CHN', departed: '6:00 AM', eta: '4:00 PM', status: 'In Transit' },
  { vehicle: 'AP29EF9012', driver: 'Venkat R', route: 'HYD-MUM', departed: '5:30 AM', eta: '7:00 PM', status: 'In Transit' },
  { vehicle: 'TS10CD5678', driver: 'Suresh M', route: 'HYD-BLR', departed: '7:00 AM', eta: '5:00 PM', status: 'In Transit' },
  { vehicle: 'AP31KL2345', driver: 'Srinivas D', route: 'HYD-VJA', departed: '8:00 AM', eta: '1:00 PM', status: 'Reached' },
];

const tripStatusColors: Record<string, string> = { 'In Transit': 'bg-yellow-100 text-yellow-700', 'Reached': 'bg-green-100 text-green-700' };

export default function RoutesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div><h1 className="text-2xl font-bold text-gray-900">Route Planning</h1><p className="text-sm text-gray-500">Manage routes, trips, and fuel estimation</p></div>
        <Link href="/crm/routes/new" className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-700"><Plus className="w-4 h-4" /> Plan Trip</Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border p-4 flex items-center gap-3"><div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center"><Route className="w-5 h-5 text-blue-600" /></div><div><p className="text-lg font-bold">7</p><p className="text-[10px] text-gray-500">Active Routes</p></div></div>
        <div className="bg-white rounded-xl border p-4 flex items-center gap-3"><div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center"><Truck className="w-5 h-5 text-green-600" /></div><div><p className="text-lg font-bold">4</p><p className="text-[10px] text-gray-500">Trips Today</p></div></div>
        <div className="bg-white rounded-xl border p-4 flex items-center gap-3"><div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center"><MapPin className="w-5 h-5 text-purple-600" /></div><div><p className="text-lg font-bold">6,370</p><p className="text-[10px] text-gray-500">Total Km Today</p></div></div>
        <div className="bg-white rounded-xl border p-4 flex items-center gap-3"><div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center"><Fuel className="w-5 h-5 text-orange-600" /></div><div><p className="text-lg font-bold">1,505L</p><p className="text-[10px] text-gray-500">Est. Fuel Today</p></div></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border overflow-hidden">
          <div className="px-5 py-4 border-b"><h2 className="text-sm font-semibold">Today&apos;s Trips</h2></div>
          <table className="w-full"><thead className="bg-gray-50"><tr><th className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase">Vehicle</th><th className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase">Route</th><th className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase">ETA</th><th className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase">Status</th></tr></thead>
          <tbody className="divide-y divide-gray-50">{todayTrips.map((t, i) => (<tr key={i}><td className="px-4 py-3"><p className="text-xs font-medium">{t.vehicle}</p><p className="text-[10px] text-gray-400">{t.driver}</p></td><td className="px-4 py-3 text-xs">{t.route}</td><td className="px-4 py-3 text-xs text-gray-600">{t.eta}</td><td className="px-4 py-3"><span className={`text-[10px] px-2 py-0.5 rounded-full ${tripStatusColors[t.status]}`}>{t.status}</span></td></tr>))}</tbody></table>
        </div>
        <div className="bg-white rounded-2xl border p-5">
          <h2 className="text-sm font-semibold mb-4">Route Network</h2>
          <div className="space-y-2">
            {activeRoutes.map((r) => (
              <div key={r.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center"><Route className="w-4 h-4 text-primary" /></div>
                  <div><p className="text-xs font-medium">{r.origin} → {r.destination}</p><p className="text-[10px] text-gray-400">{r.distance} • {r.duration}</p></div>
                </div>
                <div className="text-right"><p className="text-xs font-medium">{r.vehicles} vehicles</p><p className="text-[10px] text-gray-400">{r.fuelEst} fuel</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
