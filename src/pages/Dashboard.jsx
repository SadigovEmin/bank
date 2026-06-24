import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import StatsCard from "../components/ui/StatsCard"


function Dashboard() {
    return (
        <div className="flex h-screen">
            <Sidebar/>

            <div className="flex-1 bg-[#D4D4D4]">
                <Navbar/>

                <div className="p-6">
                    <h1 className="text-2x1 font-bold">Hi, Emin Sadigov 👋</h1>
                    <div id="main-container">
                        <div id="stats-card" className="flex gap-6 mt-7">
                            <StatsCard title="Total Balance" amount="₼ 16, 730.50" change="+12.4% vs last month" positive={true}/>
                            <StatsCard title="Montly Income" amount="₼ 10, 200.50" change="+4.4% vs last month" positive={true}/>
                            <StatsCard title="Montly Spend" amount="₼ 5, 100.00" change="-2.2% vs last month" positive={false}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard