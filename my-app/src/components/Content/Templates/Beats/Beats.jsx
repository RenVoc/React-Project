import React from "react";

function Beats(props) {
    let Title = props.title;
    return (
        <div>
            <h1>{Title}</h1>
            <p>
                Beats Info
            </p>
        </div>
    );
}

export default Beats;