import React, { useState, useEffect } from 'react';
import BasketItem from './BasketItem';
import { formatCurrency } from './utils';
import styles from './Basket.module.css';

export default function Basket({ basket, onBasketUpdate }) {

  const [totalPrice, setTotalPrice] = useState( 0 );

  useEffect(() => {
    // Calculate price of basket
    let basketTotal = 0;
    basket.forEach((item) => {
      basketTotal += item.price * item.quantity;
    });
    setTotalPrice(basketTotal);
  }, [basket]);

  function quantityUpdateHandler(item, newQuantity) {
    let clone = [...basket].map((basketItem) => {
      if (basketItem.id === item.id) {
        basketItem.quantity = newQuantity;
      }
      return basketItem;
    });
    
    onBasketUpdate(clone);
  }

  function itemRemoveHandler(item) {
    console.log(`Basket - Remove ${item.name} from basket`);
    const clone = [...basket].filter((basketItem) => {
      return basketItem.id !== item.id;
    });

    onBasketUpdate(clone);
    
  }

  return (
    <div className={styles.blue}>
      <h2>Your Basket - {formatCurrency(totalPrice)}</h2>
      {basket.map(item => {
        return <BasketItem key={item.id} item={item} onQuantityUpdate={quantityUpdateHandler} onItemRemove={itemRemoveHandler}/>
      })}
    </div>
  )
}
