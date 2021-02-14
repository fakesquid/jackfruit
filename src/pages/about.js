import React from 'react';

import AboutImage from '../components/Image/AboutImg';

import '../style/main.scss';

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-intro">
          <AboutImage id={1} />
          <div className="about-details">
            <h1>Aim for the moon, and shoot for the stars.</h1>
            <p>
              Just when I thought that biotech would become my calling, my tendency to stay curious
              led to the world of product design and software development.
            </p>
            <p>
              I’m Jack, a graduating student studying biotechnology at the University of Waterloo.
              I’m a self-taught UX developer and product designer, currently designing for NFPs at
              Blueprint.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
