import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function AdminDashboard() {
  return (
    <div>
      <Header />
      <div className="app">
        <Sidebar />
        <main className="main-content">
          {/* Your main content goes here */}
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;