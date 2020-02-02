import React from "react";

function MainPage(props) {
    let Title = props.title;
    return (
        <div>
            <h1>{Title}</h1>
            <p>
                MainPage
            </p>
        </div>
    );
}

export default MainPage;