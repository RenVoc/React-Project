import React from "react";

function GuitarVocRecord(props) {
    let Title = props.title;
    return (
        <div>
            <h1>{Title}</h1>
            <p>
                Guitar/Vocal Recording Info
            </p>
        </div>
    );
}

export default GuitarVocRecord;