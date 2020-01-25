import React from "react";

function Footer() {
    return (
        <footer className="footer-main">
            <div className="center-wrap">
                <div className="wrapper">
                    <div className="socials">
                        <ul>
                            <li className="fb">
                                <a href="https://www.facebook.com/unifiedpayments" target="_blank"></a>
                            </li>
                            <li className="tw">
                                <a href="https://twitter.com/unifiedpayments" target="_blank"></a>
                            </li>
                            <li className="in">
                                <a href="http://www.linkedin.com/company/unified-payments" target="_blank"></a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-container flex-container_row">
                        <div className="contacts">
                            <div className="address"><a name="address">Unified Payments 3363 NE 163rd Street Suite 705,
                                North Miami Beach, FL 33160</a></div>
                            <div className="phone">786.923.0532</div>
                            <div className="mail"><a
                                href="mailto:aviation@unifiedpayments.com">aviation@unifiedpayments.com</a></div>
                        </div>
                        <div className="copyright">
                            <p>© 2019 Unified Payments All Rights Reserved</p>
                            <div className="bank-information">
                                <p>Unified Payments is a registered ISO of Wells Fargo Bank, N.A., Concord, CA</p>
                                <p>Unified Payments is a registered ISO of Citizens Bank, N.A., Providence, RI</p>
                                <p>Unified Payments is a registered ISO of Esquire Bank N.A., Jericho, NY</p>
                            </div>
                            <div className="footer-logos-wrapper">
                                <div className="nete">
                                    <span className="nete-subsidiary">subsidiary of</span><br/>
                                    <a href="http://www.netelement.com/" className="nete-logo-img">
                                        <img src="https://unifiedpayments.com/wp-content/themes/unifiedpayments/images/nete-logo.png" />
                                    </a>
                                    <a href="http://www.netelement.com/" className="nete-logo-img-print">
                                        <img src="https://unifiedpayments.com/wp-content/themes/unifiedpayments/images/nete-logo-black.png" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="menu">
                            <ul>
                                <li><a href="https://unifiedpayments.com/privacy-policy/" className="pages">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;