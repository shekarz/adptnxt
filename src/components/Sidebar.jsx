import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdArrowBackIos } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const menuItems = [
 { name: "Dashboard", id: "" },
 { name: "Inventory", id: "inventory" },
 { name: "Order", id: "order" },
 { name: "Returns", id: "returns" },
 { name: "Customers", id: "customers" },
 { name: "Shipping", id: "shipping" },
 { name: "Channel", id: "channel" },
 { name: "Integrations", id: "integrations" },
 { name: "Calculators", id: "calculators" },
 { name: "Reports", id: "reports" },
 { name: "Account", id: "account" },
];

const Sidebar = () => {
 const [activeMenu, setActiveMenu] = useState("");
 const [visible, setVisible] = useState(false);

 return (
  <>
   <div
    onClick={() => setVisible(true)}
    className="w-5 cursor-pointer md:hidden"
   >
    <AiOutlineMenu color="gray" size={24} />
   </div>
   {/* <div
    className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity lg:hidden ${
     isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
    onClick={toggleSidebar}
   ></div> */}
   <ul className="hidden md:flex flex-col gap-2">
    {menuItems.map((item) => (
     <Link
      key={item.id}
      className={`rounded-md px-2 py-2 ${
       activeMenu === item.id
        ? "bg-red-100 text-purple-500"
        : "text-gray-500 hover:bg-gray-200"
      }`}
      onClick={() => setActiveMenu(item.id)}
      to={`/${item.id}`}
     >
      <li>{item.name}</li>
     </Link>
    ))}
   </ul>
   {/* Sidebar menu for small screens */}
   <div
    className={`absolute top-0 bottom-0 left-0 overflow-hidden md:hidden bg-neutral-50 p-3 transition-all ${
     visible ? "w-96 bg-opacity-100 max-h-[75vh]" : "w-0 opacity-0"
    }`}
   >
    <div className="flex flex-col text-gray-600">
     <div
      onClick={() => setVisible(false)}
      className="cursor-pointer flex items-center mb-5"
     >
      <MdArrowBackIos />
      <p>Back</p>
     </div>
     {menuItems.map((item) => (
      <NavLink
       onClick={() => setVisible(false)}
       className="py-2 pl-6 border hover:bg-gray-200"
       to={`/${item.id}`}
       key={item.id}
      >
       {item.name}
      </NavLink>
     ))}
    </div>
   </div>
  </>
 );
};

export default Sidebar;
