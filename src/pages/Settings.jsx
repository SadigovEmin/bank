import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"


function Settings() {
    return (
        <div className="flex h-screen">
            <Sidebar/>

            <div className="flex-1 bg-gray-100">
                <Navbar/>

                <div className="p-6">
                    <h1 className="text-2x1 font-bold">Settings</h1>
                </div>
            </div>
        </div>
    )
}

export default Settings