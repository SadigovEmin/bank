import { Nfc } from "lucide-react"

function BankCardforTransferPage({
    number = "4169-7388-2713-5066",
    expiry = "05/28",
    name = "Emin Sadigov",
    cvv = "544",
    cardType = "visa",
    balance = "7800.40",
    isSelected = false
}) {
    return (
        /* 
          Using inline responsive calculations based on viewport width (vw) 
          but clamped via standard max-widths so it stays perfect on desktop.
        */
        <div className={` transition-all duration-200  ${isSelected ? ' border-2 ease-in-out border-blue-600 shadow-md scale-[1.01]'
                      : 'border border-transparent opacity-85 hover:opacity-100'} flex flex-col w-full max-w-[480px] aspect-[1.586/1] text-white rounded-3xl p-[max(16px,2vw)] justify-between font-sans shadow-xl backdrop-blur-md ${cardType === "visa" ? " bg-[#121691]/90" : " bg-[#10192e]"}`}>
            
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-[max(10px,1.3vw)]  lg:text-xs font-bold tracking-widest text-slate-400 uppercase">Balance</p>
                    <div className="flex items-center gap-[1vw] lg:gap-1.5 mt-[0.5vw] text-[max(18px,1.5vw)]  font-serif font-semibold tracking-wide">
                        <span className="font-sans font-medium">₼</span>
                        <span>{balance}</span>
                    </div>
                </div>
                <div className="opacity-80">
                    <Nfc className="w-[max(20px,2.5vw)] h-[max(20px,2.5vw)] lg:w-7 lg:h-7" />
                </div>
            </div>

            <div className="flex justify-between items-end">
                <div className="space-y-[1.5vw] lg:space-y-3 ">
                    <p className="text-[max(13px,1.3vw)] pr-6 lg:text-lg font-mono tracking-widest text-slate-400">{number}</p>
                    <div>
                        <p className="text-[max(9px,1vw)] lg:text-[10px] font-bold tracking-widest text-slate-500 uppercase">Name</p>
                        <h5 className="text-[max(11px,1vw)] lg:text-sm font-semibold mt-0.5 tracking-wide">{name}</h5>
                    </div>
                </div>
                
                <div className="flex flex-col items-end   gap-[1.5vw] lg:gap-3">
                    {cardType === "mastercard" ? (
                        <div className="flex -space-x-[1.5vw] lg:-space-x-3 isolate mb-1">
                            <div className="w-[max(20px,1.5vw)] h-[max(20px,1.5vw)] lg:w-6 lg:h-6 rounded-full bg-orange-500/80 mix-blend-screen" />
                            <div className="w-[max(20px,1.5vw)] h-[max(20px,1.5vw)] lg:w-6 lg:h-6 rounded-full bg-amber-400/60 mix-blend-screen" />
                        </div>
                    ) : (
                        <div className="flex items-baseline font-sans font-black italic tracking-widest text-[max(13px,1.1vw)]  select-none mb-1">
                            <span className="text-white">V</span>
                            <span className="text-white/90">i</span>
                            <span className="text-white/80">s</span>
                            <span className="text-white/70">a</span>
                        </div>
                    )}
                    
                    <div className="text-right">
                        <p className="text-[max(9px,1vw)] lg:text-[10px] font-bold tracking-widest text-slate-500 uppercase">Expires</p>
                        <h5 className="text-[max(11px,1vw)] lg:text-sm font-serif font-semibold italic tracking-wider mt-0.5">{expiry}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BankCardforTransferPage;