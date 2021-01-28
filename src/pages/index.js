import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const lang = headData;

  useEffect(() => {
    ReactGA.initialize('G-LDC17Y77LK');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jackfruit</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="Jackfruit" />
      </Helmet>
      <App />
    </>
  );
};
