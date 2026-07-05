import { Outlet} from "react-router-dom";
import Sidebar  from "../components/Sidebar";
function DashboardLayout(){
      return (
        <div className="flex h-screen overflow-hidden w-screen bg-gray-100">
          <Sidebar/>
          <main className="flex-1 h-full overflow-y-auto ">
            <Outlet/>
          </main>
        </div>
      )
    }
export default DashboardLayout 