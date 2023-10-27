import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleLogOut = () => {
    setIsLoggedIn(false);
  }
  return (
    <Navbar expand="lg" className="nav" data-bs-theme="dark" bg="dark">
      <Container>
        <Navbar.Brand href="/">Type Titan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/leaderboards">Leaderboards</Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown" className='ml-auto'>
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/" onClick={handleLogOut}>
                Signout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;