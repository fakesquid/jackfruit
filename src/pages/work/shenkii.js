import React from 'react';
import '../../style/main.scss';
import ReactPlayer from 'react-player/lazy';

import UserPersonaImage from '../../components/Image/PersonaImg';
import ShenkiiImage from '../../components/Image/ShenkiiImg';
import Footer from '../../components/Footer/Footer';

const Shenkii = () => {
  return (
    <>
      <div className="case">
        <div className="case-title">
          <h1>
            Building a better marketplace for Japanese art and{' '}
            <a
              href="https://en.wikipedia.org/wiki/Doujinshi"
              target="_blank"
              rel="noopener noreferrer"
            >
              doujinshi
            </a>{' '}
            with Shenkii
          </h1>
          <h5>
            Timeline: <span className="case-details">October 2020 - Present</span>
          </h5>
          <h5>
            Role:{' '}
            <span className="case-details">
              Co-founder, Product Designer, and Software Developer
            </span>
          </h5>
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
          <Collection />
          <TechDecisions />
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
          and doujinshi (Japanese self-published art).
        </p>
      </div>
    </div>
  );
};

const Blockchain = () => {
  return (
    <div className="case-section">
      <h1 className="case-subheading">what’s solved with blockchain?</h1>
      <ShenkiiImage id={8} />
      <div className="case-text">
        <p>
          With the development of blockchain, several digital art marketplaces emerged to solve this
          problem by tokenizing artworks{' '}
          <a
            href="https://decrypt.co/resources/non-fungible-tokens-nfts-explained-guide-learn-blockchain"
            target="_blank"
            rel="noopener noreferrer"
          >
            NFT
          </a>{' '}
          (non-fungible tokens) such as the{' '}
          <a href="http://erc721.org/" target="_blank" rel="noopener noreferrer">
            ERC-721
          </a>
          .
          <br />
          <br />
          With a tokenized artwork, authenticity can be verified, the origin can be tracked, and
          ownership can be proved.
          <br />
          <br />
          However, most blockchain art marketplaces were generic, lacked control for the artist, and
          due to the nature of{' '}
          <a
            href="https://medium.com/l4-media/making-sense-of-web-3-c1a9e74dcae"
            target="_blank"
            rel="noopener noreferrer"
          >
            web3
          </a>
          , lacked the{' '}
          <a
            href="https://ethereum.org/en/developers/docs/web2-vs-web3/#web3-limitations"
            target="_blank"
            rel="noopener noreferrer"
          >
            user experience
          </a>{' '}
          that most users are used to.
        </p>
      </div>
    </div>
  );
};

const TheSolution = () => {
  return (
    <div className="case-section">
      <h1 className="case-subheading" id="solution">
        the solution
      </h1>
      <ShenkiiImage id={12} />
      <h5 className="helper-text">Current NFT marketplaces vs Shenkii</h5>
      <div className="case-text">
        <p>
          A blockchain art marketplace for Japanese-styled art, manga, and doujinshi. The platform
          will be designed with a focus on giving the artist the control and providing a familiar
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
            Provide a Japanese-art focused platform to doujinshi artists and mangaka (manga artists)
            to self-publish and sell their work for cryptocurrency
          </li>
          <br />
          <li>
            Provide the tools to allow doujinshi artists and mangaka to protect, track, and monetize
            their work
          </li>
          <br />
          <li>
            Provide a social space for fans, artists, and collectors to share and view Japanese art
          </li>
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
              Jun Takahashi is an amateur freelance manga artist from Tokyo, Japan. Jun has 5 years
              of experience drawing manga and sell his doujinshi on various online platforms.
            </p>
            <h5>Obstacles</h5>
            <p>
              Jun’s biggest concerns with the current online platform are the lack of profitability
              and protection of copyright.
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
              Fan Kang is a university student from Toronto, Canada. An avid manga reader, Fan is
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
          with our daily lives, it may not be obvious to first-time users what it means to be a{' '}
          <a
            href="https://ethereum.org/en/developers/docs/web2-vs-web3/#centralization-vs-decentralization"
            target="_blank"
            rel="noopener noreferrer"
          >
            decentralized
          </a>{' '}
          platform, or what values it offers. Many users may be unfamiliar with the term "wallet" in
          the{' '}
          <a
            href="https://ethereum.org/en/developers/docs/web2-vs-web3/#practical-comparisons"
            target="_blank"
            rel="noopener noreferrer"
          >
            web3
          </a>{' '}
          context and may be wondering why there isn't a way for them to create an account.
        </p>
        <br />
        <p>
          These are valid confusions and frustrations that the user would have if it's their first
          time interacting with a decentralized platform built on top of the blockchain. That's why
          when I designed the user flow of our platform, I took careful consideration into how I can
          make the onboarding experience for new users better. I took the experience from our team's
          first time with blockchain, and build the guidance that I wish were there at the time.
        </p>
        <br />
        <h3>Key designs of the user flow</h3>
        <ol>
          <li>Build an experience that the users are familiar with</li>
          <li>Choose technologies that minimize the barrier of entry and learning</li>
          <li>
            Make a comprehensive and informational <i>About</i> page that will educate the users on
            the technology, and provide answers to FAQ
          </li>
          <li>
            Provide helpful information and/or tooltips at key steps involving web3 technologies
          </li>
        </ol>
      </div>
    </div>
  );
};

