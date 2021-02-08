import React from 'react';
import { Link } from 'gatsby';
import Card from '../Card/Card';
import Tags from '../Tags/Tags';

const Shenkii = () => {
  const tags = ['Work', 'Design', 'Code'];

  return (
    <div className="container">
      <div className="project-inner">
        <Card bgImage={require('../../images/shenkii_card.jpg')} />

        <div className="project-details">
          <h1 className="project-title">Shenkii</h1>
          <Tags tags={tags} />
          <h3>
            Building the future of digital marketplace for Manga, Doujinshi, and Anime art with
            blockchain
          </h3>
          <Link className="project-link" to="/work/shenkii">
            Case Study
          </Link>
        </div>
      </div>
    </div>
  );
};

const Autodesk = () => {
  const tags = ['Work', 'Design', 'Code'];

  return (
    <div className="container">
      <div className="project-inner">
        <Card bgImage={require('../../images/autodesk_card.jpg')} />

        <div className="project-details">
          <h1 className="project-title">Autodesk</h1>
          <Tags tags={tags} />
          <h3>
            Redesigning the animation of HIG Design System UIs to improve UX across Autodesk
            products
          </h3>
          <Link className="project-link disabled" to="/work/autodesk">
            Case Study Coming Soon
          </Link>
        </div>
      </div>
    </div>
  );
};

const Flashfood = () => {
  return (
    <div className="container">
      <div className="project-inner">
        <Card bgImage={require('../../images/flashfood_card.jpg')} />

        <div className="project-details">
          <h1 className="project-title">Flashfood</h1>
          <h3>Designing a better refund flow for vendors and users</h3>
          <Link className="project-link disabled" to="/work/flashfood">
            Case Study Coming Soon
          </Link>
        </div>
      </div>
    </div>
  );
};

const Travelwise = () => {
  const tags = ['Blueprint', 'Volunteer', 'Code'];

  return (
    <div className="container">
      <div className="project-inner">
        <Card bgImage={require('../../images/travelwise_card.jpg')} />

        <div className="project-details">
          <h1 className="project-title">TravelWise</h1>
          <Tags tags={tags} />
          <h3>
            A React web app for Waterloo Sustainable Region that helps local companies coordinate
            carpools
          </h3>
          <a
            className="project-link"
            href="https://gotravelwise.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
          <a
            className="project-link"
            href="https://github.com/uwblueprint/travelwise-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

const PFC = () => {
  const tags = ['Blueprint', 'Volunteer', 'Code'];

  return (
    <div className="container">
      <div className="project-inner">
        <Card bgImage={require('../../images/pfc.jpg')} />

        <div className="project-details">
          <h1 className="project-title" id="PFC">
            Plastics for Change
          </h1>
          <Tags tags={tags} />
          <h3>
            A React web for an India-based non-profit to manage and track the procurement of
            plastics
          </h3>
          <a
            className="project-link"
            href="https://www.plasticsforchange.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
          <a
            className="project-link"
            href="https://github.com/uwblueprint/plasta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="projects">
      <Shenkii />
      <Autodesk />
      <Travelwise />
      <PFC />
    </div>
  );
};

export default Projects;
