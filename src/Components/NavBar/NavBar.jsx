import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink, useLocation } from "react-router-dom";
import style from "./NavBar.module.css";
const { wrapper, btn, link, logo, name, wrap_filters } = style;
import origami from "../../assets/dog-origami.svg";
import Order from "../Order/Order";
import Filter from "../Filter/Filter";

const NavBar = ({ setCurrentPage, setInputPage }) => {
  const { pathname } = useLocation();
  return (
    <div className={wrapper}>
      <NavLink to="/home">
        <div>
          <img src={origami} alt="" className={logo} />
          <span className={name}>DOGKAHOLIC</span>
        </div>
      </NavLink>

      {pathname === "/home" ? (
        <>
          <div className={wrap_filters}>
            <Order
              setCurrentPage={setCurrentPage}
              setInputPage={setInputPage}
            />
            <Filter
              setCurrentPage={setCurrentPage}
              setInputPage={setInputPage}
            />
          </div>
          <SearchBar setCurrentPage={setCurrentPage} />
        </>
      ) : null}
      {pathname === "/home" ? (
        <NavLink to="/create" className={link}>
          <button className={btn}>Create</button>
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
