import { Outlet} from "react-router-dom";
import Sidebar  from "../components/Sidebar";
import {useState} from "react";
import Navbar from "../components/Navbar";
 
function DashboardLayout(){
      const[isMobileOpen, setIsMobileOpen] = useState(false);
      return (
        <div className="flex h-screen overflow-hidden w-screen bg-gray-100">
          <Sidebar isMobileOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)}/>
          <main className="flex-1 h-full overflow-y-auto ">
            <Navbar onMenuClick={() => setIsMobileOpen(!isMobileOpen)}/>
            <Outlet/>
          </main>
        </div>
      )
    }
export default DashboardLayout 