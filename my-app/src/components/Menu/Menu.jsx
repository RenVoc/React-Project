import React from "react";
import MenuWidth from '../Header/header.module.scss';
import MenuStyle from './menu.module.scss';

function Menu() {
    return (
        <nav className={`${MenuWidth.menu} flex-container flex-container_center`}>
            <a href="#">Мастеринг и Сведение</a>
            <a href="#">Дистрибьютинг</a>
            <span>
                Дизайн
                <nav className={MenuStyle.dropDown}>
                    <a href="#">Оформление соц сетей</a>
                    <a href="#">Фирменный дизайн группы</a>
                </nav>
            </span>
            <span>
                Видео
                <nav className={MenuStyle.dropDown}>
                    <a href="#">Lyrics-видео и концертные задники</a>
                    <a href="#">Съемка клипов</a>
                    <a href="#">Монтаж</a>
                </nav>
            </span>
            <span>
                Запись
                <nav className={MenuStyle.dropDown}>
                    <a href="#">Сессионная запись гитар и вокала</a>
                    <a href="#">Драм-трекли, биты и тексты</a>
                </nav>
            </span>
            <a href="#">Концерты и релизы</a>
        </nav>
    );
}

export default Menu;