import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { motion, AnimatePresence } from 'framer-motion';

import Nav from '../Nav/Nav';
import NavMenu from '../Nav/NavMenu';

const Layout = ({ children }) => {
  // Ref for parent div and scrolling div
  const app = useRef();

  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    menuState
      ? document.body.classList.add('body-lock')
      : document.body.classList.remove('body-lock');
  }, [menuState]);

  return (
    <motion.div exit={{ opacity: 0 }} ref={app} className="app">
      <div>
        <AnimatePresence>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Nav setMenuState={setMenuState} />
            <NavMenu menuState={menuState} setMenuState={setMenuState} />
            <div>
              <main>{children}</main>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
