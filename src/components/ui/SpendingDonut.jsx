// src/components/SpendingDonut.jsx
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const spendingData = [
  { name: 'Housing', value: 1800, color: '#c5a043' },
  { name: 'Food', value: 6200, color: '#3b82f6' }, // Scaled slightly higher visually for full ring structure
  { name: 'Transport', value: 340, color: '#10b981' },
  { name: 'Entertainment', value: 280, color: '#f43f5e' },
  { name: 'Other', value: 460, color: '#8b5cf6' },
];

export default function SpendingDonut() {
  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm w-full h-full flex flex-col justify-between">
      {/* Header */}
      <div>
        <h2 className="text-lg font-bold text-slate-900 font-serif">Spending Breakdown</h2>
        <p className="text-xs text-slate-400 mt-0.5">{new Intl.DateTimeFormat('en-US', {
            month: 'long',
            year:'numeric'
        }).format(new Date())}</p>
      </div>

      {/* Content Content Container */}
      <div className="flex items-center gap-4 mt-4 flex-1">
        {/* Interactive Donut */}
        <div className="w-1/2 h-38">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={spendingData}
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={75}
                paddingAngle={3}
                dataKey="value"
              >
                {spendingData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend Panel with Exact Prices */}
        <div className="w-1/2 space-y-2.5">
          {spendingData.map((item, index) => (
            <div key={index} className="flex justify-between items-center text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }}></span>
                <span className="text-slate-500 font-medium">{item.name}</span>
              </div>
              <span className="text-slate-800 font-semibold font-mono">
                ₼{item.name === 'Food' ? '620' : item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}