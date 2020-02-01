import React from "react";
import MenuWidth from '../Header/header.module.scss';
import {NavLink} from 'react-router-dom';

function Menu(props) {
    let MenuItem = props.state.MenuItemInformation.map(menu => <NavLink to={menu.menuLink}>{menu.nameMenu}</NavLink>);
    let MenuItemDesign = props.state.MenuItemInformationDesign.map(menu2 => <NavLink to={menu2.menuLink}>{menu2.nameMenu}</NavLink>);
    let MenuItemVideo = props.state.MenuItemInformationVideo.map(menu3 => <NavLink to={menu3.menuLink}>{menu3.nameMenu}</NavLink>);
    let MenuItemRecord = props.state.MenuItemInformationRecording.map(menu4 => <NavLink to={menu4.menuLink}>{menu4.nameMenu}</NavLink>);
    return (
        <nav className={`${MenuWidth.menu} flex-container flex-container_center`}>
            { MenuItem }
            <span>
                Дизайн
                <nav className="dropDown">
                    {MenuItemDesign}
                </nav>
            </span>
            <span>
                Видео
                <nav className="dropDown">
                    {MenuItemVideo}
                </nav>
            </span>
            <span>
                Запись
                <nav className="dropDown">
                    {MenuItemRecord}
                </nav>
            </span>
        </nav>
    );
}

export default Menu;