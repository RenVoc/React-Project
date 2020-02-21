// import CommentReducer from "./CommentMainPageReducer";
//
// let store = {
//     _state: {
//         MenuItemInformation: [
//             {nameMenu: "Мастеринг и Сведение", menuLink: "/mastering"},
//             {nameMenu: "Дистрибьютинг", menuLink: "/distro"},
//             {nameMenu: "Концерты и релизы", menuLink: "/liverelease"}
//         ],
//         MenuItemInformationRecording: [
//             {nameMenu: "Сессионная запись гитар и вокала", menuLink: "/recording"},
//             {nameMenu: "Драм-треки, биты и тексты", menuLink: "/beats"}
//         ],
//         MenuItemInformationVideo: [
//             {nameMenu: "Lyrics-видео и концертные задники", menuLink: "/lyrics"},
//             {nameMenu: "Съемка клипов", menuLink: "/clips"},
//             {nameMenu: "Монтаж", menuLink: "/videodev"}
//         ],
//         MenuItemInformationDesign: [
//             {nameMenu: "Оформление соц сетей", menuLink: "/socialweb"},
//             {nameMenu: "Фирменный дизайн группы", menuLink: "/design"}
//         ],
//         TitlePages: [
//             {title: 'Mastering', path: '/mastering'},
//             {title: 'Distributing', path: '/distro'},
//             {title: 'SocialWeb', path: '/socialweb'},
//             {title: 'Group of Design', path: '/design'},
//             {title: 'Lyrics', path: '/lyrics'},
//             {title: 'Clip making', path: '/clips'},
//             {title: 'Video Develop', path: '/videodev'},
//             {title: 'Guitar/Vocal Recording', path: '/recording'},
//             {title: 'Lives and Release', path: '/liverelease'},
//             {title: 'Beats and Drum-tracks', path: '/beats'},
//             {title: 'Main Page Title', path: '/'},
//         ],
//         Comments: [
//             {name: 'Имя - дата', text: 'Комментарий'},
//             {name: 'Имя - дата 2', text: 'Комментарий 2'},
//             {name: 'Имя - дата 3', text: 'Комментарий 3'},
//             {name: 'Имя - дата 3', text: 'Комментарий 4'}
//         ],
//         newCommentName: 'Your name',
//         newCommentText: 'Your message'
//     },
//     _callSubscriber() {
//
//     },
//
//     getState(){
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action){
//         this._state = CommentReducer(this._state, action);
//         this._callSubscriber(this._state);
//     },
// };
//
//
// window.store = store;
//
// export default store;