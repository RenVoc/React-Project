import React from 'react';
import './styles/App.scss';
import Header from './components/Header/Header';
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="root-Wrapper flex-container flex-container_column">
        <Header/>
        <Content />
        <Footer />
    </div>
  );
}

export default App;
