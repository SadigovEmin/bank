import Logo from "../assets/logoTransparent.png";
import {UserRound,LayoutDashboard, CreditCard, ArrowLeftRight,History, Shield, Settings, LogOut} from "lucide-react";
import {Link, NavLink} from "react-router-dom";

function Sidebar({userName="Emin Sadigov"}) {



  return (
    <div className="w-60 bg-[#1A4378] text-white p-5 flex flex-col h-screen">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-5 ">
          <div className="bg-[#495E87]/70 overflow-hidden rounded-3xl h-14 w-14 flex items-center justify-center ">
            <img src={Logo} className="w-full h-full object-cover "/>
          </div>
          <div className="flex flex-col ">
            <h2 className="text-xl font-bold  ">ES Bank</h2>
            <p className="text-xs font-thin opacity-60 ">Digital Banking</p>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-5 pl-2 mt-12">
          <div className=" flex items-center justify-center h-9 w-9 bg-[#495E87] rounded-4xl overflow-hidden">
            <UserRound />
          </div>
          <div className="flex flex-col pl-3 ">
            <h2 className="text-xs   ">{userName}</h2>
            <p className="text-xs font-thin opacity-60 ">Admin</p>
          </div>
        </div>

      </div>

      <ul className="space-y-4 pl-3">
        <NavLink to="/" className="flex items-center gap-5 cursor-pointer transition rounded-lg w-48 h-10 hover:bg-[#495E87]">
          <LayoutDashboard className=" w-4 h-4 ml-3 "/>
          <p>Dashboard</p>
        </NavLink>

        <NavLink to="/creditcard" className="flex items-center gap-5 cursor-pointer transition rounded-lg w-48 h-10 hover:bg-[#495E87]">
          <CreditCard className=" w-4 h-4 ml-3 "/>
          <p>CreditCard</p>
        </NavLink>

        <NavLink to="/transfer" className="flex items-center gap-5 cursor-pointer transition rounded-lg w-48 h-10 hover:bg-[#495E87]">
          <ArrowLeftRight className=" w-4 h-4 ml-3 "/>
          <p>Transfer</p>
        </NavLink>

        <NavLink to="/history" className="flex items-center gap-5 cursor-pointer transition rounded-lg w-48 h-10 hover:bg-[#495E87]">
          <History className=" w-4 h-4 ml-3 "/>
          <p>History</p>
        </NavLink>

        <NavLink to="/security" className="flex items-center gap-5 cursor-pointer transition rounded-lg w-48 h-10 hover:bg-[#495E87]">
          <Shield className=" w-4 h-4 ml-3 "/>
          <p>Security</p>
        </NavLink>

        <NavLink to="/settings" className="flex items-center gap-5 cursor-pointer transition rounded-lg w-48 h-10 hover:bg-[#495E87]">
          <Settings className=" w-4 h-4 ml-3 "/>
          <p>Settings</p>
        </NavLink>
      </ul>
     
      <div className=" mt-auto">
        <div className="w-48 h-[1px] bg-gray-400 opacity-30 ml-3 mb-2"></div>
        <div className="flex gap-5 cursor-pointer transition rounded-lg w-48 h-10 hover:bg-red-900 hover:opacity-40 items-center pl-3">
        <LogOut className="w-4 h-4 ml-3"/>
        <p>Sign Out</p>
        </div>
      </div>

    </div>
  )
}

export default Sidebar