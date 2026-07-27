import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function AmountAndDetailsSection({ onAmountChange, onNoteChange, onSubmit }) {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  const quickAmounts = [50, 100, 250, 500];

  const handleAmountSelect = (value) => {
    const formatted = value.toString();
    setAmount(formatted);
    if (onAmountChange) onAmountChange(formatted);
  };

  const handleInputChange = (e) => {
    // Only allow valid numeric input with decimal
    const val = e.target.value.replace(/[^0-9.]/g, "");
    setAmount(val);
    if (onAmountChange) onAmountChange(val);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
    if (onNoteChange) onNoteChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit({ amount, note });
  };

  return (
    <div className="space-y-4">
      {/* Main Container */}
      <div className="bg-white  rounded-3xl p-4  space-y-5">
        <h3 className="text-base font-semibold text-slate-900 font-serif">
          Amount &amp; Details
        </h3>

        {/* Transfer Amount Input Box */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-400">
            Transfer Amount
          </label>
          <div className="relative flex items-center bg-[#f1f5f9]/70 border border-slate-200/60 rounded-2xl px-4 py-3.5 focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all">
            <span className="text-slate-800 font-mono font-semibold text-lg mr-1.5">
              ₼
            </span>
            <input
              type="text"
              value={amount}
              onChange={handleInputChange}
              placeholder="0.00"
              className="w-full bg-transparent text-slate-800 font-mono font-semibold text-lg placeholder:text-slate-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Quick Amount Pills */}
        <div className="grid grid-cols-4 gap-2.5">
          {quickAmounts.map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => handleAmountSelect(val)}
              className={`py-2.5 rounded-2xl text-xs font-mono font-medium transition-all cursor-pointer ${
                amount === val.toString()
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-[#f1f5f9]/80 hover:bg-slate-200/60 text-slate-700"
              }`}
            >
              ₼{val}
            </button>
          ))}
        </div>

        {/* Note (Optional) Field */}
        <div className="space-y-2 pt-1">
          <label className="text-xs font-semibold text-slate-400">
            Note (optional)
          </label>
          <div className="bg-[#f1f5f9]/70 border border-slate-200/60 rounded-2xl px-4 py-3.5 focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all">
            <input
              type="text"
              value={note}
              onChange={handleNoteChange}
              placeholder="e.g. Dinner, rent, loan repayment..."
              className="w-full bg-transparent text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Primary Action Button */}
      <button
        type="button"
        onClick={handleSubmit}
        className={`w-full bg-[#9bb2f0] hover:bg-[#8aa3e8] active:scale-[0.99] text-white font-semibold text-sm py-4 rounded-2xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${amount>0 ? "bg-blue-700 hover:bg-blue-400":""}`}
      >
        <span>Review Transfer</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}