import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Nav } from 'react-bootstrap';

const ShowcaseNavigation = () => {
  const router = useRouter();

  return (
    <Nav
      style={{ marginBottom: '15px' }}
      fill
      variant='tabs'
      defaultActiveKey={router.pathname}>
      <Link href='/showcase/random-jokes'>
        <Nav.Item>
          <Nav.Link
            eventKey='/showcase/random-jokes'
            href='/showcase/random-jokes'>
            Random Joke
          </Nav.Link>
        </Nav.Item>
      </Link>

      <Link href='/showcase/joke-by-id'>
        <Nav.Item>
          <Nav.Link eventKey='/showcase/joke-by-id' href='/showcase/joke-by-id'>
            Joke By Id
          </Nav.Link>
        </Nav.Item>
      </Link>

      <Link href='/showcase/joke-by-type'>
        <Nav.Item>
          <Nav.Link
            eventKey='/showcase/joke-by-type'
            href='/showcase/joke-by-type'>
            Joke By Type
          </Nav.Link>
        </Nav.Item>
      </Link>

      <Link href='/showcase/search-jokes'>
        <Nav.Item>
          <Nav.Link
            eventKey='/showcase/search-jokes'
            href='/showcase/search-jokes'>
            Search Jokes
          </Nav.Link>
        </Nav.Item>
      </Link>
    </Nav>
  );
};

export default ShowcaseNavigation;
