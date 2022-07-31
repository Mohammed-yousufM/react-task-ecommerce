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

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')}>My-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-lg-flex flex-sm-row-reverse"
        >
          <Nav className="mt-2 mt-lg-0">
            {isLogin ? (
              <CustomButton
                isLoading={false}
                btnTxt="Logout"
                variant="outline-primary"
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