const Marketplace = () => {
  return (
    <div className="case-section">
      <h1 className="case-subheading">designing the marketplace</h1>
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
          feeling of going to an art gallery, not a marketplace. Instead of cluttering the user's
          view with competing prices and endless options, I wanted the users to have their focus on
          appreciating the art.
        </p>
        <br />
        <p>
          I went with a very minimalistic design with our marketplace. Decluttering the UIs to free
          up as much space as possible to spotlight each and every piece of art. The card UI
          containing the art was designed to maximize the viewing size of the art, taking
          inspiration from art galleries.
        </p>
      </div>
    </div>
  );
};

const ArtPage = () => {
  return (
    <div className="case-section">
      <h1 className="case-subheading">highlight the artwork</h1>
      <div className="case-text">
        <ShenkiiImage id={6} />
        <h5 className="helper-text">Individual Art page</h5>
        <ShenkiiImage id={7} />
        <h5 className="helper-text">Past iterations of the Art page</h5>
        <p>
          With the art page, I continue to design with the philosophy that when building an online
          marketplace for digital art, art should be the focus of the user's attention. Like the
          real-world experience of walking up to a piece of artwork that you find intriguing in the
          gallery, I wanted the user to have a similar experience when selecting a specific piece of
          artwork. On the art page, the user is able to see the artwork in much greater detail and
          size. More relevant information such as detailed description, number of copies, past
          ownership will also be displayed.
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

const Collection = () => {
  return (
    <div className="case-section">
      <h1 className="case-subheading">collecting can be social</h1>
      <div className="case-text">
        <div className="gif-wrapper">
          <ReactPlayer
            url="https://vimeo.com/505119430"
            playing={true}
            loop={true}
            controls={false}
            muted={true}
          />
        </div>
        <h5 className="helper-text">Another user's collection page</h5>
        <p>
          From my user research, an important insight that I've collected was that the users feel
          that it's important for them to be able to showcase their collection to other people. With
          that in mind, I thought it would make sense to design a layer of rich social features on
          top of the barebone collection page. To keep the experience familiar, I designed a social
          sidebar with influence from Instagram and Twitter. The sidebar has its position fixed when
          scrolling so that it remains a point of interest while the user scrolls through the
          collection. I wanted the collector to be able to tell their stories. When the user wants
          to make a connection to the story or follow the collector, it can be done easily. An
          improvement that I would want to add on top of this would be the option to discover and
          showcase art to like-minded individuals.
        </p>
        <ShenkiiImage id={14} />
        <h5 className="helper-text">An artist's collection page</h5>
        <p>
          If the user has created artworks before, their social sidebar on the collection page
          changes to reflect that. Once the user's role gets upgraded to an artist, additional tools
          and features are provided. One of the features that we want to implement in the future is
          Commission. An insight that I learned from the research was that users like the
          artwork/doujinshi more if it's personally made for them.
        </p>
        <ShenkiiImage id={15} />
        <h5 className="helper-text">the user's collection page</h5>
        <p>
          To add a little incentive for the users to create and collect more artworks, I added
          flairs in the social sidebar to showcase their progression. As the user collects and/or
          create more artworks, the flairs will progressively upgrade.
        </p>
      </div>
    </div>
  );
};

const TechDecisions = () => {
  return (
    <div className="case-section">
      <h1 className="case-subheading">make the web3 UX better</h1>
      <div className="case-text">
        <ShenkiiImage id={9} />
        <h5 className="helper-text">Traditional new user onboarding experience with Metamask</h5>
        <ShenkiiImage id={10} />
        <h5 className="helper-text">New user onboarding experience with Fortmatic</h5>
        <p>
          Due to the nature of web3, traditional user experience with onboarding to a decentralized
          app would require many steps and blockchain software that may not be intuitive to
          everyone. By choosing to use Fortmatic, a simpler and familiar experience can be provided
          to the user. By keeping the friction and barrier of entry to the decentralized app low,
          more users can be obtained.
        </p>
        <ShenkiiImage id={11} />
        <h5 className="helper-text">Fortmatic wallet modal</h5>
        <p>
          By using Fortmatic, the developer experience was simplified too. Instead of worrying about
          the UIs of how users will connect to their wallets, Fortmatic's login modal can simplify
          and save development time, which is crucial in a small and lean team.
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
          to continue to evolve with more feedback and research. Most of the decisions made with the
          design were based on the insights that we have gathered through speaking with our users
          and researching the current market. While our team's current focus is on implement the
          backend, I aim to conduct further usability tests on my design decisions.
        </p>
        <br />
        <p>
          Learning from our market and user research, another of our key focus is on the artist. We
          believe in delivering better tools to help artists in the tokenization, protection, and
          sale of their artworks. Expect the design of features and tools for artists coming soon.
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
          decentralized applications (dApp), blockchain, web3, and the doujinshi art industry. While
          it was the first time for our team to develop with blockchain technologies, it was also my
          first time in taking a lead role in product design. With those two factors combined, I
          faced a lot of unknowns and technical constraints when designing Shenkii. One of the
          biggest challenges that I continuously work on with design is how to make the dApp
          experience for new users feel familiar and frictionless.
        </p>
      </div>
    </div>
  );
};

export default Shenkii;
