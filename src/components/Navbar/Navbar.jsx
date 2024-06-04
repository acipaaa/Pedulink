import React from "react";
import { NavLink } from "react-router-dom";
import Logoo from "../../assets/pedulink.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <a href="#" className="logo">
        <img src={Logoo} alt="" srcset="" />
      </a>

      <ul>
        <li>
          <div className="search-container">
            <input
              type="text"
              placeholder="Pencarian"
              className="search-input"
            />
          </div>
        </li>
        <li>
          <a href="#">Beranda</a>
        </li>
        <li>
          <a href="#">Komunitas</a>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Galeri
          </NavLink>
        </li>
        <li>
          <a href="#">Donasi</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
