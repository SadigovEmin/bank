import React from "react";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";

export default function ConfirmTransferModal({ transferData, onBack, onConfirm }) {
  const { recipient, amount, note, sourceCard = "Visa •••• 7841" } = transferData;
  const formattedAmount = (parseFloat(amount) || 0).toFixed(2);

  return (
    <div className="max-w-md mx-auto my-8 bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4 mb-6">
        <button
          type="button"
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-slate-100/80 hover:bg-slate-200/80 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-lg font-bold text-slate-900 font-serif leading-tight">
            Confirm Transfer
          </h2>
          <p className="text-xs text-slate-400">Review your transfer details</p>
        </div>
      </div>

      {/* Amount Display */}
      <div className="text-center my-8">
        <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-1">
          YOU ARE SENDING
        </p>
        <h1 className="text-3xl font-extrabold text-slate-900 font-serif">
          ₼{formattedAmount}
        </h1>
        <p className="text-xs text-slate-500 mt-1">from {sourceCard}</p>
      </div>

      {/* Summary Table List */}
      <div className="space-y-4 text-xs border-t border-b border-slate-100 py-5 my-6">
        <div className="flex justify-between items-center">
          <span className="text-slate-400">To</span>
          <span className="font-semibold text-slate-800">
            {recipient?.name || "Nigar Huseynova"}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-slate-400">Bank</span>
          <span className="font-semibold text-slate-800">
            {recipient?.bank || "Kapital Bank"}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-slate-400">IBAN</span>
          <span className="font-mono text-slate-800 tracking-tight">
            {recipient?.iban || "AZ77AIIB38080019447003111258"}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-slate-400">Note</span>
          <span className="font-semibold text-slate-800">{note || "—"}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-slate-400">Fee</span>
          <span className="font-semibold text-slate-800">₼0.00 (free)</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-slate-400">Arrival</span>
          <span className="font-semibold text-slate-800">Instant</span>
        </div>
      </div>

      {/* Confirm Button */}
      <button
        type="button"
        onClick={onConfirm}
        className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-semibold text-sm py-4 rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer mb-4"
      >
        <span>Confirm &amp; Send</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      {/* Security Note */}
      <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
        <ShieldCheck className="w-4 h-4 text-slate-400" />
        <span>Protected by 256-bit SSL encryption</span>
      </div>
    </div>
  );
}