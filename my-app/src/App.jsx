import React from 'react';
import './styles/App.module.scss';
import Header from './templates/Header';
import Content from "./templates/Content";
import Menu from "./templates/Menu";
import Footer from "./templates/Footer";
import Modal from "./templates/Modal";
import mainStyles from './styles/App.module.scss';

function App() {
  return (
    <div className="root-Wrapper flex-container flex-container_column">
        <Header />
        <Content />
        <Footer />
    </div>
  );
}

export default App;
