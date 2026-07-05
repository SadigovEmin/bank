import {Plus} from "lucide-react";
import {NavLink} from "react-router-dom";
export function QuickActionsNewCard({ className = "", ...props}){
    return(
        <NavLink to="/creditcard" >
            <div className={`bg-white p-5 rounded-xl shadow w-full border-blue-200 hover:border transition-all duration-300 ease-in-out hover:bg-blue-200/55 hover:border-blue-600 transform flex flex-col items-center justify-center ${className} `} {...props}>
                <div className="bg-fuchsia-400/55 p-3 rounded-lg">
                   <Plus className="text-fuchsia-900"/>
                </div>
                <p className="text-sm text-gray-700">New Card</p>
            </div>
        </NavLink>
    )
}
