import React, {useState} from 'react'
export function QuickActionsQuickTransfer({className = "", ...props}){
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const handleSend = (e) => {
        e.preventDefault();
        console.log(`Sending ${amount} to ${recipient}`);
       
    };
    return (

        <div className="bg-white w-full  border border-slate-100 rounded-3xl p-4 shadow-sm">
            <h2 className="text-xs font-bold tracking-wider text-slate-900/70 uppercase mb-4">
                Quick Transfer
            </h2>
            <form onSubmit={handleSend} className="space-y-3">
                <div className="relative">
                    <input type="text" placeholder="Recipient Card Number"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    className="w-full bg-[#f0f4f8] text-slate-700 placeholder-slate-400 text-sm rounded-xl px-4 py-3.5 border border-transparent focus:bg-white focus:outline-none focus:border-blue-600 transition-all" required/>
                </div>

                <div className="flex items-center gap-3">
                    <div className="relative flex-1 flex items-center bg-[#f0f4f8] rounded-xl border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all">
                        <span className="pl-4 text-slate-500 font-medium text-sm select-none">
                        ₼
                        </span>
                        <input 
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        value={amount}
                        onChange = {(e) => setAmount(e.target.value)}
                        className="w-full bg-transparent text-slate-700 placeholder-slate-400 text-sm py-3.5 pl-2 pr-4 focus:outline-none" required/>
                    </div>
                    <button type="submit"
                    className="bg-[#2f60e2] hover:bg-blue-700 text-white font-medium text-sm px-6 py-3.5 rounded-xl transition-colors cursor-pointer shadow-sm active:scale-[0.98]">
                        Send
                    </button>

                </div>

            </form>
        </div>
    )
}