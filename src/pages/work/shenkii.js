import React from 'react';
import '../../style/main.scss';

import UserPersonaImage from '../../components/Image/PersonaImg';
import ShenkiiImage from '../../components/Image/ShenkiiImg';
import Footer from '../../components/Footer/Footer';

const Shenkii = () => {
  return (
    <>
      <div className="case">
        <div className="case-title">
          <h1>Building a better marketplace for Japanese art and doujinshi with Shenkii</h1>
          <h5>Timeline: December 2020 - Present</h5>
          <h5>Role: Founding Product Design and Software Development</h5>
        </div>
        <div className="case-banner">
          <ShenkiiImage id={1} />
        </div>
        <div className="case-body">
          <h2 className="case-heading">1.Research</h2>
          <TheProblem />
          <Blockchain />
          <TheSolution />
          <Gains />
          <UserPersonas />
          <h2 className="case-heading">2.Design</h2>
          <Userflow />
          <Marketplace />
          <ArtPage />
          <NextSteps />
          <Learnings />
        </div>
      </div>
      <Footer />
    </>
  );
};

const TheProblem = () => {
  return (
    <div className="case-section">
      <h1 className="case-subheading">the problem</h1>
      <div className="case-text">
        <p>
          A big problem with today’s online marketplace for selling digital art is the ease of
          duplication and piracy.
          <br />
          <br />
          Being a form of art and publication, the same can be said for Japanese-styled art, manga,
          and doujinshi (self-published art).
        </p>
      </div>
    </div>
  );
};

const Blockchain = () => {
  return (
    <div className="case-section">
      <h1 className="case-subheading">what’s solved with blockchain?</h1>
      <div className="case-text">
        <p>
          With the development of blockchain, several digital art marketplaces emerged to solve this
          problem by assigning blockchain certificates to artworks.
          <br />
          <br />
          With a blockchain certificate, authenticity can be verified, origin can be tracked, and
          ownership can be proved.
          <br />
          <br />
          However, most blockchain art marketplaces were generic, lacked control for artist, and
          lacked the user experience for tradition Web 2.0.
        </p>
      </div>
    </div>
  );
};

const TheSolution = () => {
  return (
    <div className="case-section">
      <h1 className="case-subheading">the solution</h1>
      <div className="case-text">
        <p>
          A blockchain art marketplace for Japanese-styled art, manga, and doujinshi. The platform
          will be design with a focus on giving the artist the control, and to provide a familiar
          Web 2.0 experience to allow ease of usage and onboarding for users.
        </p>
      </div>
    </div>
  );
};

const Gains = () => {
  return (
    <div className="case-section">
      <h1 className="case-subheading">gain creators</h1>
      <div className="case-text">
        <ol>
          <li>
            Allow doujinshi artists and mangaka (manga artists) to have a platform to self-publish
            and sell their art for cryptocurrency
          </li>
          <br />
          <li>
            Provide the tools to allow doujinshi artists and mangaka to protect and monetize their
            work
          </li>
          <br />
          <li>Provide a social space fo r users, artists, and collectors to share and view art</li>
        </ol>
      </div>
    </div>
  );
};

