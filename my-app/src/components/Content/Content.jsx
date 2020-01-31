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
                    <Route path="/beats" component={Beats}/>
                    <Route path="/clips" component={Clips}/>
                    <Route path="/distro" component={Distro}/>
                    <Route path="/design" component={GroupDesign}/>
                    <Route path="/recording" component={GuitarVocRecording}/>
                    <Route path="/liverelease" component={LiveRelease}/>
                    <Route path="/lyrics" component={Lyrics}/>
                    <Route path="/mastering" component={Mastering}/>
                    <Route path="/socialweb" component={SocialWeb}/>
                    <Route path="/videodev" component={VideoDev}/>
                </div>
            </section>
        </main>
    );
}

export default Content;