import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <div className="bg-base-300 shadow-lg py-5">
            <img src={logo} alt="Logo" className="w-72 h-20 mx-5" />
        </div>
    );
};

export default Navbar;
