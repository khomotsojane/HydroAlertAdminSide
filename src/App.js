import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Users from "./components/Users";
import Updates from "./components/Updates";
import Tanks from "./components/Tanks";
import Orders from "./components/Orders";
import Comments from "./components/Comments";
import Form from "./components/Form";
import AddTanks from "./components/AddTanks";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <div className="app">
          <Sidebar />
          <main className="main-content">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/updates" element={<Updates />} />
              <Route path="/addtanks" element={<AddTanks />} />
              <Route path="/tanks" element={<Tanks />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/comments" element={<Comments />} />
              <Route path="/form" element={<Form />} />
              <Route path="/login" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
