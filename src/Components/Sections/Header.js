import React from 'react';
import { useAuth } from "./../../AuthContext";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header({ username, onLogout }) {
  const { isLoggedIn } = useAuth(); // Removed 'login' and 'logout' as they are not needed here

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
            ) : null // Use 'null' instead of an empty array
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
