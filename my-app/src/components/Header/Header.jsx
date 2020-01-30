import React from "react";

import Menu from "./components/Menu";
import logo from '../images/logo.svg';

function Header(props) {
    return (
        <header className="main-header">
            <div className="center-wrap">
                <div className="logo">
                    <a href="/">
                        Acid Tears <br/>
                        Production
                    </a>
                </div>
                <Menu />
            </div>
        </header>
    );
}

export default Header;