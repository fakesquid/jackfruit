import React from 'react';

import AboutImage from '../components/Image/AboutImg';
import Footer from '../components/Footer/Footer';

import '../style/main.scss';

const About = () => {
  return (
    <>
      <div className="about">
        <AboutIntro />
        <Pictures />
      </div>
      <Footer />
    </>
  );
};

const AboutIntro = () => {
  return (
    <div className="about-intro">
      <AboutImage id={1} />
      <div className="about-details">
        <h1>Hey, I&apos;m Jack.</h1>
        <p>
          A self-taught UX developer and product designer studying biotech at the University of
          Waterloo.
        </p>
        <p>
          Previously, I&apos;ve interned at Autodesk, Hubba, Flashfood, TD, and NUS in product
          design and software development. <br />
          <span className="details-bold">
            Currently, I&apos;m looking for full-time frontend development or product design
            opportunities!
          </span>
        </p>
        <p>
          I&apos;m passionate about solving problems with technology to make the world a better
          place. Initially, I pursued biotech because I was intrigued by mycelium&apos;s potential
          to replace plastics. However, my curiosity in technology led me to discover product design
          and software development through various hackathons.
        </p>
        <p>
          I care deeply about making a positive social impact and take every opportunity that I can
          to do so. Since 2019, I&apos;ve been volunteering for{' '}
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
  );
};

const Pictures = () => {
  return (
    <div className="pictures">
      <h1 className="pictures-heading">When I’m not working,</h1>
      <div className="pictures-subheading">
        <h3>I sometimes fly around the world.</h3>
        <hr className="subheading-line" />
      </div>
      <div className="pictures-grid">
        <AboutImage id={2} />
        <AboutImage id={3} />
        <AboutImage id={4} />
        <AboutImage id={5} />
        <AboutImage id={6} />
        <AboutImage id={7} />
      </div>
      <div className="pictures-subheading">
        <h3>I sometimes go on food adventures!</h3>
        <hr className="subheading-line" />
      </div>
      <div className="pictures-grid">
        <AboutImage id={8} />
        <AboutImage id={9} />
        <AboutImage id={10} />
        <AboutImage id={11} />
        <AboutImage id={12} />
        <AboutImage id={13} />
      </div>
    </div>
  );
};

export default About;
