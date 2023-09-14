import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

function NavBar({texto, children}) {
  return (
    <Navbar expand="lg" className="body-tertiary" bg="info">
      <Container className="fondo-nav">
        <Navbar.Brand className="titulo-tienda" href="#home">Altitude</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Equipo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Cuerdas, Cintas y Cordines
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Material de Escalada</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
    </Navbar>
  );
}

export default NavBar;