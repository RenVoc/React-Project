import  React from "react";
import BeatsContainer from './Templates/Beats/BeatsContainer';
import ClipsContainer from './Templates/Clips/ClipsContainer';
import DistibutingContainer from './Templates/Distributing/DistibutingContainer';
import GroupDesignContainer from './Templates/GroupDesign/GroupDesignContainer';
import GuitarVocRecordingContainer from './Templates/GuitarVocRecording/GuitarVocRecordingContainer';
import LiveReleaseContainer from './Templates/LiveRelease/LiveReleaseContainer';
import LyricsContainer from './Templates/Lyrics/LyricsContainer';
import MasteringContainer from './Templates/Mastering/MasteringContainer';
import SocialWebContainer from './Templates/SocialWeb/SocialWebContainer';
import VideoDevContainer from './Templates/VideoDev/VideoDevContainer';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom'
import MainPageContainer from "./Templates/MainPage/MainPageContainer";

function Content(props) {
    return (
        <main>
            <section className="content">
                <div className="centerWrapper">
                    <Route exact path="/" render={ () => <MainPageContainer/>}/>

                    <Route path="/beats" render={ () => <BeatsContainer title={props.TitlePage}/>}/>
                    <Route path="/clips" render={ () => <ClipsContainer title={props.TitlePage}/>}/>
                    <Route path="/distro" render={ () => <DistibutingContainer title={props.TitlePage}/>}/>
                    <Route path="/design" render={ () => <GroupDesignContainer title={props.TitlePage}/>}/>
                    <Route path="/recording" render={ () => <GuitarVocRecordingContainer title={props.TitlePage}/>}/>
                    <Route path="/liverelease" render={ () => <LiveReleaseContainer title={props.TitlePage}/>}/>
                    <Route path="/lyrics" render={ () => <LyricsContainer title={props.TitlePage}/>}/>
                    <Route path="/mastering" render={ () => <MasteringContainer title={props.TitlePage}/>}/>
                    <Route path="/socialweb" render={ () => <SocialWebContainer title={props.TitlePage}/>}/>
                    <Route path="/videodev" render={ () => <VideoDevContainer title={props.TitlePage}/>}/>
                </div>
            </section>
        </main>
    );
}

export default Content;