import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header({ isLoggedIn, username, onLogout, onLoginClick }) {
  return (
    <Navbar expand="lg" className="nav" data-bs-theme="dark" bg="dark">
      <Container>
        <Navbar.Brand href="/">TypeTitan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/leaderboards">Leaderboards</Nav.Link>
          </Nav>
          <Nav className="ml-auto"> 
            {isLoggedIn ? (
              <NavDropdown title={username} id="basic-nav-dropdown">
                <NavDropdown.Item href="/" onClick={onLogout}>
                  Signout
                </NavDropdown.Item>
              </NavDropdown>
            ) : []
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
