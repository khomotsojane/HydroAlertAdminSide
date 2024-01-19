import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/addtanks" element={<AddTanks />} />
            <Route path="/tanks" element={<Tanks />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
