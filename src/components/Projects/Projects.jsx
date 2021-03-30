import React from 'react';
import { Link } from 'gatsby';
import Card from '../Card/Card';
import Tags from '../Tags/Tags';

import ShenkiiCardImg from '../../images/shenkii_card.jpg';
import AutodeskCardImg from '../../images/autodesk_card.jpg';
import TravelwiseCardImg from '../../images/travelwise_card.jpg';
import PFCCardImg from '../../images/pfc.jpg';

const Shenkii = () => {
  const tags = ['Work', 'Design', 'Code'];

  return (
    <div className="container">
      <div className="project-inner">
        <Card bgImage={ShenkiiCardImg} />

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
        <Card bgImage={AutodeskCardImg} />

        <div className="project-details">
          <h1 className="project-title">Autodesk</h1>
          <Tags tags={tags} />
          <h3>
            Redesigning the animation of HIG Design System UIs to improve UX across Autodesk
            products
          </h3>
          <Link className="project-link disabled" to="/work/autodesk">
            Case Study In The Work
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
        <Card bgImage={TravelwiseCardImg} />

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
        <Card bgImage={PFCCardImg} />

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
