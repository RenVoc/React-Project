import React from "react";

function GroupDesign(props) {
    let Title = props.title;
    return (
        <div>
            <h1>{Title}</h1>
            <p>
                Group of Design Info
            </p>
        </div>
    );
}

export default GroupDesign;