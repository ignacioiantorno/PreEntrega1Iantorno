import React, { useContext, useState } from 'react';
import { Card, Button, ButtonGroup, Toast } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

const Item = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [showCounter, setShowCounter] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (!showCounter) {
      setShowCounter(true);
    } else {
      addToCart({ ...item, quantity });
      setShowCounter(false);
      setShowToast(true);
    }
  };

  const handleToastClose = () => {
    setShowToast(false);
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <ButtonGroup aria-label="Basic example">
          <Button variant="primary" as={Link} to={`/products/${item.id}`}>
            Ver detalles
          </Button>
          {showCounter && (
            <>
              <ButtonGroup>
                <Button variant="secondary" onClick={handleDecrease}>-</Button>
                <Button variant="secondary" disabled>{quantity}</Button>
                <Button variant="secondary" onClick={handleIncrease}>+</Button>
              </ButtonGroup>
              <Button variant="success" onClick={handleAddToCart}>
                {showCounter ? 'Agregar al carrito' : 'Confirmar'}
              </Button>
            </>
          )}
          {!showCounter && (
            <Button variant="success" onClick={handleAddToCart}>
              Agregar al carrito
            </Button>
          )}
        </ButtonGroup>
        <Toast
          show={showToast}
          onClose={handleToastClose}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            margin: '10px',
          }}
        >
          <Toast.Header>
            <strong className="me-auto">Aviso</strong>
          </Toast.Header>
          <Toast.Body>{`${item.title} agregado al carrito`}</Toast.Body>
        </Toast>
      </Card.Body>
    </Card>
  );
};

export default Item;
