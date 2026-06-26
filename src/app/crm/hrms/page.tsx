'use client';

import React from 'react';
import { Users, CheckCircle, Clock, Calendar, XCircle } from 'lucide-react';

const attendanceToday = [
  { name: 'Rahul Kumar', dept: 'Operations', checkIn: '09:02 AM', checkOut: '-', status: 'Present' },
  { name: 'Priya Sharma', dept: 'Sales', checkIn: '09:15 AM', checkOut: '-', status: 'Present' },
  { name: 'Anil Reddy', dept: 'Dispatch', checkIn: '08:45 AM', checkOut: '-', status: 'Present' },
  { name: 'Sunita Patel', dept: 'Accounts', checkIn: '-', checkOut: '-', status: 'On Leave' },
  { name: 'Vikram Singh', dept: 'HR', checkIn: '09:30 AM', checkOut: '-', status: 'Present' },
  { name: 'Meera K', dept: 'Support', checkIn: '09:10 AM', checkOut: '-', status: 'Present' },
  { name: 'Deepak M', dept: 'Warehouse', checkIn: '-', checkOut: '-', status: 'Absent' },
  { name: 'Lakshmi R', dept: 'Operations', checkIn: '10:05 AM', checkOut: '-', status: 'Late' },
];

const pendingLeaves = [
  { name: 'Anil Reddy', type: 'Casual Leave', from: '15 Jun', to: '16 Jun', days: 2, reason: 'Personal work' },
  { name: 'Meera K', type: 'Sick Leave', from: '18 Jun', to: '18 Jun', days: 1, reason: 'Medical appointment' },
  { name: 'Deepak M', type: 'Annual Leave', from: '20 Jun', to: '25 Jun', days: 5, reason: 'Family vacation' },
];

const statusColors: Record<string, string> = { 'Present': 'bg-green-100 text-green-700', 'On Leave': 'bg-orange-100 text-orange-700', 'Absent': 'bg-red-100 text-red-700', 'Late': 'bg-yellow-100 text-yellow-700' };

export default function HRMSPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold text-gray-900">HRMS</h1><p className="text-sm text-gray-500">Attendance, leave management, and payroll</p></div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white rounded-xl border p-4 flex items-center gap-3"><div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center"><Users className="w-4 h-4 text-blue-600" /></div><div><p className="text-lg font-bold">52</p><p className="text-[10px] text-gray-500">Total</p></div></div>
        <div className="bg-white rounded-xl border p-4 flex items-center gap-3"><div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center"><CheckCircle className="w-4 h-4 text-green-600" /></div><div><p className="text-lg font-bold">45</p><p className="text-[10px] text-gray-500">Present</p></div></div>
        <div className="bg-white rounded-xl border p-4 flex items-center gap-3"><div className="w-9 h-9 bg-orange-50 rounded-xl flex items-center justify-center"><Calendar className="w-4 h-4 text-orange-600" /></div><div><p className="text-lg font-bold">4</p><p className="text-[10px] text-gray-500">On Leave</p></div></div>
        <div className="bg-white rounded-xl border p-4 flex items-center gap-3"><div className="w-9 h-9 bg-red-50 rounded-xl flex items-center justify-center"><XCircle className="w-4 h-4 text-red-600" /></div><div><p className="text-lg font-bold">2</p><p className="text-[10px] text-gray-500">Absent</p></div></div>
        <div className="bg-white rounded-xl border p-4 flex items-center gap-3"><div className="w-9 h-9 bg-yellow-50 rounded-xl flex items-center justify-center"><Clock className="w-4 h-4 text-yellow-600" /></div><div><p className="text-lg font-bold">1</p><p className="text-[10px] text-gray-500">Late</p></div></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl border overflow-hidden">
          <div className="px-5 py-4 border-b"><h2 className="text-sm font-semibold">Today&apos;s Attendance</h2></div>
          <table className="w-full">
            <thead className="bg-gray-50"><tr><th className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase">Employee</th><th className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase">Dept</th><th className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase">Check In</th><th className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase">Check Out</th><th className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase">Status</th></tr></thead>
            <tbody className="divide-y divide-gray-50">{attendanceToday.map((a, i) => (<tr key={i} className="hover:bg-gray-50/50"><td className="px-4 py-3 text-xs font-medium">{a.name}</td><td className="px-4 py-3 text-xs text-gray-600">{a.dept}</td><td className="px-4 py-3 text-xs text-gray-600">{a.checkIn}</td><td className="px-4 py-3 text-xs text-gray-600">{a.checkOut}</td><td className="px-4 py-3"><span className={`text-[10px] px-2 py-0.5 rounded-full ${statusColors[a.status]}`}>{a.status}</span></td></tr>))}</tbody>
          </table>
        </div>
        <div className="bg-white rounded-2xl border">
          <div className="px-5 py-4 border-b flex items-center justify-between"><h2 className="text-sm font-semibold">Pending Leaves</h2><span className="text-[10px] bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">{pendingLeaves.length} pending</span></div>
          <div className="p-4 space-y-3">{pendingLeaves.map((l, i) => (<div key={i} className="p-3 rounded-xl border bg-gray-50"><div className="flex justify-between mb-1"><p className="text-xs font-medium">{l.name}</p><span className="text-[10px] text-gray-400">{l.days} day{l.days > 1 ? 's' : ''}</span></div><p className="text-[10px] text-gray-500">{l.type}: {l.from} → {l.to}</p><p className="text-[10px] text-gray-400 mt-1">{l.reason}</p><div className="flex gap-2 mt-2"><button className="text-[10px] px-2 py-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200">Approve</button><button className="text-[10px] px-2 py-1 bg-red-100 text-red-700 rounded-lg hover:bg-red-200">Reject</button></div></div>))}</div>
        </div>
      </div>
    </div>
  );
}
