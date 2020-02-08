import React from 'react';
import * as serviceWorker from './serviceWorker';
import store from "./redux/state";
import ReactDOM from 'react-dom';
import App from './App';
import {addCommentInfo, updateCommentInfo, subscribe} from './redux/state';

let reRenderTree = (state) => {
    ReactDOM.render(<App
        dispatch={store.dispatch.bind(store)}
        state={state}/>, document.getElementById('root'));
};

reRenderTree(store.getState());

store.subscribe(reRenderTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
