import React from 'react';
import { useAuth } from "./../../AuthContext";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./../Images/logo.png"


function Header({ username, onLogout }) {
  const { isLoggedIn } = useAuth(); 

  return (
    
    <Navbar expand="lg" className="nav" data-bs-theme="dark" bg="dark">
        <Navbar.Brand href="/"><img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}TypeTitan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/leaderboards">Leaderboards</Nav.Link>
          </Nav>
          <Nav className="me-auto"> 
            {isLoggedIn ? (
              <NavDropdown title={username} id="basic-nav-dropdown">
                <NavDropdown.Item href="/" onClick={onLogout}>
                  Signout
                </NavDropdown.Item>
              </NavDropdown>
            ) : null 
            }
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  );
}

export default Header;
