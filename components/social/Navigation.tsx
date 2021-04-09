import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

const Navigation = () => {
  return (
    <Navbar className='justify-content-between' expand='lg'>
      <Link href='/docs'>
        <Navbar.Brand href='/docs' style={{ cursor: 'pointer' }}>
          DadJokes.io
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav style={{ textAlign: 'center' }} className='mr-auto'>
          <Link href='/browse'>
            <Nav.Link href='/browse'>Browse</Nav.Link>
          </Link>
          <Link href='/categories'>
            <Nav.Link href='/categories'>Categories</Nav.Link>
          </Link>
          <Link href='/docs'>
            <Nav.Link href='/docs'>API</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
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
    </Navbar>
  );
};

export default Navigation;
