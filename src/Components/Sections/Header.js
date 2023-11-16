import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from "./../../AuthContext";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./../Images/logo.png";

function Header({ onLogout, onLogin, username }) {
  const { isLoggedIn, logout, login } = useAuth();
  const location = useLocation();
  
  const [user, setUser] = useState('');

  useEffect(() => {
    if (isLoggedIn) {
      setUser(username);
      console.log(username);
      
    } else {
      logout(); 
    }
  }, [isLoggedIn]);
  

  return (
    <Navbar expand="lg" className="nav" data-bs-theme="dark" bg="dark">
      <Navbar.Brand href="/">
        <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" />{' '}
        TypeTitan
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/leaderboards" isActive={() => location.pathname === '/leaderboards'}>
            Leaderboards
          </Nav.Link>
        </Nav>
        <Nav className="me-auto">
          {isLoggedIn ? (
            <NavDropdown title="Kodego" id="basic-nav-dropdown">
              <NavDropdown.Item href="/" onClick={onLogout}>
                Signout
              </NavDropdown.Item>
            </NavDropdown>
          ) : null}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;