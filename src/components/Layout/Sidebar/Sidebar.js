import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { faHome, faCalendar, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.scss";

const navItems = [
  {
    id: 1,
    to: "/",
    icon: faHome,
    linkText: "Dashboard",
  },
  {
    id: 2,
    to: "/charts",
    icon: faCalendar,
    linkText: "Charts",
  },
  {
    id: 3,
    to: "/history",
    icon: faUser,
    linkText: "History",
  },
  {
    id: 3,
    to: "/users",
    icon: faUserGroup,
    linkText: "Users",
  },
];
const NavItem = ({ to, icon, linkLabel }) => {
  return (
    <>
      <NavLink to={to}className={({ isActive }) =>
              isActive ? 'active' : ''
            } >
        <li className="sidebar-list-item">
          <FontAwesomeIcon icon={icon} className="link-icon" />
          <span className="link-text">{linkLabel}</span>
        </li>
      </NavLink>
    </>
  );
};

const NavItems = ({ menuItems }) => {
  return (
    <>
      <ul>
      {menuItems.map((item) => (
        <NavItem
          key={item.id}
          to={item.to}
          icon={item.icon}
          linkLabel={item.linkText}
        />
      ))}
      </ul>
    </>
  );
};

const Sidebar = (props) => {
  return (
    <Fragment>
      <div className="sidebar">
        <div className="brand">
          <img
            src={require("../../../assets/trns-logo.png")}
            alt="logo"
            className="logo"
          />
          <p className="brand-name">Gavi</p>
        </div>
        <div className="menu-items">
          <NavItems menuItems={navItems} />
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
