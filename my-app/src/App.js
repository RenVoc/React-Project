import React from 'react';
import './styles/App.module.scss';
import Header from './templates/Header';
import Content from "./templates/Content";
import Menu from "./templates/Menu";
import Footer from "./templates/Footer";
import mainStyles from './styles/App.module.scss';

function App() {
  return (
    <div className={mainStyles.main_container}>
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
