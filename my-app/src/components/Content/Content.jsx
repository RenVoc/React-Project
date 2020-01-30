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

import {BrowserRouter, Route} from 'react-router-dom';

function Content() {
    return (
            <main>
                <section className="content">
                    <div className="centerWrapper">
                        <h1>Header</h1>
                        <BrowserRouter>
                            <Route component={Beats}/>
                            <Route component={Clips}/>
                            <Route component={Distro}/>
                            <Route component={GroupDesign}/>
                            <Route component={GuitarVocRecording}/>
                            <Route component={LiveRelease}/>
                            <Route component={Lyrics}/>
                            <Route component={Mastering}/>
                            <Route component={SocialWeb}/>
                            <Route component={VideoDev}/>
                        </BrowserRouter>
                    </div>
                </section>
            </main>
    );
}

export default Content;