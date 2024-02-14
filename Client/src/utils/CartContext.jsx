import React, { createContext, useReducer, useContext, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
      case 'UPDATE_QUANTITY':

        const newItems = state.items.map(item => {
          return item._id !== action.payload._id ? item : action.payload})

        return {
          ...state,
          items: [...newItems],
        };

        case 'LOAD_CART':
      return {
        ...state,
        cart: action.payload 
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const initialCartState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : { items: [] };
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
