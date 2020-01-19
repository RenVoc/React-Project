import React from "react";
import logo from './../logo.svg';

function Header() {
    return (
        <header className="header">
            <div className="centerWrapper">
                <div className="logo"><img src={logo} alt=""/></div>
                <nav className="header-menu">
                    <li>Raz</li>
                    <li>Dva</li>
                    <li>Tri</li>
                </nav>
            </div>
        </header>
    );
}

export default Header;