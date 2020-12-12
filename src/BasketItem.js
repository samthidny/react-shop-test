import React from 'react';
import { formatCurrency } from './utils';

export default function BasketItem( {item } ) {
  return (
    <div>
      <p>Basket Item {item.name} -  {formatCurrency(item.price)} x {item.quantity} = {formatCurrency(item.price * item.quantity)}</p>
    </div>
  )
}
