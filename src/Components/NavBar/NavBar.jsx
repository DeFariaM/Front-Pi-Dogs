import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink, useLocation } from "react-router-dom";
import style from "./NavBar.module.css";
const { wrapper, btn, link, logo, name } = style;
import origami from "../../assets/dog-origami.svg";

const NavBar = ({ setCurrentPage }) => {
  const { pathname } = useLocation();
  return (
    <div className={wrapper}>
      <img src={origami} alt="" className={logo} />
      <span className={name}>DOGKAHOLIC</span>
      {pathname === "/home" ? (
        <SearchBar setCurrentPage={setCurrentPage} />
      ) : null}
      {pathname === "/home" ? (
        <NavLink to="/create" className={link}>
          <button className={btn}>Create your own dog</button>
        </NavLink>
      ) : null}
      {pathname !== "/home" ? (
        <NavLink to="/home" className={link}>
          <button className={btn}>Home</button>
        </NavLink>
      ) : null}
    </div>
  );
};

export default NavBar;
