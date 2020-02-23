import React from 'react';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import App from './App';

let reRenderTree = (state) => {
    ReactDOM.render(<App
        store={store}
        dispatch={store.dispatch.bind(store)}
       />, document.getElementById('root'));
};

reRenderTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    reRenderTree(state);
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
