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
        <div className="flex min-h-screen">
            <div className="flex-1">
               

                
                <div className="p-6  min-h-[calc(100vh-64px)]">
                    <h1 className="text-2xl font-bold text-slate-800">Hi, Emin Sadigov 👋</h1>

                    {/* Main Container: Controlled by column structures, letting height grow naturally */}
                    <div id="main-container" className="flex flex-col gap-6 mt-6">
                        
                        {/* STATS CARDS */}
                        <div id="stats-card" className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <StatsCard title="Total Balance" amount="₼ 16, 730.50" change="+12.4% vs last month" positive={true} />
                            <StatsCard title="Monthly Income" amount="₼ 10, 200.50" change="+4.4% vs last month" positive={true}/>
                            <StatsCard title="Monthly Spend" amount="₼ 5, 100.00" change="-2.2% vs last month" positive={false}/>
                        </div>

                        {/* MIDDLE SECTION: CARDS & QUICK ACTIONS */}
                        <div className="grid grid-cols-1  lg:grid-cols-5 gap-6 items-start">
                            {/* CARDS (Takes 2 cols on desktop) */}
                            <div className="lg:col-span-2  flex flex-col justify-between h-full">
                                <div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm font-semibold text-gray-700">My Cards</p>
                                        <NavLink to="/creditcard" className="flex items-center text-blue-800 hover:underline">
                                            <p className="text-sm">Manage</p>
                                            <ChevronRight className="w-4 h-4 ml-1 text-current"/>
                                        </NavLink>
                                    </div>
                                    <div className="mt-4 flex gap-3">
                                        <button onClick={() => setActiveCardType("visa")} className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${activeCardType==="visa" ? "bg-[#1A4378] text-white border-[#1A4378] shadow-sm": "bg-white/50 text-gray-600 border-gray-200 hover:bg-gray-50"}`}>
                                            Visa
                                        </button>
                                        <button onClick={() => setActiveCardType("mastercard")} className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${activeCardType==="mastercard" ? "bg-[#1A4378] border-[#1A4378] text-white shadow-sm":"bg-white/50 text-gray-600 border-gray-200 hover:bg-gray-50"}`}>
                                            Mastercard
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-4  ">
                                    <BankCard cardType={activeCardType}/>
                                </div>
                            </div>

                            {/* QUICK ACTIONS (Takes 3 cols on desktop) */}
                            <div id="quick-actions" className="lg:col-span-3">
                                <p className="text-sm font-semibold text-gray-700 mb-3">Quick Actions</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <QuickActionsSendMoney/>
                                    <QuickActionsTopUp/>
                                    <QuickActionsPayBill/>
                                    <QuickActionsNewCard/>
                                    <div className="sm:col-span-2">
                                        <QuickActionsQuickTransfer/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CHARTS SECTION */}
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
                            <div id="cash-flow" className="lg:col-span-3">
                                <CashFlowChart/>
                            </div>
                            <div id="spending-breakdown" className="lg:col-span-2">
                                <SpendingDonut/>
                            </div>
                        </div>

                        {/* RECENT TRANSACTIONS */}
                        <div id="recent-transactions" className="w-full">
                            <RecentTransactionsForDashboard/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard