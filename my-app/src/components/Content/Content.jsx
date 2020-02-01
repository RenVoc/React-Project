import React from "react";
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
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom'

function Content(props) {
    return (
        <main>
            <section className="content">
                <div className="centerWrapper">
                    <Route path="/beats" render={ () => <Beats title={props.state[9].title}/>}/>
                    <Route path="/clips" render={ () => <Clips title={props.state[5].title}/>}/>
                    <Route path="/distro" render={ () => <Distro title={props.state[1].title}/>}/>
                    <Route path="/design" render={ () => <GroupDesign title={props.state[3].title}/>}/>
                    <Route path="/recording" render={ () => <GuitarVocRecording title={props.state[7].title}/>}/>
                    <Route path="/liverelease" render={ () => <LiveRelease title={props.state[8].title}/>}/>
                    <Route path="/lyrics" render={ () => <Lyrics title={props.state[4].title}/>}/>
                    <Route path="/mastering" render={ () => <Mastering title={props.state[0].title}/>}/>
                    <Route path="/socialweb" render={ () => <SocialWeb title={props.state[2].title}/>}/>
                    <Route path="/videodev" render={ () => <VideoDev title={props.state[6].title}/>}/>
                </div>
            </section>
        </main>
    );
}

export default Content;