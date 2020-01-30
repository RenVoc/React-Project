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

function Content() {
    return (
        <main>
            <section className="content">
                <div className="centerWrapper">
                    <h1>Header</h1>
                    <Beats/>
                    <Clips/>
                    <Distro/>
                    <GroupDesign/>
                    <GuitarVocRecording/>
                    <LiveRelease/>
                    <Lyrics/>
                    <Mastering/>
                    <SocialWeb/>
                    <VideoDev/>
                </div>
            </section>
        </main>
    );
}

export default Content;