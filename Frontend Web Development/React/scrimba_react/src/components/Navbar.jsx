import React from "react";
import logo from "../assets/react.svg";

export default function Navbar(){
    return (
        <nav>
        <img src={logo} alt="my-logo" />
        <h3 className="nav-logo-text">ReactFacts</h3>
        <h4 className="nav-title">React Course Project - 1</h4>
      </nav>
    )
}