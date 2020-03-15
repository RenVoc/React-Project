import React from "react";

function Lyrics(props) {
    let Title = props.title;
    return (
        <div>
            <h1>{Title}</h1>
            <p>
                Lyrics Info
            </p>
        </div>
    );
}

export default Lyrics;