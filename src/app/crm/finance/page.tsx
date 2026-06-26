'use client';

import React from 'react';
import { IndianRupee, TrendingUp, TrendingDown, Wallet, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const stats = [
  { title: 'Total Income', value: '₹18.5L', change: '+12%', up: true, icon: TrendingUp, color: 'bg-green-50 text-green-600' },
  { title: 'Total Expenses', value: '₹12.8L', change: '+8%', up: true, icon: TrendingDown, color: 'bg-red-50 text-red-600' },
  { title: 'Net Profit', value: '₹5.7L', change: '+18%', up: true, icon: IndianRupee, color: 'bg-blue-50 text-blue-600' },
  { title: 'Cash Balance', value: '₹3.2L', change: '-5%', up: false, icon: Wallet, color: 'bg-purple-50 text-purple-600' },
];

const recentExpenses = [
  { category: 'Fuel', amount: '₹2,45,000', date: '10 Jun', desc: 'Monthly fuel for fleet' },
  { category: 'Salary', amount: '₹4,80,000', date: '01 Jun', desc: 'June payroll - 52 employees' },
  { category: 'Maintenance', amount: '₹85,000', date: '08 Jun', desc: 'Vehicle servicing and repairs' },
  { category: 'Tyres', amount: '₹1,20,000', date: '05 Jun', desc: 'Tyre replacement' },
  { category: 'Office', amount: '₹35,000', date: '03 Jun', desc: 'Rent, utilities, misc' },
  { category: 'Toll', amount: '₹1,10,000', date: '10 Jun', desc: 'Highway tolls' },
];

const monthlyPL = [
  { month: 'Jan', income: 15.2, expense: 11.5 },
  { month: 'Feb', income: 14.8, expense: 10.9 },
  { month: 'Mar', income: 16.5, expense: 12.1 },
  { month: 'Apr', income: 17.2, expense: 11.8 },
  { month: 'May', income: 18.0, expense: 12.5 },
  { month: 'Jun', income: 18.5, expense: 12.8 },
];

export default function FinancePage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold text-gray-900">Finance & Accounts</h1><p className="text-sm text-gray-500">Income, expenses, profit & loss overview</p></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => { const Icon = s.icon; return (
          <div key={s.title} className="bg-white rounded-xl border p-4">
            <div className="flex items-center justify-between mb-2">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${s.color}`}><Icon className="w-4 h-4" /></div>
              <span className={`text-[10px] font-medium flex items-center ${s.up ? 'text-green-600' : 'text-red-500'}`}>
                {s.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}{s.change}
              </span>
            </div>
            <p className="text-xl font-bold">{s.value}</p>
            <p className="text-[10px] text-gray-500">{s.title}</p>
          </div>
        ); })}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border p-5">
          <h2 className="text-sm font-semibold mb-4">Monthly P&L (₹ Lakhs)</h2>
          <div className="space-y-3">
            {monthlyPL.map((m) => (
              <div key={m.month} className="flex items-center gap-3">
                <span className="text-xs w-8 text-gray-500">{m.month}</span>
                <div className="flex-1 flex gap-1 h-5">
                  <div className="bg-green-500 rounded" style={{ width: `${(m.income / 20) * 100}%` }} />
                  <div className="bg-red-400 rounded" style={{ width: `${(m.expense / 20) * 100}%` }} />
                </div>
                <span className="text-xs font-medium w-12 text-right text-green-600">₹{(m.income - m.expense).toFixed(1)}L</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 mt-4 text-[10px]">
            <span className="flex items-center gap-1"><div className="w-3 h-3 bg-green-500 rounded" /> Income</span>
            <span className="flex items-center gap-1"><div className="w-3 h-3 bg-red-400 rounded" /> Expense</span>
          </div>
        </div>
        <div className="bg-white rounded-2xl border p-5">
          <h2 className="text-sm font-semibold mb-4">Recent Expenses</h2>
          <div className="space-y-3">
            {recentExpenses.map((e, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50">
                <div><p className="text-xs font-medium">{e.category}</p><p className="text-[10px] text-gray-400">{e.desc}</p></div>
                <div className="text-right"><p className="text-xs font-bold text-red-600">{e.amount}</p><p className="text-[10px] text-gray-400">{e.date}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
