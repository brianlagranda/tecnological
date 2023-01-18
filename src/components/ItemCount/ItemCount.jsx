import React from 'react';
import { useState } from 'react';
import './itemCount.css';

const ItemCount = ({ start, stock }) => {

  const [cant, setCant] = useState(start);

  const addItem = (num) => {
    setCant(cant + num);
  };

  return (

    <div className="itemcount_container">
      <small>Agregá la cantidad deseada al carrito</small>
      <div className="itemcount_control">
        <button
          className="btn"
          onClick={() => addItem(-1)}
          disabled={cant === start}
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
        <button className="btn">
          Agregar al carrito
        </button>
      </div>

    </div>
  );
};

export default ItemCount;
