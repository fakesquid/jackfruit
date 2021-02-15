import React from 'react';

import AboutImage from '../components/Image/AboutImg';
import Footer from '../components/Footer/Footer';

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
              Hey there! I’m Jack, a self-taught UX developer and product designer studying biotech
              at the University of Waterloo. Previously, I've interned at Autodesk, Hubba,
              Flashfood, TD, and NUS in product design and development.{' '}
              <span className="details-bold">
                Currently, I am looking for software development and product design opportunities!
              </span>
            </p>
            <p>
              I'm passionate about solving problems with technology to make the world a better
              place. Initially, I pursued biotech because I was intrigued by mycelium's potential to
              replace plastics. However, my curiosity in technology led me to discover product
              design and software development through various hackathons.
            </p>
            <p>
              I care deeply about making a positive social impact and take every opportunity that I
              can to do so. Since 2019, I've been volunteering for{' '}
              <a
                className="others-title"
                href="https://uwblueprint.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                UW Blueprint
              </a>
              , a student-led team that builds technology for nonprofits.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
