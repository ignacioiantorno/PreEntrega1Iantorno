import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  const menuItems = [
    { title: 'Inicio', path: '/', exact: true },
    { title: 'Productos', path: '/products', exact: false },
    { title: 'Contacto', path: '/contact', exact: false }
  ];

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">IStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {menuItems.map((menuItem, index) => (
              <Nav.Link key={index} as={NavLink} to={menuItem.path} exact={menuItem.exact}>
                {menuItem.title}
              </Nav.Link>
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
