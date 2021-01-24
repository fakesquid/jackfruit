import React from 'react';

import { Email, Github, Linkedin, Twitter, Instagram } from '../../icons/icons';

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="copyright">
          <p>© 2021 — Designed and Developed by JACK ZHANG</p>
        </div>
        <div className="help">
          <h5>How can I help? </h5>
          <div className="socials">
            <a className="first" href="mailto: aci.jack.zhang@gmail.com">
              <Email />
            </a>
            <a href="https://github.com/fakesquid" target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/zjjackzhang/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
            <a href="https://twitter.com/Ninetyback" target="_blank" rel="noopener noreferrer">
              <Twitter />
            </a>
            <a
              href="https://www.instagram.com/mr.sexyback/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
