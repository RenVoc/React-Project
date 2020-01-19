import React from 'react';
import './App.css';
import Header from './templates/Header';
import Content from "./templates/Content";
import Menu from "./templates/Menu";
import Footer from "./templates/Footer";

function App() {
  return (
    <div className="main-container">
        <Header />
        <section className="centerWrapper">
            <section className="content">
                <Menu />
                <Content />
            </section>
        </section>
        <footer className="footer">
            <Footer />
        </footer>
    </div>
  );
}

export default App;
