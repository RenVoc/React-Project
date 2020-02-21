import React from "react";
import MenuWidth from '../Header/header.module.scss';
import {NavLink} from 'react-router-dom';

function Menu(props) {
    let MenuItem = props.state.MenuInformation.MenuItemInformation.map(function(menu, i){
            return(
                <NavLink to={menu.menuLink} key={i} >{menu.nameMenu}</NavLink>
            )
        }
    );
    let MenuItemDesign = props.state.MenuDesign.MenuItemInformationDesign.map(function(menu2, i){
            return(
                <NavLink to={menu2.menuLink} key={i}>{menu2.nameMenu}</NavLink>
            )
        }
    );
    let MenuItemVideo = props.state.MenuVideo.MenuItemInformationVideo.map(function(menu3, i) {
            return(
                <NavLink to={menu3.menuLink} key={i}>{menu3.nameMenu}</NavLink>
            )
        }
    );
    let MenuItemRecord = props.state.MenuRecording.MenuItemInformationRecording.map(function(menu4, i){
            return(
                <NavLink to={menu4.menuLink} key={i}>{menu4.nameMenu}</NavLink>
            )
        }
    );
    return (
        <nav className={`${MenuWidth.menu} flex-container flex-container_center`}>
            {MenuItem}
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