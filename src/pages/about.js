import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from '../components/Card/Card';

import { headData } from '../mock/data';
import '../style/main.scss';

export default () => {
  const { lang } = headData;

  return (
    // <>
    //   <Helmet>
    //     <meta charSet="utf-8" />
    //     <title>Page not found</title>
    //     <html lang={lang || 'en'} />
    //     <meta name="description" content="Page not found" />
    //   </Helmet>
    //   <section id="hero" className="jumbotron">
    //     <Container>
    //       <h1>Hello there</h1>
    //     </Container>
    //   </section>
    // </>
    <>
      <Card bgImage={require('../images/shenkii.jpg')} />
    </>
  );
};