const UserPersonas = () => {
  return (
    <>
      <div className="case-section">
        <h1 className="case-subheading">user personas </h1>
        <div className="user-persona">
          <div className="user-profile">
            <UserPersonaImage id={1} />
            <h5>Jun Takahashi</h5>
          </div>
          <div className="user-details">
            <h5>Behavior</h5>
            <p>
              Jun Takahashi is an amateur freelance manga artist from Tokyo, Japan. Jun have 5 years
              of experience drawing manga and sell his doujinshi on various online platforms.
            </p>
            <h5>Obstacles</h5>
            <p>
              Jun’s biggest concerns with current online platform are the lack of profitability and
              protection of copyright.
            </p>
            <h5>Gains</h5>
            <p>
              Jun wants a way to be able to sustainably generate profit and track the distribution
              of his work online.
            </p>
          </div>
        </div>
      </div>
      <div className="case-section">
        <div className="user-persona">
          <div className="user-profile">
            <UserPersonaImage id={2} />
            <h5>Fan Kang</h5>
          </div>
          <div className="user-details">
            <h5>Behavior</h5>
            <p>
              Fan Kang is an university student from Toronto, Canada. An avid manga reader, Fan is
              passionate about Japanese culture and often collect both physical and digital
              merchandise from his favorite manga and anime.
            </p>
            <h5>Obstacles</h5>
            <p>
              Fan sometimes doesn’t know if the merchandise he bought came directly from the artist.
              He also doesn’t have a way to share what he collects with other fans.
            </p>
            <h5>Gains</h5>
            <p>
              Fan wants a platform where he can buy directly from artists that he likes, and a place
              to store all of his digital collection.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Userflow = () => {
  return (
    <div className="case-section">
      <h1 className="case-subheading">user flow</h1>
      <ShenkiiImage id={2} />
      <h5 className="helper-text">User flow chart for new users</h5>
      <div className="case-text">
        <p>
          From our previous identification of the problems that persist amongst current blockchain
          marketplaces, the user experience and usability of new users to the blockchain space was a
          key problem. With so many centralized social media and web platforms closely integrated
          with our daily lives, it may not be obvious to first time users what it means to be a
          decentralized platform, or what values it offers. Many users may be unfamiliar with the
          term "wallet" in Web 3.0 context, and may be wondering why there isn't a way for them to
          create an account.
        </p>
        <br />
        <p>
          These are valid confusions and frustrations that the user would have, if it's their first
          time interacting with a decentralized platform built on top of blockchain. That's why when
          I designed the user flow of our platform, I took careful consideration into how I can make
          the onboarding experience for new users better. I took experience from our team's first
          time with blockchain, and build the guidance that I wish were there at the time.
        </p>
        <br />
        <h3>Key designs of the user flow</h3>
        <ol>
          <li>Build an experience that the users are familiar with</li>
          <li>Choose technologies that minimize the barrier of entry and learning</li>
          <li>
            Make the a comprehensive and informational About page that will educate the users on the
            technology, and provide answers to FAQ
          </li>
          <li>
            Provide helpful information and/or tooltips at key steps involving Web 3.0 technologies
          </li>
        </ol>
      </div>
    </div>
  );
};

const Marketplace = () => {
  return (
    <div className="case-section">
      <h1 className="case-subheading">marketplace exploration</h1>
      <div className="case-text">
        <ShenkiiImage id={5} />
        <h5 className="helper-text">Inspiration of the marketplace design</h5>

        <ShenkiiImage id={3} />
        <h5 className="helper-text">Marketplace / wallet not connected</h5>

        <ShenkiiImage id={4} />
        <h5 className="helper-text">Marketplace / wallet connected</h5>

        <p>
          Different from traditional e-commerce marketplaces such as Amazon, a marketplace for art
          should be a visual-first exploratory experience. I wanted the user to experience the
          feelings of going to an art gallery, not a marketplace. Instead of cluttering the user's
          view with competing prices and endless options, I wanted the users have their focus on
          appreciating the art.
        </p>
        <br />
        <p>
          I went with a very minimalistic design with our marketplace. Decluttering the UIs to free
          up as much space as possible to spotlight each and every piece of art. The card UI
          containing the art was designed to maximize the viewing size of the art, taking
          inspirations from art galleries.
        </p>
      </div>
    </div>
  );
};

const ArtPage = () => {
  return (
    <div className="case-section">
      <h1 className="case-subheading">art is the highlight</h1>
      <div className="case-text">
        <ShenkiiImage id={6} />
        <h5 className="helper-text">Individual Art page</h5>
        <ShenkiiImage id={7} />
        <h5 className="helper-text">Past iterations of the Art page</h5>
        <p>
          With the art page, I continue to design with the philosophy that when building a online
          marketplace for digital art, the art should be the focus of the user's attention. Like the
          real world experience of walking up to a piece of artwork that you find intriguing in the
          gallery, I wanted the user to have a similar experience when selecting into a specific
          piece of artwork. In the art page, the user is able to see the artwork at a much greater
          detail and size. More relevant information such as detailed description, number of copies,
          past ownership will also be displayed.
        </p>
        <br />
        <p>
          In past iterations, the CTA and price on the art page were less obvious. Key details of a
          non-fungible token (NFT) such as showing ownership history and helpful tooltips for
          pricing were also missing. In the current design, I aim to make the CTA (purchasing the
          art) more obvious, as well as improve the visibility of important information on the page.
        </p>
      </div>
    </div>
  );
};

const NextSteps = () => {
  return (
    <div className="case-section">
      <h1 className="case-subheading">next steps</h1>
      <div className="case-text">
        <p>
          As Shenkii is currently still in active design and development, I anticipate the platform
          to continue to evolve with more feedbacks and research. Most of the decisions made with
          the design were based off of the insights that we have gathered through speaking with our
          users and researching the current market. While our team's current focus is on implement
          the backend, I aim to conduct further usability tests my design decisions.
        </p>
        <br />
        <p>
          Learning from our market and user research, another of our key focus is on the artist. We
          believe in delivering better tools to help artists in the tokenization, protection, and
          sale of their artworks. Expect design of features and tools for artist coming soon.
        </p>
      </div>
    </div>
  );
};

const Learnings = () => {
  return (
    <div className="case-section">
      <h1 className="case-subheading">learnings</h1>
      <div className="case-text">
        <p>
          Working on both the design and development of Shenkii has taught me a lot about
          decentralized applications (dApp), blockchain, Web 3.0, and the doujinshi art industry.
          While it was the first time for our team to develop with blockchain technologies, it was
          also my first time in taking a lead role in product design. With those two factors
          combined, I faced a lot of unknowns and technical constraints when designing Shenkii. One
          of the biggest challenge that I continuously work on with design is how to make the dApp
          experience for new users feel familiar and frictionless.
        </p>
      </div>
    </div>
  );
};

export default Shenkii;
