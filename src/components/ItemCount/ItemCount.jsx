import React, { useState } from 'react';

export default function ItemCount({ initialQuantity }) {
    const [quantity, setQuantity] = useState(initialQuantity);

    function handleIncrement() {
        if (quantity >= 0)
            setQuantity(quantity + 1);
    }

    function handleDecrement() {
        if (quantity > 0)
            setQuantity(quantity - 1);
    }

    return (
        <div>
            <button onClick={handleDecrement}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
}
