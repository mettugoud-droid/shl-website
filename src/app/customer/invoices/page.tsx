'use client';

import React from 'react';
import { FileText, Download } from 'lucide-react';

const invoices = [
  { id: 'INV-2026-0145', date: '10 Jun 2026', amount: '₹85,000', status: 'Paid', shipment: 'SHL-260610-0004' },
  { id: 'INV-2026-0138', date: '05 Jun 2026', amount: '₹1,20,000', status: 'Unpaid', shipment: 'SHL-260605-0008' },
  { id: 'INV-2026-0130', date: '28 May 2026', amount: '₹65,000', status: 'Paid', shipment: 'SHL-260528-0015' },
  { id: 'INV-2026-0125', date: '20 May 2026', amount: '₹1,45,000', status: 'Paid', shipment: 'SHL-260520-0010' },
];

export default function CustomerInvoicesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between"><div><h1 className="text-xl font-bold text-gray-900">Invoices</h1><p className="text-sm text-gray-500">View and download your invoices</p></div><div className="text-right"><p className="text-xs text-gray-500">Outstanding</p><p className="text-lg font-bold text-orange-600">₹1,20,000</p></div></div>
      <div className="space-y-3">
        {invoices.map((inv) => (
          <div key={inv.id} className="bg-white rounded-2xl border p-5 flex items-center justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center"><FileText className="w-5 h-5 text-blue-600" /></div>
              <div><p className="text-sm font-bold">{inv.id}</p><p className="text-xs text-gray-500">{inv.date} • {inv.shipment}</p></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right"><p className="text-sm font-bold">{inv.amount}</p><span className={`text-[10px] px-2 py-0.5 rounded-full ${inv.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>{inv.status}</span></div>
              <button className="p-2 hover:bg-gray-100 rounded-lg"><Download className="w-4 h-4 text-gray-500" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
