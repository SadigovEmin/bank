import React from "react";
import { CheckCircle2, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TransferSuccessModal({ transferData, onNewTransfer }) {
  const navigate = useNavigate();
  const { recipient, amount } = transferData;
  const formattedAmount = (parseFloat(amount) || 0).toFixed(2);
  const referenceNumber = "TRF" + Math.floor(10000000 + Math.random() * 90000000);

  return (
    <div className="max-w-md mx-auto my-8 bg-white border border-slate-100 rounded-3xl p-8 shadow-sm text-center">
      {/* Green Success Badge */}
      <div className="w-16 h-16 rounded-full bg-emerald-100/70 border border-emerald-200 flex items-center justify-center mx-auto mb-6 text-emerald-500">
        <Check className="w-8 h-8 stroke-[3]" />
      </div>

      {/* Main Title & Subtitle */}
      <h2 className="text-xl font-bold text-slate-900 font-serif mb-2">
        Transfer Successful
      </h2>
      <p className="text-xs text-slate-400 max-w-xs mx-auto mb-8">
        Your transfer has been processed and will arrive shortly.
      </p>

      {/* Detail Block Container */}
      <div className="bg-[#f1f5f9]/60 rounded-2xl p-5 text-xs space-y-3.5 mb-8 text-left">
        <div className="flex justify-between items-center">
          <span className="text-slate-400">Amount sent</span>
          <span className="font-mono font-bold text-slate-900">
            ₼{formattedAmount}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-slate-400">Recipient</span>
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
          <span className="text-slate-400">Reference</span>
          <span className="font-mono text-slate-700">{referenceNumber}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-slate-400">Status</span>
          <span className="font-semibold text-emerald-600 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Completed
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={onNewTransfer}
          className="bg-[#f1f5f9] hover:bg-slate-200/70 text-slate-700 font-semibold text-xs py-3.5 rounded-2xl transition-all cursor-pointer"
        >
          New Transfer
        </button>

        <button
          type="button"
          onClick={() => navigate("/")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs py-3.5 rounded-2xl shadow-xs transition-all cursor-pointer"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}