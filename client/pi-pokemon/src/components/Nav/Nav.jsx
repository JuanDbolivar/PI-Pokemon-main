import "./Nav.css";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <hr />
      <SearchBar /> <br />
      <Link to={"/home"}>
        <span>Home</span>
      </Link>
      <br />
      <Link to={"/form"}>
        <span>Crear pokemon</span>
      </Link>
      <hr />
    </>
  );
}

export default Nav;
