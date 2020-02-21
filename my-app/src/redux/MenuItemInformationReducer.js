let initialState = {
    MenuItemInformation: [
        {nameMenu: "Мастеринг и Сведение", menuLink: "/mastering"},
        {nameMenu: "Дистрибьютинг", menuLink: "/distro"},
        {nameMenu: "Концерты и релизы", menuLink: "/liverelease"}
    ]
};

const MenuItemInformationReducer = (state = initialState) => {
    return state;
};


export default MenuItemInformationReducer;