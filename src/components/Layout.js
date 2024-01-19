import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Location from "./Location";
import Phone from "./Phone";
import Mail from "./Orders";
import Info from "./Info";
import Logout from "./Logout";

function Layout() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/mail" element={<Mail />} />
        <Route path="/info" element={<Info />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}
export default Layout;
