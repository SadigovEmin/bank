import { useState } from "react";
import { Bell, Search } from "lucide-react";
import {useLocation} from "react-router-dom";
function Navbar({ pageTitle = "Dashboard" }) {
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
    <div className="flex w-full items-center justify-between bg-white/60  sticky top-0 z-50  p-4 shadow-sm backdrop-blur-sm border-b border-white/20">
      <div className="pl-4">
        <h2 className="text-lg font-bold">{currentPageTitle}</h2>
        <p className="text-xs font-thin opacity-70">{date}</p>
      </div>

      <div className="flex gap-5 pr-4 ">
        <div className="flex relative w-64 bg-blue-100 rounded-lg border  border-gray-300 ">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"  />
          <input
            type="text"
            placeholder="Search transactions..."
            className="h-7 w-full pl-9   p-1 pl-4 transition-all focus:ring-blue-500 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1   "
          />
        </div>

        <div className="flex w-9 items-center justify-center rounded-lg bg-blue-100">
          <Bell className="w-5 rounded-lg opacity-50" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
