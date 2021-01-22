import React from 'react';

const Headline = () => {
  return (
    <div className="container">
      <h1 className="main-headline">
        <span className="hello">Hey I'm Jack!</span>
        <br />A <span className="bold1">UX Developer</span> and{' '}
        <span className="bold2">Product Designer</span> primarily working on UI/UX interfaces.
        Through design, I want to make the world a better place.
      </h1>
    </div>
  );
};

const Other = () => {
  return (
    <div className="container">
      <div className="others-banner">
        <ul>
          <span>Previously At:</span>
          <li>Autodesk</li>
          <li>Hubba</li>
          <li>Flashfood</li>
          <li>TD</li>
          <li>NUS</li>
        </ul>
        <ul>
          <span>Hackathons:</span>
          <li>ETHGlobal MarketMake</li>
          <li>Hack the North 2019</li>
          <li>Hack the North 2018</li>
          <li>Hack the North 2017</li>
          <li>StarterHack 2017</li>
        </ul>
      </div>
    </div>
  );
};

const Intro = () => (
  <>
    <div className="banner">
      <div className="inner-banner">
        <Headline />
      </div>
    </div>
  </>
);

export default Intro;
