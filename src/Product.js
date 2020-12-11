import React from 'react';
import { useState } from 'react';

export default function Product( { item, addToBasket } ) {
  
  const [product, setProduct] = useState(item);

  function addHandler(e) {
    console.log('Add product to basket ', product.name, product.quantity);
    const clone = Object.create(product);
    addToBasket(clone);
  }

  function quantityChangeHandler(e) {
    const clone = Object.create(product);
    clone.quantity = parseInt(e.target.value, 10);
    console.log('Quantity changed ' + clone.quantity);
    setProduct(clone);
  }
  
  return (
    <div>
      <p>{product.name} - {product.price}</p>
      <input type="number" min="1" max="100" value={product.quantity} onChange={quantityChangeHandler}></input>
      <button onClick={addHandler}>Add to Basket</button>
    </div>
  )
}
