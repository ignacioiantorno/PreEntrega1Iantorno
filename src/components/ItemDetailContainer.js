import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  let { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
  
    const mockItem = {
      id,
      title: `Artículo ${id}`,
      image: 'url_de_imagen'
    };

    setItem(mockItem);
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.title} />
    </div>
  );
}

export default ItemDetailContainer;
