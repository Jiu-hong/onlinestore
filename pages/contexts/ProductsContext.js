import React, { createContext, useContext, useState } from 'react';

export const ProductsContext = createContext();
export const ProductsContextAction = createContext();

const ProductsContextProvider = ({ children }) => {
  const [itemlen, setItemsLen] = useState(0);
  const [items, setItems] = useState('');
  return (
    <ProductsContext.Provider value={{ items, itemlen }}>
      <ProductsContextAction.Provider value={{ setItems, setItemsLen }}>
        {children}
      </ProductsContextAction.Provider>
    </ProductsContext.Provider>
  );
};

export const useItems = () => useContext(ProductsContext);
export const useItemsDispatch = () => useContext(ProductsContextAction);
export default ProductsContextProvider;
