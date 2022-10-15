import React, {createContext, useState} from 'react'

export const CartContext = createContext();

export function CartProvider(props) {
  const [items, setItems] = useState([]);
  
  function addItemToCart(product) {
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.id == product.id));
      if(!item) {
          return [...prevItems, {
              qty: 1,
              product,
              totalPrice: product.price 
          }];
      }
      else { 
          return prevItems.map((item) => {
            if(item.id == product.id) {
              item.qty++;
              item.totalPrice += product.price;
            }
            return item;
          });
      }
    });

  }

  function getItemsCount() {
      return items.reduce((sum, item) => (sum + item.qty), 0);
  }
  
  function getTotalPrice() {
      return items.reduce((sum, item) => (sum + item.totalPrice), 0);
  }  
  
  return (
    <CartContext.Provider 
      value={{items, setItems, getItemsCount, addItemToCart, getTotalPrice}}>
      {props.children}
    </CartContext.Provider>
  );
}

