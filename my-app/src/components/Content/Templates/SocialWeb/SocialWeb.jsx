import React from "react";

function SocialWeb(props) {
    let Title = props.title;
    return (
        <div>
            <h1>{Title}</h1>
            <p>
                SocialWeb Info
            </p>
        </div>
    );
}

export default SocialWeb;