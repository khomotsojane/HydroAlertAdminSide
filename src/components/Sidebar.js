import React from "react";
import { Link } from "react-router-dom";
import {
  BsAlarm,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsChatFill,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsAlarm className="icon_header" /> Hydro Alert
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/">
            {" "}
            {/* Using Link for navigation */}
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/updates">
            <BsMenuButtonWideFill className="icon" /> Updates
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/tanks">
            <BsFillArchiveFill className="icon" /> Products
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/users">
            <BsPeopleFill className="icon" /> Users
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/orders">
            <BsListCheck className="icon" /> Orders
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/comments">
            <BsChatFill className="icon" /> Comments
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
