import  React from "react";
import Beats from './Templates/Beats';
import Clips from './Templates/Clips';
import Distro from './Templates/Distibuting';
import GroupDesign from './Templates/GroupDesign';
import GuitarVocRecording from './Templates/GuitarVocRecording';
import LiveRelease from './Templates/LiveRelease';
import Lyrics from './Templates/Lyrics';
import Mastering from './Templates/Mastering';
import SocialWeb from './Templates/SocialWeb';
import VideoDev from './Templates/VideoDev';
import MainPage from './Templates/MainPage/MainPage';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom'
import MainPageContainer from "./Templates/MainPage/MainPageContainer";

function Content(props) {
    return (
        <main>
            <section className="content">
                <div className="centerWrapper">
                    <Route exact path="/" render={ () => <MainPageContainer dispatch={props.dispatch} store={props.store}/>}/>

                    <Route path="/beats" render={ () => <Beats title={props.store.TitlePage.TitlePages[9].title}/>}/>
                    <Route path="/clips" render={ () => <Clips title={props.store.TitlePage.TitlePages[5].title}/>}/>
                    <Route path="/distro" render={ () => <Distro title={props.store.TitlePage.TitlePages[1].title}/>}/>
                    <Route path="/design" render={ () => <GroupDesign title={props.store.TitlePage.TitlePages[3].title}/>}/>
                    <Route path="/recording" render={ () => <GuitarVocRecording title={props.store.TitlePage.TitlePages[7].title}/>}/>
                    <Route path="/liverelease" render={ () => <LiveRelease title={props.store.TitlePage.TitlePages[8].title}/>}/>
                    <Route path="/lyrics" render={ () => <Lyrics title={props.store.TitlePage.TitlePages[4].title}/>}/>
                    <Route path="/mastering" render={ () => <Mastering title={props.store.TitlePage.TitlePages[0].title}/>}/>
                    <Route path="/socialweb" render={ () => <SocialWeb title={props.store.TitlePage.TitlePages[2].title}/>}/>
                    <Route path="/videodev" render={ () => <VideoDev title={props.store.TitlePage.TitlePages[6].title}/>}/>
                </div>
            </section>
        </main>
    );
}

export default Content;