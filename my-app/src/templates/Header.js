import React from "react";
import logo from './../logo.svg';
import header from '../styles/header.module.scss';

function Header() {
    return (
        <header className={header.header}>
            <div className={header.centerWrapper}>
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