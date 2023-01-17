import { useState } from "react";
import "./itemcount.css";

function ItemCount() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    // count < stock

    setCount(count + 1);
  }

  function handleSubstract() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  const handleQuantityChange = (event) => {
    const value = event.target.value;
    if (value.match(/^[1-9]$/)) {
      setCount(parseInt(value));
    }
  }

  return (
    <div className="itemcount_container">
      <small>Agregá la cantidad deseada al carrito</small>
      <div className="itemcount_control">
        <button className="btn" onClick={handleSubstract}>
          -
        </button>
        <input className="quantityInput" type="text" value={count} onChange={handleQuantityChange} />
        <button className="btn" onClick={handleAdd}>
          +
        </button>
      </div>

      <div className="itemcount_btns">
        <button className="btn" onClick={() => alert("onAddToCart")}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
