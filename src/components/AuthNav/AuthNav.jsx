import clsx from "clsx";
import s from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const AuthNav = () => {
  return (
    <nav className={s.nav}>
      <NavLink className={buildLinkClass} to="/login">
        LogIn
      </NavLink>
      <NavLink className={buildLinkClass} to="/register">
        Register
      </NavLink>
    </nav>
  );
};

export default AuthNav;
