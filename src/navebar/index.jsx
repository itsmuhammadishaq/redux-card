import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <ul style={{ display: "flex", gap: "23px", listStyle: "none" }}>
        <li style={{ color: "white" }}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
        </li>
        <li style={{ color: "white" }}>
          <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
