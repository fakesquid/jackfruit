import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';

const Nav = ({ menuState, setMenuState }) => {
  const location = useLocation();
  useEffect(() => {
    setMenuState(false);
  }, [location]);
  return (
    <header>
      <Container fluid>
        <div className='header-inner'>
          <Link to='/' className='nav-link'>
            JACK
          </Link>
          <nav>
            <Link to='/about' className='nav-link'>
              ABOUT
            </Link>
            <a
              href='https://drive.google.com/file/d/14bfnrSNxVgRubbwSQw_UK7oK4IUCdpW8/view'
              target='_blank'
              rel='noopener noreferrer'
              className='nav-link'
            >
              RESUME
            </a>

            <a href='mailto: zj9zhang@uwaterloo.ca' className='nav-link'>
              CONTACT
            </a>
          </nav>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
          <div onClick={() => setMenuState(!menuState)} className='hamburger-menu'>
            <span />
            <span />
          </div>
        </div>
      </Container>
    </header>
  );
};

Nav.propTypes = {
  menuState: PropTypes.bool,
  setMenuState: PropTypes.func,
};

export default Nav;
