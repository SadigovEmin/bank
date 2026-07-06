import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import StatsCard from "../components/ui/StatsCard"
import BankCard from "../components/ui/BankCard"
import {QuickActionsSendMoney} from "../components/ui/QuickActionsSendMoney"
import { QuickActionsTopUp } from "../components/ui/QuickActionsTopUp"
import { QuickActionsPayBill } from "../components/ui/QuickActionsPayBill"
import { QuickActionsNewCard } from "../components/ui/QuickActionsNewCard"
import { QuickActionsQuickTransfer } from "../components/ui/QuickActionsQuickTransfer"
import {NavLink} from "react-router-dom";
import {ChevronRight} from "lucide-react";

import {useState} from "react";
import CashFlowChart from "../components/ui/CashFlowChart"
import SpendingDonut from "../components/ui/SpendingDonut"
import RecentTransactionsForDashboard from "../components/ui/RecentTransactionsForDashboard"


function Dashboard() {
    const [activeCardType, setActiveCardType] = useState("visa");
    return (
        <div className="flex h-screen ">
            

            <div className="flex-1 ">
                <Navbar/>

                <div className="p-6 bg-[#D4D4D4]">
                    <h1 className="text-2x1 font-bold">Hi, Emin Sadigov 👋</h1>

                    <div id="main-container" className="grid grid-cols-5 grid-rows-10 gap-[11px]">
                        <div id="stats-card" className="col-span-5 flex flex-col md:flex-row gap-6 mt-7 ">
                            <StatsCard title="Total Balance" amount="₼ 16, 730.50" change="+12.4% vs last month" positive={true} />
                            <StatsCard title="Montly Income" amount="₼ 10, 200.50" change="+4.4% vs last month" positive={true}/>
                            <StatsCard title="Montly Spend" amount="₼ 5, 100.00" change="-2.2% vs last month" positive={false}/>
                        </div>

                        {/*CARDS*/ }
                        <div className="col-span-2 row-span-3 row-start-2 pt-3">
                            <div>
                                <div className="flex justify-between">
                                    <p className="text-sm font-semibold text-gray-700">My Cards</p>
                                    
                                        <NavLink  to="/creditcard"  className="flex text-blue-800 ">
                                            <p className="text-sm ">Manage</p>
                                            <ChevronRight className="w-4 ml-2 text-current"/>
                                        </NavLink>
                        
                                </div>
                                <div className="mt-5 flex gap-5">
                                    <button onClick={() => setActiveCardType("visa")} className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${activeCardType==="visa" ? "bg-[#1A4378] text-white border-[#1A4378] shadow-sm": "bg-white/50 text-gray-600 border-gray-200 hover:bg-gray-50"}`}>
                                        Visa
                                    </button>

                                    <button onClick={() => setActiveCardType("mastercard")} className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${activeCardType==="mastercard" ? "bg-[#1A4378] border-[#1A4378] text-white shadow-sm":"bg-white/50 text-gray-600 border-gray-200 hover:bg-gray-50"}`}>
                                        Mastercard
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4">
                                <BankCard cardType = {activeCardType}/>
                            </div>
                        </div>

                        {/*QUICK ACTIONS*/ }
                        <div id="quick-actions" className="col-span-3 row-span-3 col-start-3 row-start-2 pt-3">
                            <p className="text-sm font-semibold text-gray-700 ">Quick Actions</p>
                            <div className="grid grid-cols-2 grid-rows-2 p-4 gap-3">
                                <div>
                                    <QuickActionsSendMoney/>
                                </div>
                                <div className="col-start-2">
                                    <QuickActionsTopUp/>
                                </div>
                                <div>
                                    <QuickActionsPayBill/>
                                </div>
                                <div>
                                    <QuickActionsNewCard/>
                                </div>
                                <div className="col-span-2 col-start-1  row-start-3">
                                    <QuickActionsQuickTransfer/>
                                </div>
                            </div>

                        </div>

                       

                        <div id="cash-flow" className=" col-span-5 col-start-1 lg:col-span-3 lg:row-span-2 row-start-5">
                            <CashFlowChart/>
                        </div>
                        <div id="spending-breakdown" className=" col-span-5 col-start-1 row-start-6 lg:col-span-2 lg:row-span-2 lg:col-start-4 lg:row-start-5">
                            <SpendingDonut/>
                        </div>

                        <div id="recent-transactions" className="col-span-5 row-span-4 row-start-7 mt-5 pt-4">
                            <RecentTransactionsForDashboard/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard