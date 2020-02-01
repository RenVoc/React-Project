import React from "react";

function Clips(props) {
    let Title = props.title;
    return (
        <div>
            <h1>{Title}</h1>
            <p>
                Clips Info
            </p>
        </div>
    );
}

export default Clips;