import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Collapse, Nav } from 'react-bootstrap';

export default function DocsNavigation() {
  const [openEndpoint, setOpenEndpoint] = useState<boolean>(true);
  const router = useRouter();

  const toggleEndpoints = () => {
    setOpenEndpoint((prevstate) => !prevstate);
  };

  return (
    <>
      <Nav
        activeKey={router.pathname}
        style={{
          height: '100vh',
          overflowY: 'scroll',
          maxHeight: '50vh',
        }}
        className='flex-column'>
        <Link href='/docs/documentation/getting-started'>
          <Nav.Link
            eventKey='/docs/documentation/getting-started'
            href='/getting-started'>
            Getting Started
          </Nav.Link>
        </Link>
        <Nav.Link onClick={toggleEndpoints}>Endpoints</Nav.Link>
        <Collapse in={openEndpoint}>
          <div>
            <Link href='/docs/documentation/endpoints/random-jokes'>
              <Nav.Link href='/docs/documentation/endpoints/random-jokes'>
                &emsp; Random Joke
              </Nav.Link>
            </Link>
            <Link href='/docs/documentation/endpoints/joke-by-id'>
              <Nav.Link href='/docs/documentation/endpoints/joke-by-id'>
                &emsp; Joke By ID
              </Nav.Link>
            </Link>
            <Link href='/docs/documentation/endpoints/joke-by-type'>
              <Nav.Link href='/docs/documentation/endpoints/joke-by-type'>
                &emsp; Joke By Type
              </Nav.Link>
            </Link>
            <Link href='/docs/documentation/endpoints/search-jokes'>
              <Nav.Link href='/docs/documentation/endpoints/search-jokes'>
                &emsp; Search Jokes
              </Nav.Link>
            </Link>
          </div>
        </Collapse>
      </Nav>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Montserrat', sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
