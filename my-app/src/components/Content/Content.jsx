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

import {BrowserRouter as Router, Route} from 'react-router-dom'
function Content(props) {
    return (
        <main>
            <section className="content">
                <div className="centerWrapper">
                    <h1>Header Page</h1>
                    <Route path="/beats" render={ () => <Beats />}/>
                    <Route path="/clips" render={ () => <Clips />}/>
                    <Route path="/distro" render={ () => <Distro />}/>
                    <Route path="/design" render={ () => <GroupDesign />}/>
                    <Route path="/recording" render={ () => <GuitarVocRecording />}/>
                    <Route path="/liverelease" render={ () => <LiveRelease />}/>
                    <Route path="/lyrics" render={ () => <Lyrics />}/>
                    <Route path="/mastering" render={ () => <Mastering />}/>
                    <Route path="/socialweb" render={ () => <SocialWeb />}/>
                    <Route path="/videodev" render={ () => <VideoDev />}/>
                </div>
            </section>
        </main>
    );
}

export default Content;