import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Image from 'next/image';
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
          <Link href='/docs/showcase/random-jokes'>
            <Nav.Link href='/docs/showcase/random-jokes'>Showcase</Nav.Link>
          </Link>
          <Link href='/docs/documentation/getting-started'>
            <Nav.Link href='/docs/documentation/getting-started'>Docs</Nav.Link>
          </Link>
          <Nav.Link href='#link'>Blog</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href='https://github.com/KegenGuyll/Dad_Jokes_API'>
            <Image
              src='/images/GithubIcon.svg'
              alt='GitHubIcon'
              width='32'
              height='32'
            />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
