import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  return (
    <Navbar className='justify-content-between' expand='lg'>
      <Link href='/'>
        <Navbar.Brand style={{ cursor: "pointer" }}>DadJokes.io</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav style={{ textAlign: "center" }} className='mr-auto'>
          <Link href='/showcase'>
            <Nav.Link href='/showcase'>Showcase</Nav.Link>
          </Link>
          <Link href='/documentation'>
            <Nav.Link href='/documentation'>Docs</Nav.Link>
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
