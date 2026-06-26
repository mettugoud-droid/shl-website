'use client';

import React from 'react';
import { Plus, MessageSquare, Clock, CheckCircle } from 'lucide-react';

const tickets = [
  { id: 'TKT-001', subject: 'Delivery delayed for SHL-260608-0012', status: 'Resolved', date: '09 Jun', response: 'Shipment delayed due to road work. Delivered next day.' },
  { id: 'TKT-002', subject: 'Invoice correction needed', status: 'Open', date: '10 Jun', response: 'Under review by accounts team.' },
  { id: 'TKT-003', subject: 'Damaged packaging on delivery', status: 'In Progress', date: '08 Jun', response: 'Claim being processed.' },
];

const statusColors: Record<string, string> = { 'Open': 'bg-blue-100 text-blue-700', 'In Progress': 'bg-yellow-100 text-yellow-700', 'Resolved': 'bg-green-100 text-green-700' };

export default function CustomerTicketsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="text-xl font-bold text-gray-900">Support Tickets</h1><p className="text-sm text-gray-500">Raise and track complaints</p></div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-xl"><Plus className="w-4 h-4" /> New Ticket</button>
      </div>
      <div className="space-y-3">
        {tickets.map((t) => (
          <div key={t.id} className="bg-white rounded-2xl border p-5">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-start gap-3"><MessageSquare className="w-5 h-5 text-gray-500 mt-0.5" /><div><p className="text-sm font-bold">{t.subject}</p><p className="text-[10px] text-gray-400">{t.id} • {t.date}</p></div></div>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${statusColors[t.status]}`}>{t.status}</span>
            </div>
            <p className="text-xs text-gray-600 ml-8 bg-gray-50 rounded-lg p-3">{t.response}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
