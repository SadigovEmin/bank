
import Dashboard from "./pages/Dashboard";
import CreditCard from "./pages/CreditCard";
import History from "./pages/History";
import Security from "./pages/Security";
import Settings from "./pages/Settings";
import Transfer from "./pages/Transfer";
import {Routes, Route} from "react-router-dom";
function App() {

  return (
   
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/creditcard" element={<CreditCard/>}/>
      <Route path="/history" element={<History/>}/>
      <Route path="/security" element={<Security/>}/>
      <Route path="/settings" element={<Settings/>}/>
      <Route path="/transfer" element={<Transfer/>}/>
    </Routes>
 

  )
}

export default App
