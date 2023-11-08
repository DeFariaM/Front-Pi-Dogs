import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = ({ setCurrentPage }) => {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname === "/home" ? (
        <SearchBar setCurrentPage={setCurrentPage} />
      ) : null}
      {pathname !== "/create" ? (
        <NavLink to="/create">
          <button>Create your own dog</button>
        </NavLink>
      ) : null}
      {pathname !== "/home" ? (
        <NavLink to="/home">
          <button>Home</button>
        </NavLink>
      ) : null}
    </div>
  );
};

export default NavBar;
