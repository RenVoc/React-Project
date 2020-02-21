import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addCommentInfo, updateCommentInfo} from './redux/store';

export let reRenderTree = (state) => {
    ReactDOM.render(<App
        updateCommentInfo={updateCommentInfo}
        addCommentInfo={addCommentInfo}
        state={state}/>, document.getElementById('root'));
};

