import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav__container">
      <div className="nav__containerWrapper">
        <div className="nav__containerWrapperLogo">BDCL</div>
        <div className="nav__containerWrapperContent">
          <div className="nav__containerWrapperLink">
            <Link to="/">Home</Link>
          </div>
          <div className="nav__containerWrapperLink">
            <Link to="/about"> About</Link>
          </div>
          <div className="nav__containerWrapperLink">
            <Link to="/contact"> Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
