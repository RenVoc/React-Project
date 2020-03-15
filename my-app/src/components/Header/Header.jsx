import React, {Component} from 'react';
import Style from "./header.module.scss";
import MenuContainer from './../Menu/MenuContainer';
import {NavLink} from 'react-router-dom';

function Header(props) {

    return (
        <header className="main-header">
            <div className="centerWrapper flex-container flex-container_row">
                <div className={`${Style.logo} flex-container flex-container_center`}>
                    <NavLink to="/">
                        Acid Tears
                        <div>Production</div>
                    </NavLink>
                </div>
                <MenuContainer />
            </div>
        </header>
    );
}

export default Header;