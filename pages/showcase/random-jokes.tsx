import Head from 'next/head';
import React from 'react';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import Navigation from '../../components/Navigation';
import ShowcaseNavigation from '../../components/showcase/Navigation';
import RandomJokeShowcase from '../../components/showcase/RandomJoke';

const Showcase = () => {
  return (
    <Container>
      <Head>
        <title>DadJokes.io Showcase RandomJokes</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav>
        <Navigation />
      </nav>
      <main>
        <Container>
          <ShowcaseNavigation />
          <RandomJokeShowcase />
        </Container>
      </main>
    </Container>
  );
};

export default Showcase;
