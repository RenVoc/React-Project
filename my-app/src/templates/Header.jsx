import React from "react";
import logo from '../images/logo.svg';

function Header() {
    return (
        <header className="main-header">
            <div className="center-wrap">
                <div className="header-top">
                    <div className="logo">
                        <a href="/aviation"><img src={logo} alt="" /></a>
                    </div>
                    <div className="phone-number"><a href="tel:+17869230532">786.923.0532</a></div>
                </div>
                <div className="header-middle wow fadeInLeft">
                    <h1>Low Credit Card Processing Fees With Value-Added Solutions</h1>
                    <p>Merchant Services For The Aviation Industry</p>
                </div>
                <div className="header-bottom">
                    <div className="form header-bottom__form">
                        <h3 className="form__h3">Do you want to save money and grow your business?</h3>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;