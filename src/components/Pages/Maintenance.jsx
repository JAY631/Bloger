import React from 'react'
import logoBlack from "../../images/logo/logo-black.png";
import logoWhite2 from "../../images/logo/logo-white2.png";
import maintenence from '../../images/others/maintenence.png';
export default function Maintenance() {
  return (
    <>
     <div className="main-wrapper">
        <div id="my_switcher" className="my_switcher">
          <ul>
            <li>
              <a href="javascript: void(0);" data-theme="light" className="setColor light">
                <span title="Light Mode">Light</span>
              </a>
            </li>
            <li>
              <a href="javascript: void(0);" data-theme="dark" className="setColor dark">
                <span title="Dark Mode">Dark</span>
              </a>
            </li>
          </ul>
        </div>
        {/* Start Maintanence Area  */}
        <div className="maintanence-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="order-2 order-lg-1 col-lg-6 mt_md--40 mt_sm--40">
                <div className="content">
                  <div className="logo">
                    <a href="index.html">
                      <img className="dark-logo" src={logoBlack} alt="Logo Images" />
                      <img className="light-logo" src={logoWhite2} alt="Logo Images" />
                    </a>
                  </div>
                  <h1 className="title">This project is under construction</h1>
                  <h5>Subscribe to our weekly newsletter</h5>
                  <p>No spam, notifications only about news products, updates.</p>
                  <div className="inner d-flex align-items-center flex-wrap">
                    <h5 className="follow-title mb--0 mr--20">Follow Us</h5>
                    <ul className="social-icon color-tertiary md-size justify-content-start">
                      <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                      <li><a href="#"><i className="fab fa-instagram" /></a></li>
                      <li><a href="#"><i className="fab fa-twitter" /></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                    </ul>
                  </div>
                  <form action="#" className="subscription-form">
                    <div className="form-group">
                      <input type="text" name="subscription-email" placeholder="Enter your email" />
                      <button className="axil-button button-rounded"><span>Subscribe</span></button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="order-1 order-lg-2 col-lg-5 offset-lg-1">
                <div className="thumbnail">
                  <img src={maintenence} alt="Images" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Maintanence Area  */}
        {/* Start Back To Top  */}
        <a id="backto-top" />
        {/* End Back To Top  */}
      </div>
    </>
  )
}
