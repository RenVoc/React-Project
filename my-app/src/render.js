import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addCommentInfo} from './redux/state';

export let reRenderTree = (state) => {
    ReactDOM.render(<App addCommentInfo={addCommentInfo} state={state}/>, document.getElementById('root'));
};

