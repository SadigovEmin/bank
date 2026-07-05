
import {Nfc} from "lucide-react"
function BankCard({number="4169-7388-2713-5066" ,expiry="05/28", name="Emin Sadigov", cvv="544", cardType="visa", balance="7800.40"}){
    return(
        <div className={`flex flex-col w-full max-w-[480px] aspect-[1.586/1] text-white rounded-2xl p-[3%] justify-between font-sans shadow-xl select-none backdrop-blur-md ${cardType==="visa"?" bg-[#121691]/90":" bg-[#10192e]"}`}>
            <div className="flex justify-between items-start ">
                <div >
                    <p className="text-[10px] sm:text-xs font-bold tracking-widest text-slate-400 uppercase">Balance</p>
                    <div className="flex items-center gap-1 mt-1 text-xl sm:text-2xl font-serif font-semibold tracking-wide">
                        <span className="font-sans font-medium ">₼</span>
                        <span>{balance}</span>
                    </div>
                </div>
                <div className=" opacity-80">
                   <Nfc className="w-6 h-6 sm:wh-7 "/>
                </div>
            </div>

            <div className="flex justify-between items-end">
                <div className="space-y-2 sm:space-y-3" >
                    <p className="text-xs sm:text-sm font-mono tracking-widest text-slate-400">{number}</p>
                    <p className="text-[9px] sm:text-[10px] font-bold tracking-widest text-slate-500 uppercase">Name</p>
                    <h5 className="text-xs sm:text-sm font-semibold mt-0.5 tracking-wide">{name}</h5>
                </div>
                
                <div className="flex flex-col items-end gap-2 sm:gap-3">
                    {cardType === "mastercard" ? (

                        <div className="flex flex-col items-end gap-2 sm:gap-3">
                            <div className="flex -space-x-2 sm:-space-x-3 isolate">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-orange-500/70 mix-blend-screen" />
                                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-amber-400/40 mix-blend-screen" />
                             </div>
                         </div>
                    ) : (
                            <div className="flex items-baseline font-sans font-black italic tracking-widest text-lg select-none ">
                                <span className="text-white">V</span>
                                <span className="text-white/90">i</span>
                                <span className="text-white/80">s</span>
                                <span className="text-white/70">a</span>
                            </div>
                    )}
                    
                    <div className="text-right">
                        <p className="text-[9px] sm:text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                            Expires
                        </p>
                        <h5 className="text-xs sm:text-sm font-serif font-semibold italic tracking-wider mt-0.5">
                            {expiry}
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BankCard