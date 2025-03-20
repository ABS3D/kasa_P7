import React from "react";
import { NavLink } from "react-router-dom"; // Utilisation de NavLink au lieu de Link
import "./Navbar.scss";

const Navbar = () => {
    return (
        <header className="Header">
            <NavLink to="/">
                <img src="logo.webp" alt="LOGO écrit avec une maison" className="Header__logo" />
            </NavLink>
            <nav className="Header__nav">
                <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                    Accueil
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                    À propos
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;
