import React from "react";

function VideoDev(props) {
    let Title = props.title;
    return (
        <div>
            <h1>{Title}</h1>
            <p>
                Video Info
            </p>
        </div>
    );
}

export default VideoDev;