import Logo from "../assets/logoTransparent.png";
import { X, UserRound, LayoutDashboard, CreditCard, ArrowLeftRight, History, Shield, Settings, LogOut } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

function Sidebar({ userName = "Emin Sadigov", isMobileOpen, onClose }) {
  const location = useLocation();
  const currentPage = location.pathname; // "/", "/creditcard", ....

  return (
    <>
      {/* 1. Backdrop Overlay for Mobile Screens */}
      {isMobileOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 lg:hidden transition-opacity"
        />
      )}

      {/* 2. Responsive Sidebar Wrapper */}
      <aside
        className={`
          fixed top-0 bottom-0 left-0 z-50 w-60 bg-[#1A4378] text-white p-5 flex flex-col h-screen shrink-0
          transition-transform duration-300 ease-in-out
          /* Mobile Drawer: Slides off-screen when closed */
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          /* Desktop: Always visible in normal flex flow */
          lg:static lg:translate-x-0
        `}
      >
        {/* Mobile Close Button Header */}
        <div className="flex justify-end lg:hidden mb-2">
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-white/70 hover:text-white hover:bg-[#495E87] transition-colors"
            aria-label="Close Sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Brand & User Info Section */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-[#495E87]/70 overflow-hidden rounded-3xl h-14 w-14 flex items-center justify-center shrink-0">
              <img src={Logo} alt="ES Bank Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-bold">ES Bank</h2>
              <p className="text-xs font-thin opacity-60">Digital Banking</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-5 pl-2 mt-8 lg:mt-12">
            <div className="flex items-center justify-center h-9 w-9 bg-[#495E87] rounded-full overflow-hidden shrink-0">
              <UserRound className="w-5 h-5" />
            </div>
            <div className="flex flex-col pl-3">
              <h2 className="text-xs font-semibold">{userName}</h2>
              <p className="text-xs font-thin opacity-60">Admin</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="space-y-4 pl-1">
          <NavLink
            to="/"
            onClick={onClose}
            className={`flex items-center gap-5 cursor-pointer transition rounded-lg w-48 h-10 hover:bg-[#495E87] ${
              currentPage === "/" ? "bg-[#495E87]" : ""
            }`}
          >
            <LayoutDashboard className="w-4 h-4 ml-3" />
            <p className="text-sm">Dashboard</p>
          </NavLink>

          <NavLink
            to="/creditcard"
            onClick={onClose}
            className={`flex items-center gap-5 cursor-pointer transition rounded-lg w-48 h-10 hover:bg-[#495E87] ${
              currentPage === "/creditcard" ? "bg-[#495E87]" : ""
            }`}
          >
            <CreditCard className="w-4 h-4 ml-3" />
            <p className="text-sm">CreditCard</p>
          </NavLink>

          <NavLink
            to="/transfer"
            onClick={onClose}
            className={`flex items-center gap-5 cursor-pointer transition rounded-lg w-48 h-10 hover:bg-[#495E87] ${
              currentPage === "/transfer" ? "bg-[#495E87]" : ""
            }`}
          >
            <ArrowLeftRight className="w-4 h-4 ml-3" />
            <p className="text-sm">Transfer</p>
          </NavLink>

          <NavLink
            to="/history"
            onClick={onClose}
            className={`flex items-center gap-5 cursor-pointer transition rounded-lg w-48 h-10 hover:bg-[#495E87] ${
              currentPage === "/history" ? "bg-[#495E87]" : ""
            }`}
          >
            <History className="w-4 h-4 ml-3" />
            <p className="text-sm">History</p>
          </NavLink>

          <NavLink
            to="/security"
            onClick={onClose}
            className={`flex items-center gap-5 cursor-pointer transition rounded-lg w-48 h-10 hover:bg-[#495E87] ${
              currentPage === "/security" ? "bg-[#495E87]" : ""
            }`}
          >
            <Shield className="w-4 h-4 ml-3" />
            <p className="text-sm">Security</p>
          </NavLink>

          <NavLink
            to="/settings"
            onClick={onClose}
            className={`flex items-center gap-5 cursor-pointer transition rounded-lg w-48 h-10 hover:bg-[#495E87] ${
              currentPage === "/settings" ? "bg-[#495E87]" : ""
            }`}
          >
            <Settings className="w-4 h-4 ml-3" />
            <p className="text-sm">Settings</p>
          </NavLink>
        </ul>

        {/* Footer / Sign Out Section */}
        <div className="mt-auto">
          <div className="w-48 h-[1px] bg-gray-400 opacity-30 ml-1 mb-2"></div>
          <div className="flex gap-5 cursor-pointer transition rounded-lg w-48 h-10 hover:bg-red-900/60 items-center pl-1">
            <LogOut className="w-4 h-4 ml-3" />
            <p className="text-sm">Sign Out</p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;