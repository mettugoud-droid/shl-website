'use client';

import React from 'react';
import { Warehouse, Package, ArrowDownToLine, ArrowUpFromLine, MapPin } from 'lucide-react';

const warehouses = [
  { name: 'Hyderabad Hub', location: 'Shamshabad', capacity: '20,000 sq.ft', utilization: 72, items: 1240, status: 'Active' },
  { name: 'Secunderabad Center', location: 'Bowenpally', capacity: '8,000 sq.ft', utilization: 85, items: 680, status: 'Active' },
  { name: 'Vijayawada Hub', location: 'Auto Nagar', capacity: '12,000 sq.ft', utilization: 55, items: 420, status: 'Active' },
];

const recentActivity = [
  { type: 'Inbound', from: 'Vishwa FMCG', items: 45, date: '10 Jun, 2:30 PM', warehouse: 'Hyderabad Hub' },
  { type: 'Outbound', to: 'Chennai Route', items: 32, date: '10 Jun, 4:15 PM', warehouse: 'Hyderabad Hub' },
  { type: 'Inbound', from: 'MedLife Pharma', items: 18, date: '10 Jun, 11:00 AM', warehouse: 'Secunderabad' },
  { type: 'Outbound', to: 'Mumbai Route', items: 56, date: '10 Jun, 9:45 AM', warehouse: 'Hyderabad Hub' },
  { type: 'Inbound', from: 'Gujarat Auto', items: 12, date: '09 Jun, 5:00 PM', warehouse: 'Vijayawada' },
];

export default function WarehousePage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold text-gray-900">Warehouse Management</h1><p className="text-sm text-gray-500">Inventory, inbound/outbound, and stock management</p></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border p-4 flex items-center gap-3"><div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center"><Warehouse className="w-5 h-5 text-blue-600" /></div><div><p className="text-lg font-bold">3</p><p className="text-[10px] text-gray-500">Warehouses</p></div></div>
        <div className="bg-white rounded-xl border p-4 flex items-center gap-3"><div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center"><Package className="w-5 h-5 text-green-600" /></div><div><p className="text-lg font-bold">2,340</p><p className="text-[10px] text-gray-500">Total Items</p></div></div>
        <div className="bg-white rounded-xl border p-4 flex items-center gap-3"><div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center"><ArrowDownToLine className="w-5 h-5 text-purple-600" /></div><div><p className="text-lg font-bold">75</p><p className="text-[10px] text-gray-500">Inbound Today</p></div></div>
        <div className="bg-white rounded-xl border p-4 flex items-center gap-3"><div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center"><ArrowUpFromLine className="w-5 h-5 text-orange-600" /></div><div><p className="text-lg font-bold">88</p><p className="text-[10px] text-gray-500">Outbound Today</p></div></div>
      </div>
      <div>
        <h2 className="text-sm font-semibold text-gray-900 mb-4">Warehouse Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {warehouses.map((w) => (
            <div key={w.name} className="bg-white rounded-2xl border p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3"><MapPin className="w-4 h-4 text-primary" /><h3 className="text-sm font-semibold">{w.name}</h3></div>
              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex justify-between"><span>Location</span><span className="font-medium">{w.location}</span></div>
                <div className="flex justify-between"><span>Capacity</span><span className="font-medium">{w.capacity}</span></div>
                <div className="flex justify-between"><span>Items</span><span className="font-medium">{w.items}</span></div>
                <div><div className="flex justify-between mb-1"><span>Utilization</span><span className="font-medium">{w.utilization}%</span></div><div className="w-full h-2 bg-gray-100 rounded-full"><div className={`h-full rounded-full ${w.utilization > 80 ? 'bg-orange-500' : 'bg-green-500'}`} style={{ width: `${w.utilization}%` }} /></div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-2xl border overflow-hidden">
        <div className="px-5 py-4 border-b"><h2 className="text-sm font-semibold">Recent Activity</h2></div>
        <table className="w-full"><thead className="bg-gray-50"><tr><th className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase">Type</th><th className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase">From/To</th><th className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase">Items</th><th className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase">Warehouse</th><th className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase">Date</th></tr></thead>
        <tbody className="divide-y divide-gray-50">{recentActivity.map((a, i) => (<tr key={i} className="hover:bg-gray-50/50"><td className="px-4 py-3"><span className={`text-[10px] px-2 py-0.5 rounded-full ${a.type === 'Inbound' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>{a.type}</span></td><td className="px-4 py-3 text-xs">{a.from || a.to}</td><td className="px-4 py-3 text-xs font-medium">{a.items}</td><td className="px-4 py-3 text-xs text-gray-600">{a.warehouse}</td><td className="px-4 py-3 text-xs text-gray-400">{a.date}</td></tr>))}</tbody></table>
      </div>
    </div>
  );
}
