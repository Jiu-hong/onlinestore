import '../styles/globals.css';
import ProductsContextProvider from './contexts/ProductsContext';
import CartContextProvider from './contexts/CartContext';
import UserContextProvider from './contexts/userContext';
import FunctionContextProvider from './contexts/functionContext';
import Amplify from 'aws-amplify';
import config from '../config';

Amplify.configure({
  ...config,
});

//import App from 'next/app';
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <UserContextProvider>
        <FunctionContextProvider>
          <ProductsContextProvider>
            <CartContextProvider>
              <Component {...pageProps} />
            </CartContextProvider>
          </ProductsContextProvider>
        </FunctionContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default MyApp;
