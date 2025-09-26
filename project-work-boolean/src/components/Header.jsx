import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "/logo3.webp";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-3">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex align-items-center">
            <img className="logo" src={logo} alt="Logo" />
            <h1 className="open-sans-uniquifier orange padding ms-4">BOOLTRIP</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
