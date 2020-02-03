let reRenderTree = () => {

}


let state = {
    MenuItemInformation: [
        {nameMenu: "Мастеринг и Сведение", menuLink: "/mastering"},
        {nameMenu: "Дистрибьютинг", menuLink: "/distro"},
        {nameMenu: "Концерты и релизы", menuLink: "/liverelease"}
    ],
    MenuItemInformationRecording: [
        {nameMenu: "Сессионная запись гитар и вокала", menuLink: "/recording"},
        {nameMenu: "Драм-треки, биты и тексты", menuLink: "/beats"}
    ],
    MenuItemInformationVideo: [
        {nameMenu: "Lyrics-видео и концертные задники", menuLink: "/lyrics"},
        {nameMenu: "Съемка клипов", menuLink: "/clips"},
        {nameMenu: "Монтаж", menuLink: "/videodev"}
    ],
    MenuItemInformationDesign: [
        {nameMenu: "Оформление соц сетей", menuLink: "/socialweb"},
        {nameMenu: "Фирменный дизайн группы", menuLink: "/design"}
    ],
    TitlePages: [
        {title: 'Mastering', path: '/mastering'},
        {title: 'Distributing', path: '/distro'},
        {title: 'SocialWeb', path: '/socialweb'},
        {title: 'Group of Design', path: '/design'},
        {title: 'Lyrics', path: '/lyrics'},
        {title: 'Clip making', path: '/clips'},
        {title: 'Video Develop', path: '/videodev'},
        {title: 'Guitar/Vocal Recording', path: '/recording'},
        {title: 'Lives and Release', path: '/liverelease'},
        {title: 'Beats and Drum-tracks', path: '/beats'},
        {title: 'Main Page Title', path: '/'},
    ],
    Comments: [
        {name: 'Имя - дата', text: 'Комментарий'},
        {name: 'Имя - дата 2', text: 'Комментарий 2'},
        {name: 'Имя - дата 3', text: 'Комментарий 3'},
        {name: 'Имя - дата 3', text: 'Комментарий 4'}
    ],
    newCommentName: 'Your name',
    newCommentText: 'Your message'
};

window.state = state;

export const addCommentInfo = (commentText, commentName) => {
    let newComment = {
        name: commentName,
        text: commentText
    };

    state.Comments.push(newComment);
    reRenderTree(state);
};

export const updateCommentInfo = (newText, newName) => {
    state.newCommentText = newText;
    state.newCommentName = newName;
    reRenderTree(state);
};

export const subscribe = (observer) =>{
    reRenderTree = observer;
};

export default state;