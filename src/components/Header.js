import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BsPersonCircle,
  BsSearch,
  BsJustify,
  BsBoxArrowRight,
} from "react-icons/bs";
import { auth } from "../firebase";

function Header({ OpenSidebar }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("User signed out successfully.");
      navigate("/login");
    } catch (error) {
      console.log("Error signing out:", error);
    }
  };

  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
      </div>
      <div className="header-right">
        <div className="dropdown">
          <BsPersonCircle
            className="icon larger-icon clickable"
            onClick={handleDropdownToggle}
          />
          {isDropdownOpen && (
            <div className="dropdown-content">
              <div className="dropdown-item" onClick={handleLogout}>
                <BsBoxArrowRight className="logout-icon clickable" /> Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
