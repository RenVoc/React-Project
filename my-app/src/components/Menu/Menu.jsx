import React from "react";
import MenuWidth from '../Header/header.module.scss';
import MenuStyle from './menu.module.scss';
import {NavLink} from 'react-router-dom';

function MenuItem(props) {
    let path = "/" + props.menuLink;
    return(
        <NavLink to={path}>{props.nameMenu}</NavLink>
    )
}

function Menu(props) {
    return (
        <nav className={`${MenuWidth.menu} flex-container flex-container_center`}>
            <MenuItem nameMenu="Мастеринг и Сведение" menuLink="mastering"/>
            <MenuItem nameMenu="Дистрибьютинг" menuLink="distro"/>
            <span>
                Дизайн
                <nav className={MenuStyle.dropDown}>
                    <MenuItem nameMenu="Оформление соц сетей" menuLink="socialweb"/>
                    <MenuItem nameMenu="Фирменный дизайн группы" menuLink="design"/>
                </nav>
            </span>
            <span>
                Видео
                <nav className={MenuStyle.dropDown}>
                    <MenuItem nameMenu="Lyrics-видео и концертные задники" menuLink="lyrics"/>
                    <MenuItem nameMenu="Съемка клипов" menuLink="clips"/>
                    <MenuItem nameMenu="Монтаж" menuLink="videodev"/>
                </nav>
            </span>
            <span>
                Записи
                <nav className={MenuStyle.dropDown}>
                    <MenuItem nameMenu="Сессионная запись гитар и вокала" menuLink="recording"/>
                    <MenuItem nameMenu="Драм-треки, биты и тексты" menuLink="beats"/>
                </nav>
            </span>
            <MenuItem nameMenu="Концерты и релизы" menuLink="liverelease"/>
        </nav>
    );
}

export default Menu;