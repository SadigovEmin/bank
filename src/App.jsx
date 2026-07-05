import {Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreditCard from "./pages/CreditCard";
import History from "./pages/History";
import Security from "./pages/Security";
import Settings from "./pages/Settings";
import Transfer from "./pages/Transfer";
import Login from "./pages/Login";
import Register from"./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";


function App() {

  return (
   
    <Routes>

      <Route element={<AuthLayout/>}>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
      </Route>

      <Route element={<DashboardLayout />}>
        <Route path="/"  element={<Dashboard/>}/>
        <Route path="/creditcard" element={<CreditCard/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/security" element={<Security/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/transfer" element={<Transfer/>}/>
      </Route>
    </Routes>
 

  )
}

export default App
