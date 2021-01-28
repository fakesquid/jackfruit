import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { motion, AnimatePresence } from 'framer-motion';

// Hooks
import useWindowSize from '../../hooks/useWindowSize';

import Nav from '../Nav/Nav';
import NavMenu from '../Nav/NavMenu';

const Layout = ({ children, location }) => {
  // Hook to grab window size
  const size = useWindowSize();

  // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  // Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`;
  };

  const [state, setState] = useState({
    scroll: 0,
    skew: 0,
  });

  // Scrolling
  const skewScrolling = () => {
    // Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    // Assign skew and smooth scrolling to the scroll container
    setState({ scroll: data.rounded, skew: skew });
    // loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };

  // set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size, location]);

  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    menuState
      ? document.body.classList.add('body-lock')
      : document.body.classList.remove('body-lock');
  }, [menuState]);

  return (
    <motion.div exit={{ opacity: 0 }} ref={app} className="app">
      <div
        style={{
          transform: `translate3d(0, -${state.scroll}px, 0) skewY(${state.skew}deg)`,
        }}
        ref={scrollContainer}
        className="smooth-scroll"
      >
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
