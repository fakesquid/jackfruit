import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

import Intro from './Intro/Intro';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';

const transition = { duration: 1, ease: [0.6, -0.05, 0.01, 0.9] };

function App() {
  return (
    <AnimatePresence
      exitBeforeEnter
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
      >
        <Intro />
        <Projects />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
