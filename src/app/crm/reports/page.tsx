'use client';

import React from 'react';
import { BarChart3, Download, FileText, TrendingUp, Truck, Users, IndianRupee, Package } from 'lucide-react';

const reportCategories = [
  { title: 'Revenue Report', desc: 'Daily, weekly, monthly revenue breakdown', icon: IndianRupee, color: 'bg-green-50 text-green-600' },
  { title: 'Shipment Report', desc: 'Shipment volume, status, on-time delivery', icon: Package, color: 'bg-blue-50 text-blue-600' },
  { title: 'Vehicle Report', desc: 'Utilization, fuel, maintenance costs', icon: Truck, color: 'bg-purple-50 text-purple-600' },
  { title: 'Driver Report', desc: 'Trips, performance, expenses', icon: Users, color: 'bg-orange-50 text-orange-600' },
  { title: 'Customer Report', desc: 'Revenue per customer, shipment frequency', icon: TrendingUp, color: 'bg-cyan-50 text-cyan-600' },
  { title: 'Employee Report', desc: 'Attendance, tasks, performance scores', icon: Users, color: 'bg-pink-50 text-pink-600' },
  { title: 'Profitability Report', desc: 'P&L by route, customer, vehicle', icon: BarChart3, color: 'bg-yellow-50 text-yellow-600' },
  { title: 'GST Report', desc: 'GSTR-1, GSTR-3B ready data export', icon: FileText, color: 'bg-red-50 text-red-600' },
];

const quickStats = [
  { label: 'Revenue This Month', value: '₹18.5L', change: '+12%' },
  { label: 'Shipments This Month', value: '248', change: '+8%' },
  { label: 'Avg Delivery Time', value: '2.3 days', change: '-5%' },
  { label: 'On-Time Rate', value: '96%', change: '+2%' },
];

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div><h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1><p className="text-sm text-gray-500">Generate and export business reports</p></div>
        <div className="flex gap-2">
          <select className="h-9 px-3 rounded-xl border text-xs"><option>This Month</option><option>Last Month</option><option>This Quarter</option><option>This Year</option></select>
          <button className="h-9 px-4 bg-primary text-white text-xs font-medium rounded-xl flex items-center gap-1"><Download className="w-3 h-3" /> Export All</button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickStats.map((s) => (<div key={s.label} className="bg-white rounded-xl border p-4"><p className="text-lg font-bold text-gray-900">{s.value}</p><p className="text-[10px] text-gray-500">{s.label}</p><span className="text-[10px] text-green-600 font-medium">{s.change}</span></div>))}
      </div>
      <div>
        <h2 className="text-sm font-semibold text-gray-900 mb-4">Available Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reportCategories.map((r) => { const Icon = r.icon; return (
            <div key={r.title} className="bg-white rounded-2xl border p-5 hover:shadow-md transition-shadow cursor-pointer group">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${r.color}`}><Icon className="w-5 h-5" /></div>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">{r.title}</h3>
              <p className="text-[10px] text-gray-500 mt-1">{r.desc}</p>
              <div className="flex gap-2 mt-3">
                <button className="text-[10px] px-2 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200">View</button>
                <button className="text-[10px] px-2 py-1 bg-primary/10 text-primary rounded-lg hover:bg-primary/20">Export CSV</button>
              </div>
            </div>
          ); })}
        </div>
      </div>
    </div>
  );
}
