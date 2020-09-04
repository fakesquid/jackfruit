import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jack | UX', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Well Hello there!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Jack',
  subtitle: 'an UX Developer and Designer',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Jack grew up in Toronto, Canada. Currently, he is studying Science and Business, specializing in biotechnology at the University of Waterloo.',
  paragraphTwo:
    'Jack is a proactive learner and takes every opportunity to be better. He discovered software development by chance during his first year at Waterloo, and since then developed a passion for designing and building cool 💩',
  paragraphThree: "He's passionate about tech, design, and startups!",
  resume: 'https://drive.google.com/file/d/1U034cWCq4Y-8Ct2OPgDVPV4oksxDrtS1/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'shenkii.jpg',
    title: 'Shenkii',
    info:
      "We're a blockchain initiative aiming to decentralize manga/dōjinshi transactions, distributions, and publishing.",
    info2: 'Working on product design and frontend',
    url: 'https://shenkii.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'travelwise.jpg',
    title: 'UW Blueprint | TravelWise',
    info:
      'A React web app for Waterloo Sustainable Region that help local companies coordinate carpools.',
    info2: 'Worked on frontend',
    url: 'https://gotravelwise.ca/#/',
    repo: 'https://github.com/uwblueprint/travelwise-react', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pfc.jpg',
    title: 'UW Blueprint | Plastics for Change',
    info: 'A React web app that manages and track the procurement of plastics',
    info2: 'Worked on frontend and backend',
    url: 'https://www.plasticsforchange.org/',
    repo: 'https://github.com/uwblueprint/plasta', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'snapp.jpg',
    title: 'Hack the North 2019 | Snapp',
    info:
      'A React Native app that lets user crop an image in camera view via hand gestures and implements object detection on the item in the cropped section',
    info2: 'Worked on UX design and trained ML model',
    url: 'https://devpost.com/software/snapp-vctpoz',
    repo: 'https://github.com/fakesquid/Snapp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'doppelgallery.jpg',
    title: 'Hack the North 2017 | DoppelGallery',
    info:
      ' A facial feature recognition web app that attempts to find faces that look similar to yours from open source art databases online',
    info2: 'Worked on UX design, frontend, and composing art database',
    url: 'https://devpost.com/software/doppel-gallery',
    repo: 'https://github.com/fakesquid/doppelgallery', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Have questions?',
  btn: "Let's chat",
  email: 'zj9zhang@uwaterloo.ca',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Ninetyback',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/fakesquid',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/zjjackzhang/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/fakesquid',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
