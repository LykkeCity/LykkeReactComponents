import React from 'react';
import Social from '../Social';
import './style.css';

export const Footer = () => (
  <footer className="lykke-footer">
    <div className="lykke-footer__bottom">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-7 pull-right">
            <Social theme="footer" />
          </div>
          <div className="col-xs-12 col-sm-5">
            <ul className="lykke-footer_links">
              <li>
                <span className="copy">
                  &copy; {new Date().getFullYear()} Lykke, Inc.
                </span>
              </li>
              <li className="middot">&middot;</li>
              <li>
                <a href="https://www.lykke.com/privacy_policy" target="_blank">
                  Privacy Policy
                </a>
              </li>
              <li className="middot">&middot;</li>
              <li>
                <a href="https://www.lykke.com/terms_of_use" target="_blank">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
