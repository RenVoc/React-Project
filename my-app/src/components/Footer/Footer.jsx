import React from "react";
import FooterStyle from './footer.module.scss';

function Footer(props) {
    return (
        <footer className="footer-main">
            <div className="centerWrapper">
                <div className={`${FooterStyle.footer} tCenter`}>
                    Acid Tears Productions © All rights reserved {(new Date().getFullYear())}
                </div>
            </div>
        </footer>
    );
}

export default Footer;