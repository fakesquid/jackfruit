import React from 'react';

import AboutImage from '../components/Image/AboutImg';

import '../style/main.scss';

const About = () => {
  return (
    <>
      <div className="about-intro">
        <AboutImage className="about-img" id={1} />
        <div>
          <h3>
            Just when I thought that biotech would become my calling, my tendency to stay curious
            led to the world of product design and software development.
          </h3>
        </div>
      </div>
    </>
  );
};

export default About;
