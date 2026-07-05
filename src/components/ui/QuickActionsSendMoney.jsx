import {Send} from "lucide-react";
import {NavLink} from "react-router-dom";
export function QuickActionsSendMoney({ className = "", ...props}){
    return(
        <NavLink to="/transfer" >
            <div className={`bg-white p-5 rounded-xl shadow w-full border-blue-200 hover:border transition-all duration-300 ease-in-out hover:bg-blue-200/55 hover:border-blue-600 transform flex flex-col items-center justify-center ${className} `} {...props}>
                <div className="bg-blue-200/55 p-3 rounded-lg">
                   <Send className="text-blue-700"/>
                </div>
                <p className="text-sm text-gray-700">Send Money</p>
            </div>
        </NavLink>
    )
}
