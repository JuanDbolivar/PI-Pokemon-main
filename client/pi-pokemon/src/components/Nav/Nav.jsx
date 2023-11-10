import "./Nav.css";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [home, setHome] = useState(true);
  const [form, setForm] = useState(false);

  return (
    <div className="Nav">
      <SearchBar />
      <Link
        to={"/home"}
        className="linkH"
        onClick={() => {
          setHome(true);
          setForm(false);
        }}
      >
        <span className={home ? "lActive" : null}>Home</span>
      </Link>

      <Link
        to={"/form"}
        className="linkF"
        onClick={() => {
          setForm(true);
          setHome(false);
        }}
      >
        <span className={form ? "lActive" : null}>Create pokemon</span>
      </Link>

      <Link to={"/"} className="linkS">
        <span> EXIT</span>
      </Link>
    </div>
  );
}

export default Nav;
