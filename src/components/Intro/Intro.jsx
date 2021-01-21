import React from 'react';

const Headline = () => {
  return (
    <div className="container">
      <h1 className="main-headline">
        <span className="hello">Hello.</span>
        <br />
        <span>
          I am a <span className="bold1">UX Developer</span> and{' '}
          <span className="bold2">Product Designer</span> primarily working on UI/UX interfaces. I
          geek out on everything design related, currently obsessed with typography and shoes.
        </span>
      </h1>
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
