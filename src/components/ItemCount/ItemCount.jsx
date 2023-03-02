import React from 'react';
import { useState } from 'react';
import './itemcount.css';

const ItemCount = ({ addToCart, stock }) => {

  const [cant, setCant] = useState(0);

  const addItem = (num) => {
    if (stock > cant)
      setCant(cant + num);
  };

  return (

    <div className="itemcount_container">
      <small>Agregá la cantidad deseada al carrito</small>
      <div className="itemcount_control">
        <button
          className="btn"
          onClick={() => addItem(-1)}
          disabled={cant === 0}
        >
          -
        </button>
        <span className="quantityInput">{cant}</span>
        <button
          className="btn"
          onClick={() => addItem(+1)}
          disabled={cant === stock}
        >
          +
        </button>
      </div>

      <div className="itemcount_btns">
        <button className="btn" onClick={() => addToCart(cant)}>
          Agregar al carrito
        </button>
      </div>

    </div>
  );
};

export default ItemCount;
