import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function AdminPanel() {
  return (
    <div>
      <Header />
      <div className="admin-container">
        <Sidebar />
        <div className="admin-content">
          {/* Add your admin panel content here */}
          <h1>Welcome to the Admin Panel</h1>
          {/* Add more components and content as needed */}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
