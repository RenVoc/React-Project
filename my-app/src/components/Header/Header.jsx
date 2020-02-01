import React, {Component} from 'react';
import Style from "./header.module.scss";
import Menu from './../Menu/Menu';

function Header(props) {

    return (
        <header className="main-header">
            <div className="centerWrapper flex-container flex-container_row">
                <div className={`${Style.logo} flex-container flex-container_center`}>
                    <a href="/">
                        Acid Tears <br/>
                        Production
                    </a>
                </div>
                <Menu state={props.state}/>
            </div>
        </header>
    );
}

export default Header;