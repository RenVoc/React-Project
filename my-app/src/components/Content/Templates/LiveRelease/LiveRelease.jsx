import React from "react";

function LiveRelease(props) {
    let Title = props.title;
    return (
        <div>
            <h1>{Title}</h1>
            <p>
                Live and Release Info
            </p>
        </div>
    );
}

export default LiveRelease;