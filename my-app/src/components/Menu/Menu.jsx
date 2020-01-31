import React from "react";
import MenuWidth from '../Header/header.module.scss';
import MenuStyle from './menu.module.scss';
import {NavLink} from 'react-router-dom';

function Menu() {
    return (
        <nav className={`${MenuWidth.menu} flex-container flex-container_center`}>
            <NavLink to="/mastering">Мастеринг и Сведение</NavLink>
            <NavLink to="/distro">Дистрибьютинг</NavLink>
            <span>
                Дизайн
                <nav className={MenuStyle.dropDown}>
                    <NavLink to="/socialweb">Оформление соц сетей</NavLink>
                    <NavLink to="/design">Фирменный дизайн группы</NavLink>
                </nav>
            </span>
            <span>
                Видео
                <nav className={MenuStyle.dropDown}>
                    <NavLink to="/lyrics">Lyrics-видео и концертные задники</NavLink>
                    <NavLink to="/clips">Съемка клипов</NavLink>
                    <NavLink to="/videodev">Монтаж</NavLink>
                </nav>
            </span>
            <span>
                Запись
                <nav className={MenuStyle.dropDown}>
                    <NavLink to="/recording">Сессионная запись гитар и вокала</NavLink>
                    <NavLink to="/beats">Драм-треки, биты и тексты</NavLink>
                </nav>
            </span>
            <NavLink to="/liverelease">Концерты и релизы</NavLink>
        </nav>
    );
}

export default Menu;