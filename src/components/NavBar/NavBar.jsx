import React from 'react'
import './NavBar.css'
import logoimg from '../../Img/logo-altitude.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import CartWidget from '../CartWidget/CartWidget'

function NavBar () {
  return (
      <Navbar expand="lg" className="bg-body-tertiary" style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Container>
            <Navbar.Brand as={NavLink} to='/'>
                <img className="imglogo" src={logoimg} alt="logo-altitude" width={120} height={100} width={140}/>      
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                  <Nav.Link as={NavLink} to='/'> Home </Nav.Link>
                  <NavDropdown title="Productos" id="basic-nav-dropdown" to='/Products'>
                    <NavDropdown.Item as={NavLink} to='/Products/pedulas' > Pédulas </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to='/Products/arneses' > Arneses </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to='/Products/mosquetones' > Mosquetones </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={NavLink} to='/Products'> Todos los productos </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              <NavLink to='/Cart'> <CartWidget/> </NavLink>
            </Navbar.Collapse>
          </Container>
      </Navbar>
  )
}

export default NavBar;