'use client';

import React from 'react';
import Link from 'next/link';
import { Plus, Search, Users, CheckCircle, Clock, BarChart3 } from 'lucide-react';

const mockEmployees = [
  { id: '1', code: 'EMP-001', name: 'Rahul Kumar', department: 'Operations', designation: 'Operations Manager', phone: '9800000001', status: 'Present', tasks: { total: 8, done: 6 }, performance: 92 },
  { id: '2', code: 'EMP-002', name: 'Priya Sharma', department: 'Sales', designation: 'Sales Executive', phone: '9800000002', status: 'Present', tasks: { total: 5, done: 3 }, performance: 88 },
  { id: '3', code: 'EMP-003', name: 'Anil Reddy', department: 'Dispatch', designation: 'Dispatch Executive', phone: '9800000003', status: 'Present', tasks: { total: 12, done: 10 }, performance: 95 },
  { id: '4', code: 'EMP-004', name: 'Sunita Patel', department: 'Accounts', designation: 'Accountant', phone: '9800000004', status: 'On Leave', tasks: { total: 4, done: 4 }, performance: 90 },
  { id: '5', code: 'EMP-005', name: 'Vikram Singh', department: 'HR', designation: 'HR Manager', phone: '9800000005', status: 'Present', tasks: { total: 6, done: 4 }, performance: 85 },
  { id: '6', code: 'EMP-006', name: 'Meera K', department: 'Customer Support', designation: 'Support Executive', phone: '9800000006', status: 'Present', tasks: { total: 10, done: 7 }, performance: 87 },
];

export default function EmployeesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div><h1 className="text-2xl font-bold text-gray-900">Employees</h1><p className="text-sm text-gray-500">Manage team, tasks, attendance, and performance</p></div>
        <Link href="/crm/employees/new" className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-700 transition-colors"><Plus className="w-4 h-4" /> Add Employee</Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border p-4 flex items-center gap-3"><div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center"><Users className="w-5 h-5 text-blue-600" /></div><div><p className="text-lg font-bold">52</p><p className="text-[10px] text-gray-500">Total</p></div></div>
        <div className="bg-white rounded-xl border p-4 flex items-center gap-3"><div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center"><CheckCircle className="w-5 h-5 text-green-600" /></div><div><p className="text-lg font-bold">47</p><p className="text-[10px] text-gray-500">Present Today</p></div></div>
        <div className="bg-white rounded-xl border p-4 flex items-center gap-3"><div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center"><Clock className="w-5 h-5 text-orange-600" /></div><div><p className="text-lg font-bold">5</p><p className="text-[10px] text-gray-500">On Leave</p></div></div>
        <div className="bg-white rounded-xl border p-4 flex items-center gap-3"><div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center"><BarChart3 className="w-5 h-5 text-purple-600" /></div><div><p className="text-lg font-bold">89%</p><p className="text-[10px] text-gray-500">Avg Performance</p></div></div>
      </div>
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Employee</th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Department</th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Designation</th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Tasks</th>
                <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase">Performance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {mockEmployees.map((e) => (
                <tr key={e.id} className="hover:bg-gray-50/50 cursor-pointer">
                  <td className="px-4 py-3"><div><p className="text-xs font-medium text-gray-900">{e.name}</p><p className="text-[10px] text-gray-400">{e.code}</p></div></td>
                  <td className="px-4 py-3 text-xs text-gray-600">{e.department}</td>
                  <td className="px-4 py-3 text-xs text-gray-600">{e.designation}</td>
                  <td className="px-4 py-3"><span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${e.status === 'Present' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>{e.status}</span></td>
                  <td className="px-4 py-3 text-xs"><span className="text-green-600 font-medium">{e.tasks.done}</span>/<span className="text-gray-500">{e.tasks.total}</span></td>
                  <td className="px-4 py-3"><div className="flex items-center gap-2"><div className="w-12 h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-primary rounded-full" style={{ width: `${e.performance}%` }} /></div><span className="text-xs font-medium">{e.performance}%</span></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
