import React, { createContext, useContext, useReducer } from 'react';

export const CartContextCount = createContext();
export const CartContextActionC = createContext();
export const CartContext = createContext();
export const CartContextAction = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE': {
      fetch('/api/user_addtocart_post', {
        method: 'post',
        body: JSON.stringify({
          count: 1,
          itemid: action.payload._id,
          user: action.user,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('data: ', data);
        });
      return state + 1;
    }

    case 'DECREASE':
      return state - 1;
    case 'INCREASE_BY':
      return JSON.parse(JSON.stringify(action.payload));
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const reducer1 = (state, action) => {
  switch (action.type) {
    case 'GETALL': {
      var result;
      fetch('api/user_getallcart_post', {
        method: 'post',
        body: JSON.stringify({
          user: action.user,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          result = response.data;
          return result;
        })
        .catch(new Error(`error in ${action.type}`));
      return state.push(result);
    }
    default:
      throw new Error(`Unknown action1: ${action.type}`);
  }
};

const CartContextProvider = ({ children }) => {
  const [len, dispatch] = useReducer(reducer, 0);
  const [instances, dispatch1] = useReducer(reducer1, [{}]);
  console.log('state: in CartContext', instances);
  return (
    <CartContextCount.Provider value={len}>
      <CartContextActionC.Provider value={dispatch}>
        <CartContext.Provider value={instances}>
          <CartContextAction.Provider value={dispatch1}>
            {children}
          </CartContextAction.Provider>
        </CartContext.Provider>
      </CartContextActionC.Provider>
    </CartContextCount.Provider>
  );
};

export const useInslength = () => useContext(CartContextCount);
export const useInslenDispatch = () => useContext(CartContextActionC);
export const useInstance = () => useContext(CartContext);
export const useInsDispatch = () => useContext(CartContextAction);
export default CartContextProvider;
