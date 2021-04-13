import React, { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const user = useSelector((state: RootState) => state.profile.user.body);
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  const logout = () => {
    localStorage.setItem('token', null);
    setToken(null);
  };

  return (
    <Navbar className='justify-content-between' expand='lg'>
      <Nav>
        <Link href='/'>
          <Navbar.Brand href='/' style={{ cursor: 'pointer' }}>
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

            {token ? (
              <>
                <Link href={`/profile/${user._id}`}>
                  <Nav.Link href={`/profile/${user._id}`}>Profile</Nav.Link>
                </Link>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              </>
            ) : (
              <Link href='/login'>
                <Nav.Link href='/login'>Login</Nav.Link>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
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
    </Navbar>
  );
};

export default Navigation;
