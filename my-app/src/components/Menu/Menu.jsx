import React from "react";

function Menu() {
    return (
        <nav className="content-menu">
            <a href="#">Мастеринг и Сведение</a>
            <a href="#">Дистрибьютинг</a>
            <span>
                Дизайн
                <nav className="drop-down">
                    <a href="#">Оформление соц сетей</a>
                    <a href="#">Фирменный дизайн группы</a>
                </nav>
            </span>
            <span>
                Видео
                <nav className="drop-down">
                    <a href="#">Lyrics-видео и концертные задники</a>
                    <a href="#">Съемка клипов</a>
                    <a href="#">Монтаж</a>
                </nav>
            </span>
            <span>
                Запись
                <nav className="drop-down">
                    <a href="#">Сессионная запись гитар и вокала</a>
                    <a href="#">Драм-трекли, биты и тексты</a>
                </nav>
            </span>
            <a href="#">Концерты и релизы</a>
        </nav>
    );
}

export default Menu;