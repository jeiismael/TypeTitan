import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios';


function Header() {
  let apiLogin = "http://localhost/typetitan/src/Backend/login.php";
  const handleLogout = () => {
    let payload = {
      username: '',
      password: '',
    };
    axios.post(apiLogin, "auth=" + JSON.stringify(payload)).then((response) => {
      console.log(response);
    });

  }
  return (
    <Navbar expand="lg" className="nav" data-bs-theme="dark" bg="dark">
      <Container>
        <Navbar.Brand href="#home">Type Titan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Test Yourself</Nav.Link>
            <Nav.Link href="#link">Leaderboards</Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown" className='ml-auto'>
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" onClick={handleLogout}>
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