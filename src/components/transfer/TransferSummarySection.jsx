import React from "react";
import { ArrowRight, User } from "lucide-react";

export default function TransferSummarySection({
  sender = { name: "You", cardType: "Visa", initials: "ES" },
  recipient = null, // e.g. { name: "Anar Rzayev", bank: "ABB Bank", initials: "AR", color: "bg-blue-600" }
  amount = "",
  fee = 0,
}) {
  // Parse input amount to float for math calculations
  const parsedAmount = parseFloat(amount) || 0;
  const totalSend = parsedAmount + fee;

  return (
    <div className="bg-white rounded-3xl p-4">
      <h3 className="text-base font-semibold text-slate-900 font-serif mb-6">
        Transfer Summary
      </h3>

      {/* Visual Connection Flow Line */}
      <div className="relative flex items-center justify-between mb-8 px-4">
        {/* Connecting Horizontal Line */}
        <div className="absolute top-6 left-10 right-10 h-[1px] bg-slate-200/80 z-0"></div>

        {/* Sender (Left Node) */}
        <div className="z-10 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-blue-100/80 border-2 border-white flex items-center justify-center shadow-xs">
            <span className="text-xs font-bold text-blue-700 tracking-wider">
              {sender.initials || "ES"}
            </span>
          </div>
          <p className="text-xs font-bold text-slate-800 mt-2">{sender.name}</p>
          <p className="text-[10px] text-slate-400 font-medium">
            {sender.cardType}
          </p>
        </div>

        {/* Directional Arrow (Center Node) */}
        <div className="relative -top-4.5 z-10 w-10 h-10 rounded-full bg-blue-50/80 border border-blue-100 flex items-center justify-center text-blue-600 shadow-xs">
          <ArrowRight className="w-4 h-4" />
        </div>

        {/* Recipient (Right Node) */}
        <div className="z-10 flex flex-col items-center text-center">
          {recipient ? (
            <>
              {/* Dynamic Recipient Selected */}
              <div
                className={`w-12 h-12 rounded-full border-2 border-white flex items-center justify-center shadow-xs ${
                  recipient.color || "bg-emerald-500"
                } text-white`}
              >
                <span className="text-xs font-bold tracking-wider">
                  {recipient.initials || "RE"}
                </span>
              </div>
              <p className="text-xs font-bold text-slate-800 mt-2 truncate max-w-[80px]">
                {recipient.name.split(" ")[0]}
              </p>
              <p className="text-[10px] text-slate-400 font-medium truncate max-w-[80px]">
                {recipient.bank || "External"}
              </p>
            </>
          ) : (
            <>
              {/* Default Empty State Matching Image */}
              <div className="w-12 h-12 rounded-full bg-blue-50/70 border-2 border-white flex items-center justify-center text-blue-500 shadow-xs">
                <User className="w-5 h-5 opacity-70" />
              </div>
              <p className="text-xs font-medium text-slate-400 mt-2">
                Recipient
              </p>
            </>
          )}
        </div>
      </div>

      <div className="w-full h-[1px] bg-slate-100 mb-5"></div>

      {/* Cost Breakdown Details */}
      <div className="space-y-3.5 text-sm">
        {/* Amount */}
        <div className="flex justify-between items-center text-slate-600">
          <span>Amount</span>
          <span className="font-mono font-medium text-slate-800">
            {parsedAmount > 0 ? `₼${parsedAmount.toFixed(2)}` : "–"}
          </span>
        </div>

        {/* Transfer Fee */}
        <div className="flex justify-between items-center text-slate-600">
          <span>Transfer fee</span>
          <span className="font-medium text-slate-800">
            {fee === 0 ? "Free" : `₼${fee.toFixed(2)}`}
          </span>
        </div>

        {/* Total You Will Send */}
        <div className="flex justify-between items-center pt-2 text-slate-900 font-semibold">
          <span>You will send</span>
          <span className="font-mono text-base">
            {totalSend > 0 ? `₼${totalSend.toFixed(2)}` : "–"}
          </span>
        </div>
      </div>
    </div>
  );
}