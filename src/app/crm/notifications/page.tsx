'use client';

import React, { useState } from 'react';
import { Package, Truck, IndianRupee, Users, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const notifications = [
  { id: '1', title: 'Shipment Delivered', message: 'SHL-260610-0004 delivered to FreshMart Retail', type: 'success', icon: CheckCircle, time: '5 min ago', read: false },
  { id: '2', title: 'Payment Received', message: '₹85,000 from Vishwa FMCG (INV-2026-0145)', type: 'info', icon: IndianRupee, time: '15 min ago', read: false },
  { id: '3', title: 'Maintenance Due', message: 'TS08GH3456 - Insurance renewal on 15 Jun', type: 'warning', icon: AlertTriangle, time: '1 hr ago', read: false },
  { id: '4', title: 'New Lead Assigned', message: 'Deccan Foods assigned to Priya S', type: 'info', icon: Users, time: '2 hrs ago', read: true },
  { id: '5', title: 'Shipment Delayed', message: 'SHL-260610-0005 delayed on Mumbai highway', type: 'error', icon: AlertTriangle, time: '3 hrs ago', read: true },
  { id: '6', title: 'Driver Check-in', message: 'Raju K started Hyderabad-Chennai trip', type: 'info', icon: Truck, time: '4 hrs ago', read: true },
  { id: '7', title: 'New Booking', message: 'SHL-260611-0003 by TechBazaar (PTL)', type: 'info', icon: Package, time: '5 hrs ago', read: true },
  { id: '8', title: 'Leave Approved', message: 'Sunita Patel casual leave approved', type: 'success', icon: CheckCircle, time: '6 hrs ago', read: true },
  { id: '9', title: 'Invoice Overdue', message: 'INV-2026-0141 overdue by 3 days', type: 'error', icon: Clock, time: '8 hrs ago', read: true },
];

const typeColors: Record<string, string> = { success: 'bg-green-50 text-green-600', info: 'bg-blue-50 text-blue-600', warning: 'bg-orange-50 text-orange-600', error: 'bg-red-50 text-red-600' };

export default function NotificationsPage() {
  const [filter, setFilter] = useState('all');
  const unread = notifications.filter(n => !n.read).length;
  const filtered = filter === 'all' ? notifications : filter === 'unread' ? notifications.filter(n => !n.read) : notifications.filter(n => n.read);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3"><h1 className="text-2xl font-bold text-gray-900">Notifications</h1>{unread > 0 && <span className="px-2 py-0.5 bg-red-100 text-red-700 text-[10px] font-medium rounded-full">{unread} unread</span>}</div>
        <button className="text-xs text-primary hover:underline">Mark all as read</button>
      </div>
      <div className="flex gap-2">
        {['all', 'unread', 'read'].map((f) => (<button key={f} onClick={() => setFilter(f)} className={`px-3 py-1.5 text-xs font-medium rounded-lg ${filter === f ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{f.charAt(0).toUpperCase() + f.slice(1)}</button>))}
      </div>
      <div className="space-y-2">
        {filtered.map((n) => { const Icon = n.icon; return (
          <div key={n.id} className={`flex items-start gap-4 p-4 rounded-2xl border cursor-pointer ${n.read ? 'bg-white border-gray-100' : 'bg-blue-50/30 border-blue-100'}`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${typeColors[n.type]}`}><Icon className="w-5 h-5" /></div>
            <div className="flex-1"><div className="flex justify-between"><p className={`text-sm ${n.read ? 'text-gray-700' : 'font-semibold text-gray-900'}`}>{n.title}</p><span className="text-[10px] text-gray-400">{n.time}</span></div><p className="text-xs text-gray-500 mt-0.5">{n.message}</p></div>
            {!n.read && <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />}
          </div>
        ); })}
      </div>
    </div>
  );
}
