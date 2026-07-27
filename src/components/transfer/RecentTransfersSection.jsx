import React from "react";
import { CheckCircle2, Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const mockRecentTransfers = [
  {
    id: 1,
    name: "Anar Rzayev",
    date: "Jun 17",
    amount: 250,
  },
  {
    id: 2,
    name: "Nigar Huseynova",
    date: "Jun 14",
    amount: 80,
  },
  {
    id: 3,
    name: "Tural Aliyev",
    date: "Jun 10",
    amount: 500,
  },
];

export default function RecentTransfersSection({ transfers = mockRecentTransfers }) {
  return (
    <div className="bg-white  rounded-3xl p-4 ">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-semibold text-slate-900 font-serif">
          Recent Transfers
        </h3>
        <Link
          to="/history"
          className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center gap-0.5 transition-colors"
        >
          All
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Transfers List */}
      <div className="divide-y divide-slate-100">
        {transfers.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between py-3.5 first:pt-2 last:pb-0"
          >
            {/* Left: Green Check Icon & Info */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800 leading-tight">
                  {item.name}
                </p>
                <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span>{item.date}</span>
                </div>
              </div>
            </div>

            {/* Right: Amount in Manat */}
            <div className="text-sm font-bold text-slate-900 font-mono">
              ₼{item.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}