import Link from 'next/link';
import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import DocsLayout from '../../../components/docs/DocsLayout';

export default function Documentation() {
  return (
    <>
      <DocsLayout>
        <Jumbotron fluid>
          <Container fluid>
            <h1>Getting Started</h1>
            <p>
              In order to get an API key for DadJokes.io, you need to create an
              rapidAPI account then subscribe to{' '}
              <a href='https://rapidapi.com/KegenGuyll/api/dad-jokes'>
                DadJokes
              </a>
            </p>
            <br />
            <h3>Welcome to the DadJokes.io documentation!</h3>
            <p>
              Now that you have an API let's checkout the{' '}
              <Link href='/documentation/endpoints/random-jokes'>
                Random Joke Endpoint
              </Link>
            </p>
          </Container>
        </Jumbotron>
      </DocsLayout>
    </>
  );
}
