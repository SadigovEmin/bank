// src/components/RecentTransactions.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Fuel, 
  Briefcase, 
  ShoppingCart, 
  Tv, 
  ArrowUpRight, 
  Pizza, 
  TrendingUp, 
  PhoneCall, 
  ChevronRight 
} from 'lucide-react';

// Mock dataset exactly matching the transactions in image_edf9c0.png
const transactionsData = [
  {
    id: 1,
    merchant: 'SOCAR Petrol Station',
    category: 'Transport',
    time: 'Today, 14:32',
    amount: -45.00,
    icon: Fuel,
    iconColor: 'text-rose-500 bg-rose-50',
  },
  {
    id: 2,
    merchant: 'Salary — ABB Bank',
    category: 'Income',
    time: 'Today, 09:00',
    amount: 3200.00,
    icon: Briefcase,
    iconColor: 'text-amber-700 bg-amber-50',
  },
  {
    id: 3,
    merchant: 'Bravo Supermarket',
    category: 'Food',
    time: 'Yesterday, 19:15',
    amount: -87.50,
    icon: ShoppingCart,
    iconColor: 'text-indigo-500 bg-indigo-50',
  },
  {
    id: 4,
    merchant: 'Netflix',
    category: 'Entertainment',
    time: 'Yesterday, 00:00',
    amount: -15.99,
    icon: Tv,
    iconColor: 'text-purple-500 bg-purple-50',
  },
  {
    id: 5,
    merchant: 'Transfer — Anar R.',
    category: 'Transfer',
    time: 'Jun 17, 11:40',
    amount: -2500.00, // Adjusted layout to align with numeric styling
    icon: ArrowUpRight,
    iconColor: 'text-blue-500 bg-blue-50',
  },
  {
    id: 6,
    merchant: 'Wolt Food Delivery',
    category: 'Food',
    time: 'Jun 16, 20:10',
    amount: -32.40,
    icon: Pizza,
    iconColor: 'text-orange-500 bg-orange-50',
  },
  {
    id: 7,
    merchant: 'Dividend — Kapital',
    category: 'Income',
    time: 'Jun 15, 10:00',
    amount: 180.00,
    icon: TrendingUp,
    iconColor: 'text-emerald-500 bg-emerald-50',
  },
  {
    id: 8,
    merchant: 'Utility — Bakcell',
    category: 'Bills',
    time: 'Jun 14, 08:30',
    amount: -28.00,
    icon: PhoneCall,
    iconColor: 'text-blue-600 bg-blue-50',
  },
];

export default function RecentTransactions() {
  return (
    <div className="w-full bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
      {/* Header Area */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900 font-serif">Recent Transactions</h2>
          <p className="text-xs text-slate-400 mt-0.5">Last 30 days</p>
        </div>
        <NavLink to="/history">
            <button className="inline-flex items-center gap-0.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer">
            View All
            <ChevronRight className="w-3.5 h-3.5" />
            </button>
        </NavLink>
      </div>

      {/* Transactions List Ledger */}
      <div className="divide-y divide-slate-100">
        {transactionsData.map((tx) => {
          const IconComponent = tx.icon;
          const isIncome = tx.amount > 0;

          return (
            <div key={tx.id} className="flex items-center justify-between py-3.5 first:pt-2 last:pb-2">
              {/* Left Side: Icon & Details */}
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${tx.iconColor}`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-800 leading-tight">
                    {tx.merchant}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {tx.category} • {tx.time}
                  </p>
                </div>
              </div>

              {/* Right Side: Numeric Amount */}
              <div className={`text-sm font-bold font-mono tracking-tight ${isIncome ? 'text-emerald-500' : 'text-slate-800'}`}>
                {isIncome ? `+₼${tx.amount.toFixed(2)}` : `₼${Math.abs(tx.amount).toFixed(2)}`}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}