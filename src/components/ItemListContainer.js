import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import { Row, Col } from 'react-bootstrap';

const mockItems = [
  { id: '1', title: 'Ipods', image: '../img/cargadorinalambrico.jpg', description: 'Ipods description...' },
  { id: '2', title: 'Cargador inalambrico', image: 'ruta/a/imagen2.jpg', description: 'Cargador inalambrico description...' },
  { id: '3', title: 'Magic Mouse', image: 'ruta/a/imagen3.jpg', description: 'Magic Mouse description...' },
  { id: '4', title: 'Cargador', image: 'ruta/a/imagen4.jpg', description: 'Cargador description...' },
  { id: '5', title: 'Auriculares', image: 'ruta/a/imagen5.jpg', description: 'Auriculares description...' },
  { id: '6', title: 'Apple Watch', image: 'ruta/a/imagen6.jpg', description: 'Apple Watch description...' },
  { id: '7', title: 'Mac', image: 'ruta/a/imagen7.jpg', description: 'Mac description...' },
  { id: '8', title: 'Cargador rapido', image: 'ruta/a/imagen8.jpg', description: 'Cargador rapido description...' },
];

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      setItems(mockItems.filter(item => item.categoryId === categoryId));
    } else {
      setItems(mockItems);
    }
  }, [categoryId]);

  return (
    <Row>
      {items.map((item) => (
        <Col key={item.id} sm={12} md={6} lg={3}>
          <Item item={item} />
        </Col>
      ))}
    </Row>
  );
}

export default ItemListContainer;
