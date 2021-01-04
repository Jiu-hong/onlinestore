import '../styles/globals.css';
import ProductsContextProvider from './contexts/ProductsContext';
import CartContextProvider from './contexts/CartContext';
import UserContextProvider from './contexts/userContext';
import FunctionContextProvider from './contexts/functionContext';
import InitialContextProvider from './contexts/initialContext';

//import App from 'next/app';
function MyApp({ Component, pageProps }) {
    return (
        <div>
            <InitialContextProvider>
                <UserContextProvider>
                    <FunctionContextProvider>
                        <ProductsContextProvider>
                            <CartContextProvider>
                                <Component {...pageProps} />
                            </CartContextProvider>
                        </ProductsContextProvider>
                    </FunctionContextProvider>
                </UserContextProvider>
            </InitialContextProvider>
        </div>
    );
}

export default MyApp;
//https://colinhacks.com/essays/building-a-spa-with-nextjs
