import React from "react";
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
          <a href="/">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="/updates">
            <BsMenuButtonWideFill className="icon" /> Updates
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/tanks">
            <BsFillArchiveFill className="icon" /> Products
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="/users">
            <BsPeopleFill className="icon" /> Users
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/orders">
            <BsListCheck className="icon" /> Orders
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="/comments">
            <BsChatFill className="icon" /> Comments
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
