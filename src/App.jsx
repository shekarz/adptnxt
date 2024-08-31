import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Orders from "./pages/Orders";
import Returns from "./pages/Returns";
import Customers from "./pages/Customers";
import Shipping from "./pages/Shipping";
import Channel from "./pages/Channel";
import Integrations from "./pages/Integrations";
import Calculators from "./pages/Calculators";
import Reports from "./pages/Reports";
import Account from "./pages/Account";
import Sidebar from "./components/Sidebar";

function App() {
 return (
  <Router>
   <div className="flex gap-10 p-5 ">
    <div className="w-[180px] mt-4">
     <Sidebar />
    </div>
    <div className="w-full">
     <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/order" element={<Orders />} />
      <Route path="/returns" element={<Returns />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/channel" element={<Channel />} />
      <Route path="/integrations" element={<Integrations />} />
      <Route path="/calculators" element={<Calculators />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/account" element={<Account />} />
     </Routes>
    </div>
   </div>
  </Router>
 );
}

export default App;
