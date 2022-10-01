import React from "react";
import "./Style.css";
import hflogo from "../image/hflogo.png";
import Home from "./Home";
function Navbar() {
  return (
    <>
      <div className="navHeader">
        <h1 className="logo-image">
          <img
            src={hflogo}
            alt="logo"
            width="50"
            height="50"
            className="img-fluid"
          />
        </h1>
        <nav className="navbar">
          <a href="#" className="navname">
            <i className="fas fa-video navicon" ></i>
            <span className="navtext">LIVE</span>
          </a>
          <a href="#" className="navname">
            <i className="fa fa-id-card fa-lg navicon" aria-hidden="true"></i>
            <span className="navtext">MEMBERSHIP</span>
          </a>
          <a href="#" className="navname">
            <i className="fas fa-running navicon" aria-hidden="true"></i>
            <span className="navtext">PLANS</span>
          </a>
          <a href="#" className="navname">
            <i className="fas fa-th-large navicon" aria-hidden="true"></i>
            <span className="navtext">MORE</span>
          </a>
        </nav>
        <button className="login">
          <i className="fas fa-user-alt"></i>
          <span className="navbtntext">Login</span>
        </button>
      </div>
      {/* <Home/> */}
    </>
  );
}

export default Navbar;
