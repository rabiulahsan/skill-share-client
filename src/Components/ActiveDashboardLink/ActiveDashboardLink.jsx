import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const ActiveDashboardLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "active-dashboard-navlink" : "")}
    >
      {children}
    </NavLink>
  );
};

export default ActiveDashboardLink;
