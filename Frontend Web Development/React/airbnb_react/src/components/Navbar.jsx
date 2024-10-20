import React from "react";
import airbnb_logo from "../assets/airbnb.png"


const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/">
                <img src={airbnb_logo} alt="airbnb-logo" className="nav-logo"/>
                </a>
                <div></div>
            </div>
        </nav>
    )
}


export default Navbar;