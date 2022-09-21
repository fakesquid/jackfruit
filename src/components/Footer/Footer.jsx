import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { motion } from 'framer-motion';

import { Email, Github, Linkedin, Twitter, Instagram } from '../../icons/icons';

const Footer = () => {
  return (
    <div className='container'>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <button className='toTop' onClick={() => scrollTo('header')} type='button'>
          <svg
            width='31'
            height='20'
            viewBox='0 0 31 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M30.2989 19.5039L16.5254 0.515625C16.0254 -0.171875 15.002 -0.171875 14.5059 0.515625L0.728564 19.5039C0.694659 19.5506 0.674348 19.6058 0.669882 19.6633C0.665417 19.7209 0.676971 19.7785 0.703263 19.8299C0.729556 19.8813 0.769561 19.9243 0.818843 19.9544C0.868126 19.9844 0.924761 20.0002 0.98247 20H3.91216C4.11138 20 4.29888 19.9023 4.41606 19.7422L15.5137 4.44531L26.6114 19.7422C26.7286 19.9023 26.9161 20 27.1153 20H30.045C30.2989 20 30.4473 19.7109 30.2989 19.5039Z'
              fill='#272635'
            />
          </svg>
        </button>
      </motion.div>
      <div className='footer'>
        <div className='copyright'>
          <p>© 2022 — Designed and Developed by JACK ZHANG</p>
        </div>
        <div className='help'>
          <h5>How can I help? </h5>
          <div className='socials'>
            <a className='first' href='mailto: zj9zhang@uwaterloo.ca'>
              <Email />
            </a>
            <a href='https://github.com/fakesquid' target='_blank' rel='noopener noreferrer'>
              <Github />
            </a>
            <a
              href='https://www.linkedin.com/in/zjjackzhang/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Linkedin />
            </a>
            <a href='https://twitter.com/Ninetyback' target='_blank' rel='noopener noreferrer'>
              <Twitter />
            </a>
            <a
              href='https://www.instagram.com/mr.sexyback/'
              target='_blank'
              rel='noopener noreferrer'
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
