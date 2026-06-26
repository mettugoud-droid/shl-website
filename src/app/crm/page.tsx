'use client';

import React from 'react';
import {
  Package, Truck, Users, IndianRupee, Clock, AlertTriangle,
  TrendingUp, CheckCircle, ArrowUpRight, ArrowDownRight,
} from 'lucide-react';

const stats = [
  { title: "Today's Shipments", value: '24', change: '+12%', up: true, icon: Package, color: 'bg-blue-50 text-blue-600' },
  { title: 'Revenue (This Month)', value: '₹12.5L', change: '+8%', up: true, icon: IndianRupee, color: 'bg-green-50 text-green-600' },
  { title: 'Active Vehicles', value: '38/45', change: '84%', up: true, icon: Truck, color: 'bg-purple-50 text-purple-600' },
  { title: 'Pending Deliveries', value: '12', change: '-5%', up: false, icon: Clock, color: 'bg-orange-50 text-orange-600' },
  { title: 'New Customers', value: '8', change: '+25%', up: true, icon: Users, color: 'bg-cyan-50 text-cyan-600' },
  { title: 'Delayed Shipments', value: '3', change: '-2', up: false, icon: AlertTriangle, color: 'bg-red-50 text-red-600' },
];

const recentShipments = [
  { id: 'SHL-260610-0001', customer: 'Vishwa FMCG Pvt Ltd', origin: 'Hyderabad', destination: 'Chennai', status: 'In Transit', mode: 'FTL' },
  { id: 'SHL-260610-0002', customer: 'MedLife Pharmaceuticals', origin: 'Secunderabad', destination: 'Bangalore', status: 'Picked Up', mode: 'FTL' },
  { id: 'SHL-260610-0003', customer: 'TechBazaar E-Commerce', origin: 'Hyderabad', destination: 'Mumbai', status: 'Booked', mode: 'PTL' },
  { id: 'SHL-260610-0004', customer: 'FreshMart Retail', origin: 'Vijayawada', destination: 'Hyderabad', status: 'Delivered', mode: 'PTL' },
  { id: 'SHL-260610-0005', customer: 'Gujarat Auto Parts', origin: 'Hyderabad', destination: 'Pune', status: 'In Transit', mode: 'FTL' },
];

const statusColors: Record<string, string> = {
  'Booked': 'bg-blue-100 text-blue-700',
  'Picked Up': 'bg-indigo-100 text-indigo-700',
  'In Transit': 'bg-yellow-100 text-yellow-700',
  'Delivered': 'bg-green-100 text-green-700',
  'Delayed': 'bg-red-100 text-red-700',
};

const todayTasks = [
  { task: 'Follow up with Vishwa FMCG for contract renewal', assignee: 'Rahul K', priority: 'High', status: 'Pending' },
  { task: 'Vehicle TS09AB1234 - Insurance renewal due', assignee: 'Operations', priority: 'High', status: 'Pending' },
  { task: 'Send quotation to New Pharma Client', assignee: 'Priya S', priority: 'Medium', status: 'In Progress' },
  { task: 'Collect payment from FreshMart - ₹45,000', assignee: 'Accounts', priority: 'Medium', status: 'Pending' },
  { task: 'Driver Raju - License renewal reminder', assignee: 'HR', priority: 'Low', status: 'Done' },
];

export default function CRMDashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Welcome back! Here&apos;s your operations overview.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400">Last updated: Just now</span>
          <button className="px-3 py-1.5 bg-primary text-white text-xs font-medium rounded-lg hover:bg-primary-700 transition-colors">
            + New Shipment
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.title} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${stat.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className={`text-[10px] font-medium flex items-center gap-0.5 ${stat.up ? 'text-green-600' : 'text-red-500'}`}>
                  {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {stat.change}
                </span>
              </div>
              <p className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              <p className="text-[11px] text-gray-500 mt-0.5">{stat.title}</p>
            </div>
          );
        })}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Shipments */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Recent Shipments</h2>
            <a href="/crm/shipments" className="text-xs text-primary hover:underline">View All</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-800/50">
                <tr>
                  <th className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase">Shipment</th>
                  <th className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase">Customer</th>
                  <th className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase">Route</th>
                  <th className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase">Mode</th>
                  <th className="px-4 py-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                {recentShipments.map((shipment) => (
                  <tr key={shipment.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="px-4 py-3 text-xs font-medium text-primary">{shipment.id}</td>
                    <td className="px-4 py-3 text-xs text-gray-700 dark:text-gray-300">{shipment.customer}</td>
                    <td className="px-4 py-3 text-xs text-gray-500">{shipment.origin} → {shipment.destination}</td>
                    <td className="px-4 py-3">
                      <span className="text-[10px] font-medium px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full">{shipment.mode}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${statusColors[shipment.status] || 'bg-gray-100 text-gray-700'}`}>
                        {shipment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Today's Tasks */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Today&apos;s Tasks</h2>
            <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
              {todayTasks.filter(t => t.status !== 'Done').length} pending
            </span>
          </div>
          <div className="p-4 space-y-3">
            {todayTasks.map((task, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  task.status === 'Done' ? 'bg-green-100 border-green-500' : 'border-gray-300'
                }`}>
                  {task.status === 'Done' && <CheckCircle className="w-3 h-3 text-green-600" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-xs ${task.status === 'Done' ? 'text-gray-400 line-through' : 'text-gray-700 dark:text-gray-300'}`}>
                    {task.task}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] text-gray-400">{task.assignee}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                      task.priority === 'High' ? 'bg-red-50 text-red-600' :
                      task.priority === 'Medium' ? 'bg-yellow-50 text-yellow-600' :
                      'bg-gray-50 text-gray-500'
                    }`}>{task.priority}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Vehicle Status */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Fleet Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">On Trip</span>
              <span className="text-xs font-medium text-gray-700">28 vehicles</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '62%' }} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Available</span>
              <span className="text-xs font-medium text-gray-700">12 vehicles</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Maintenance</span>
              <span className="text-xs font-medium text-gray-700">5 vehicles</span>
            </div>
          </div>
        </div>

        {/* Revenue Chart Placeholder */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Revenue Trend</h3>
          <div className="flex items-end justify-between h-24 px-2">
            {[40, 65, 45, 80, 55, 70, 90].map((height, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="w-6 bg-primary/20 rounded-t" style={{ height: `${height}%` }}>
                  <div className="w-full bg-primary rounded-t" style={{ height: '60%' }} />
                </div>
                <span className="text-[9px] text-gray-400">{['M','T','W','T','F','S','S'][i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* On-Time Delivery */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Delivery Performance</h3>
          <div className="flex items-center justify-center">
            <div className="relative w-24 h-24">
              <svg className="w-24 h-24 -rotate-90">
                <circle cx="48" cy="48" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                <circle cx="48" cy="48" r="40" stroke="#10b981" strokeWidth="8" fill="none"
                  strokeDasharray={`${2 * Math.PI * 40 * 0.96} ${2 * Math.PI * 40}`} strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-gray-900 dark:text-white">96%</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center mt-2">On-Time Delivery Rate</p>
        </div>
      </div>
    </div>
  );
}
