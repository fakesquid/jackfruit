import React, { useState, useEffect } from 'react';

import AboutImage from '../components/Image/AboutImg';
import Footer from '../components/Footer/Footer';
import Age from '../components/Age/Age';

import '../style/main.scss';

const About = () => {
  return (
    <>
      <div className='about'>
        <AboutIntro />
        <Pictures />
      </div>
      <Footer />
    </>
  );
};

const AboutIntro = () => {
  const [currentTrack, setCurrentTrack] = useState({});

  useEffect(() => {
    fetch('https://jackfruit-api-fakesquid.vercel.app/api/now-playing')
      .then((res) => res.json())
      .then((res) => setCurrentTrack(res))
      .catch((e) => console.error(e));
  });

  return (
    <div className='about-intro'>
      <AboutImage id={1} />
      <div className='about-details'>
        <h1>Hey, I&apos;m Jack.</h1>
        <Age />
        {currentTrack.track && (
          <p>
            Currently listening to {currentTrack.track} by {currentTrack.artist}
          </p>
        )}
        <p>UX Engineer by day, building Defi and designing for social good by night.</p>
        <p>
          Previously, I&apos;ve interned at Autodesk, Hubba, Flashfood, TD, and NUS in product
          design and software development. <br />
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
            className='others-title'
            href='https://uwblueprint.org/'
            target='_blank'
            rel='noopener noreferrer'
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
    <div className='pictures'>
      <h1 className='pictures-heading'>When I’m not working,</h1>
      <div className='pictures-subheading'>
        <h3>I sometimes fly around the world.</h3>
        <hr className='subheading-line' />
      </div>
      <div className='pictures-grid'>
        <AboutImage id={2} />
        <AboutImage id={3} />
        <AboutImage id={4} />
        <AboutImage id={5} />
        <AboutImage id={6} />
        <AboutImage id={7} />
      </div>
      <div className='pictures-subheading'>
        <h3>I sometimes go on food adventures!</h3>
        <hr className='subheading-line' />
      </div>
      <div className='pictures-grid'>
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
