import { useState } from "react";
import { Bell, Search, Menu } from "lucide-react";
import { useLocation } from "react-router-dom";

function Navbar({ onMenuClick }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    console.log("Searching for: ", event.target.value);
  };

  const date = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  const location = useLocation();
  const pageTitles = {
    "/": "Dashboard",
    "/creditcard": "Credit Cards",
    "/transfer": "Money Transfer",
    "/history": "Transaction History",
    "/security": "Security Settings",
    "/settings": "Settings",
  };
  const currentPageTitle = pageTitles[location.pathname] || "Dashboard";

  return (
    <div className="flex w-full items-center justify-between bg-white/60 sticky top-0 z-40 p-4 shadow-sm backdrop-blur-sm border-b border-white/20">
      {/* Left Section: Mobile Menu Toggle + Title */}
      <div className="flex items-center gap-3 pl-2 sm:pl-4">
        {/* Hamburger Toggle Button (Hidden on Desktop) */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-1.5 rounded-lg text-gray-600 hover:bg-gray-100/80 active:bg-gray-200 focus:outline-none transition-colors"
          aria-label="Toggle Menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div>
          <h2 className="text-base sm:text-lg font-bold text-gray-800 leading-tight">
            {currentPageTitle}
          </h2>
          <p className="text-[10px] sm:text-xs font-thin opacity-70 text-gray-600">
            {date}
          </p>
        </div>
      </div>

      {/* Right Section: Search & Notifications */}
      <div className="flex items-center gap-3 sm:gap-5 pr-2 sm:pr-4">
        {/* Responsive Search Input */}
        <div className="relative w-36 sm:w-64 bg-blue-100/60 rounded-lg border border-gray-300">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search transactions..."
            className="h-8 sm:h-9 w-full pl-9 pr-3 text-xs sm:text-sm bg-transparent transition-all focus:ring-blue-500 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1"
          />
        </div>

        {/* Notification Bell */}
        <button className="flex w-8 h-8 sm:w-9 sm:h-9 items-center justify-center rounded-lg bg-blue-100/60 hover:bg-blue-100 transition-colors shrink-0">
          <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 opacity-70" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;