import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Bienvenido a nuestra tienda Istore</h1>
      <Link to="/products">Haz clic aquí para conocer nuestros productos</Link>
    </div>
  );
}

export default Home;
    