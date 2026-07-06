import React from 'react';
import {ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

const data = [
    {name: 'Jan', income:8000, expenses: 5000},
    {name: 'Feb', income:7800, expenses: 4800},
    {name: 'Mar', income:9100, expenses: 5200},
    {name: 'Apr', income:5000, expenses: 3200},
    {name: 'May', income:9800, expenses: 6100},
    {name: 'Jun', income:8000, expenses: 5000},
    {name: 'July', income:3000, expenses: 5000},
    {name: 'Aug', income:8000, expenses: 7800},
    {name: 'Sep', income:8000, expenses: 5000},
    {name: 'Oct', income:9000, expenses: 3000},
    {name: 'Nov', income:8500, expenses: 4000},
    {name: 'Dec', income:8700, expenses: 5000},
]


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-xl text-xs space-y-2">
        <p className="font-bold text-slate-800">{label}</p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#2f60e2]"></span>
          <span className="text-slate-500">: ₼{payload[0].value.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#e11d48]"></span>
          <span className="text-slate-500">: ₼{payload[1].value.toLocaleString()}</span>
        </div>
      </div>
    );
  }
  return null;
};

export default function CashFlowChart() {
  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm w-full h-full">
      {/* Chart Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-lg font-bold text-slate-900 font-serif">Cash Flow</h2>
          <p className="text-xs text-slate-400 mt-0.5">Income vs. Expenses — {new Intl.DateTimeFormat('en-US',{
            year:'numeric'
          }).format(new Date())}</p>
        </div>
        {/* Custom Legend */}
        <div className="flex items-center gap-4 text-xs font-medium text-slate-600">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2f60e2]"></span>
            <span>Income</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e11d48]"></span>
            <span>Expenses</span>
          </div>
        </div>
      </div>

      {/* Main Chart Container */}
      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2f60e2" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#2f60e2" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#e11d48" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#e11d48" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="4 4" vertical={true} horizontal={true} stroke="#c2c3c4" />
            <XAxis dataKey="name" axisLine={true} tickLine={true} tick={{ fill: '#94a3b8', fontSize: 11 }} />
            <YAxis 
              axisLine={true} 
              tickLine={true} 
              tick={{ fill: '#94a3b8', fontSize: 11 }} 
              tickFormatter={(value) => value === 0 ? '₼0k' : `₼${value / 1000}k`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#cbd5e1', strokeWidth: 1 }} />
            <Area type="monotone" dataKey="income" stroke="#2f60e2" strokeWidth={2} fillOpacity={1} fill="url(#colorIncome)" />
            <Area type="monotone" dataKey="expenses" stroke="#e11d48" strokeWidth={2} fillOpacity={1} fill="url(#colorExpenses)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}