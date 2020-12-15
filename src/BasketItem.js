import React from 'react';
import { formatCurrency } from './utils';

export default function BasketItem( {item, onQuantityUpdate } ) {

  function changeQuantityHandler(event) {
    console.log(`${item.name} to ${event.target.value}`);
    const newQuantity = parseInt(event.target.value, 10);
    if(newQuantity > 0) {
      onQuantityUpdate(item, newQuantity);
    }
  }


  return (
    <div>
      <p>Basket Item {item.name} -  {formatCurrency(item.price)} x {item.quantity} = {formatCurrency(item.price * item.quantity)}</p>
      <input type="number" min="1" value={item.quantity} onChange={changeQuantityHandler}/>
    </div>
  )
}
