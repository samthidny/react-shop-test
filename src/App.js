import Basket from './Basket';
import Products from './Products';
import React, { useState } from 'react';
import styles from './App.module.css';

function App() {
  
  const quantity = 1;
  const products = [ {id: 0, name: 'Apples', price: 30, quantity}, {id: 1, name: 'Bananas', price: 40, quantity}, {id: 2, name: 'Pears', price: 55, quantity}];
  //const [basket, setBasket] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [state, setState] = useState({products, basket: []});

  function addToBasketHandler(product) {
    console.log('App - Add to basket ', product.name, product.quantity);

    // Check if we already have the product in the basket
    const existingItem = state.basket.find(basketItem => {
      return basketItem.id === product.id;
    })

    if(existingItem) {
      const adjustedBasket = [...state.basket];
      const basketItem = adjustedBasket.find(item => {
        return item.id === existingItem.id
      });
      basketItem.quantity += product.quantity;
      console.log('increase quantity of ' + basketItem.name + ' from ' + basketItem.quantity + ' + ' + product.quantity, adjustedBasket);
      //setBasket(adjustedArray);
      setState({ products: state.products, basket: adjustedBasket });
      
    } else {
      // Add item to array
      console.log('adding product to basket', product);
      setState({ products: state.products, basket: [...state.basket, product] });

    }   
  };

  function basketUpdateHandler(basket) {
    setState({products, basket});
  }

  return (
    <div className="App">
      <h2>App</h2>
      <Products products={state.products} addToBasket={addToBasketHandler} />
      <Basket basket={state.basket} onBasketUpdate={basketUpdateHandler} />
    </div>
  );
}

export default App;
