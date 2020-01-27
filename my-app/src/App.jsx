import React from 'react';
import './styles/App.scss';
import Header from './templates/Header';
import Content from "./templates/Content";
import Menu from "./templates/Menu";
import Footer from "./templates/Footer";
import Modal from "./templates/Modal";

function App() {
  return (
    <div className="root-Wrapper flex-container flex-container_column">
        <Header phone="786.923.0532"/>
        <Content />
        <Footer />
    </div>
  );
}

export default App;
