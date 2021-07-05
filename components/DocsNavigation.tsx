import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Collapse, Nav } from 'react-bootstrap';
import navigationCards from '../public/data/navigationCards.json';

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
        <Link href='/documentation/getting-started'>
          <Nav.Link
            eventKey='/documentation/getting-started'
            href='/getting-started'>
            Getting Started
          </Nav.Link>
        </Link>
        <Nav.Link onClick={toggleEndpoints}>Endpoints</Nav.Link>
        <Collapse in={openEndpoint}>
          <div>
            {navigationCards.map((card) => (
              <Link href={card.documentationLink}>
                <Nav.Link
                  title={card.description}
                  href={card.documentationLink}>
                  &emsp; {card.title}
                </Nav.Link>
              </Link>
            ))}
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
