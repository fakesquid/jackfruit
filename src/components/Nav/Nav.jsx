import React, { useEffect } from 'react';
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
        <div className="header-inner">
          <Link to="/" className="nav-link">
            HOME
          </Link>

          <nav>
            <a
              href="https://drive.google.com/file/d/1XLF8GTN5EWo_szvzjfa0CLKoqu3sekJr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              RESUME
            </a>

            <a href="mailto: aci.jack.zhang@gmail.com" className="nav-link">
              CONTACT
            </a>
          </nav>
          <div onClick={() => setMenuState(!menuState)} className="hamburger-menu">
            <span></span>
            <span></span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Nav;
