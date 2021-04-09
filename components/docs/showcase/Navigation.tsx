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
      <Link href='/docs/showcase/random-jokes'>
        <Nav.Item>
          <Nav.Link
            eventKey='/docs/showcase/random-jokes'
            href='/docs/showcase/random-jokes'>
            Random Joke
          </Nav.Link>
        </Nav.Item>
      </Link>

      <Link href='/docs/showcase/joke-by-id'>
        <Nav.Item>
          <Nav.Link
            eventKey='/docs/showcase/joke-by-id'
            href='/showcase/joke-by-id'>
            Joke By Id
          </Nav.Link>
        </Nav.Item>
      </Link>

      <Link href='/docs/showcase/joke-by-type'>
        <Nav.Item>
          <Nav.Link
            eventKey='/docs/showcase/joke-by-type'
            href='/docs/showcase/joke-by-type'>
            Joke By Type
          </Nav.Link>
        </Nav.Item>
      </Link>

      <Link href='/docs/showcase/search-jokes'>
        <Nav.Item>
          <Nav.Link
            eventKey='/docs/showcase/search-jokes'
            href='/docs/showcase/search-jokes'>
            Search Jokes
          </Nav.Link>
        </Nav.Item>
      </Link>
    </Nav>
  );
};

export default ShowcaseNavigation;
