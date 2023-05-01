import React from 'react';
import { Badge, Nav } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  const itemCount = 5; 

  return (
    <Nav.Link href="#">
      <FaShoppingCart />
      <Badge variant="secondary">{itemCount}</Badge>
    </Nav.Link>
  );
}

export default CartWidget;
