import React from 'react';

const Headline = () => {
  return (
    <h1 className='main-headline'>
      <span className='italic'>UX Developer</span> and{' '}
      <span className='italic'>Product Designer</span>.
      <br />
      Through technology, I want to help people solve problems and make the world a better place.
    </h1>
  );
};

const Other = () => {
  return (
    <div className='others-banner'>
      <div className='others-details'>Currently building and designing a Defi protocol</div>
    </div>
  );
};

const Intro = () => (
  <>
    <div className='banner'>
      <div className='inner-banner'>
        <div className='container'>
          <Headline />
          <br />
          <Other />
        </div>
      </div>
    </div>
  </>
);

export default Intro;
