import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();
export const CartContextAction = createContext();

const CartContextProvider = ({ children }) => {
  //const [len, dispatch] = useReducer(reducer, 0);
  const [inslen, setInsLen] = useState(0);
  const [instances, setInstances] = useState('');
  const [grouporders, setOrders] = useState('');
  const [itemCount, setItemCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [chkmsg, setChkmsg] = useState(false);
  const [cmtmsg, setCmtmsg] = useState('');

  return (
    <CartContext.Provider
      value={{
        inslen,
        instances,
        itemCount,
        total,
        grouporders,
        chkmsg,
        cmtmsg,
      }}
    >
      <CartContextAction.Provider
        value={{
          setInsLen,
          setInstances,
          setItemCount,
          setTotal,
          setOrders,
          setChkmsg,
          setCmtmsg,
        }}
      >
        {children}
      </CartContextAction.Provider>
    </CartContext.Provider>
  );
};

export const useIns = () => useContext(CartContext);
export const useInsDispatch = () => useContext(CartContextAction);
export default CartContextProvider;
