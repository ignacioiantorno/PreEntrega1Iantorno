import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
  const menuItems = ['Inicio', 'Productos', 'Contacto'];

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">IStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {menuItems.map((menuItem, index) => (
              <Nav.Link key={index} href="#">{menuItem}</Nav.Link>
            ))}
          </Nav>
          <Nav>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
