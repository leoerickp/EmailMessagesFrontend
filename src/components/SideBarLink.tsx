import { NavLink } from "react-router-dom";
import { ISideBarLinkProps } from "../interfaces/sidebarprops.interface";

export const SideBarLink = ({ link, label }: ISideBarLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
      to={link}
    >
      {label}
    </NavLink>
  );
};
