import React from 'react';
import './styles/App.scss';
import Header from './components/Header/Header';
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

import {BrowserRouter as Router, Route} from 'react-router-dom'

function App(props) {
  return (
    <div className="root-Wrapper flex-container flex-container_column">
        <Router>
            <Header state={props.state}/>
            <Content
                dispatch={props.dispatch}
                state={props.state}/>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
