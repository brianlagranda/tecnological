import React from 'react';
import { useState } from 'react';
import './itemcount.css';

const ItemCount = ({ addToCart, stock }) => {
  const [quantity, setQuantity] = useState(0);

  const addItem = num => {
    if (stock > quantity) setQuantity(quantity + num);
  };

  const handleClick = () => {
    quantity > 0
      ? addToCart(quantity)
      : alert('La cantidad debe ser mayor a 0');
  };

  return (
    <div className='itemcount_container'>
      <small>Agregá la cantidad deseada al carrito</small>
      <div className='itemcount_control'>
        <button
          className='btn'
          onClick={() => addItem(-1)}
          disabled={quantity === 0}
        >
          -
        </button>
        <span className='quantityInput'>{quantity}</span>
        <button
          className='btn'
          onClick={() => addItem(1)}
          disabled={quantity === stock}
        >
          +
        </button>
      </div>

      <div className='itemcount_btns'>
        <button className='btn' onClick={handleClick}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
