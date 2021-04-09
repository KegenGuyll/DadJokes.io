import Head from 'next/head';
import React from 'react';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import Navigation from '../../../components/docs/Navigation';
import JokeByIdShowcase from '../../../components/docs/showcase/JokeById';
import ShowcaseNavigation from '../../../components/docs/showcase/Navigation';
import RandomJokeShowcase from '../../../components/docs/showcase/RandomJoke';

const Showcase = () => {
  return (
    <Container>
      <Head>
        <title>DadJokes.io Showcase JokeById</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav>
        <Navigation />
      </nav>
      <main>
        <Container>
          <ShowcaseNavigation />
          <JokeByIdShowcase />
        </Container>
      </main>
    </Container>
  );
};

export default Showcase;
