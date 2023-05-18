import React, { useContext } from 'react';
import { Badge, Nav } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../CartContext';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const itemCount = Object.values(cart).reduce((total, item) => total + item.quantity, 0);

  return (
    <Nav.Link href="#">
      <FaShoppingCart />
      {itemCount > 0 && <Badge variant="secondary">{itemCount}</Badge>}
    </Nav.Link>
  );
};

export default CartWidget;
