import React from 'react';
import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CustomButton from '../components/customButton';

import { clearAllBrowserStorage, getTokensFn } from '../utils/browserStorage';

function NavBar() {
  const navigate = useNavigate();
  const { refresh, access } = getTokensFn();
  const isLogin = refresh && access;

  const handleLogout = () => {
    clearAllBrowserStorage();
    navigate('/login', { replace: true });
  };

  const handleBookmark = () => {
    navigate('/bookmarks', { replace: true });
  };

  return (
    <Navbar bg="secondary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer', fontWeight: 600, color: '#fff' }}
        >
          APP-HOME
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          // className="navbar-dark text-light"
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-lg-flex flex-row justify-content-end"
        >
          <Nav className="mt-2 mt-lg-0 ms-2 me-2">
            {isLogin ? (
              <CustomButton
                isLoading={false}
                btnTxt="Bookmarks"
                variant="outline-light"
                handleClick={handleBookmark}
              />
            ) : null}
          </Nav>
          <Nav className="mt-2 mt-lg-0 ms-2 me-2">
            {isLogin ? (
              <CustomButton
                isLoading={false}
                btnTxt="Logout"
                variant="outline-light"
                handleClick={handleLogout}
              />
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
