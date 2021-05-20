import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ pageTitle, thumbnail, title, description, children }) => {
  return (
    <React.Fragment>
      <Head>
        <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta httpEquiv='X-UA-Compatible' content='IE=7' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='keywords' content='' />
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap'
        />
        <title>{pageTitle}</title>
      </Head>
      <Header thumbnail={thumbnail} title={title} description={description} />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
