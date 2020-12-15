import React from 'react';
import { formatCurrency } from './utils';

export default function BasketItem( {item, onQuantityUpdate, onItemRemove } ) {

  function changeQuantityHandler(event) {
    console.log(`${item.name} to ${event.target.value}`);
    const newQuantity = parseInt(event.target.value, 10);
    if(newQuantity > 0) {
      onQuantityUpdate(item, newQuantity);
    }
  }

  function removeHandler() {
    // console.log(`Remove ${item.name}`);
    onItemRemove(item);

  }


  return (
    <div>
      <p>Basket Item {item.name} -  {formatCurrency(item.price)} x {item.quantity} = {formatCurrency(item.price * item.quantity)}</p>
      <input type="number" min="1" max="100" value={item.quantity} onChange={changeQuantityHandler}/>
      <button onClick={removeHandler}>Remove</button>
    </div>
  )
}
