import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product, { loader as productLoader } from './pages/Product';
import About from './pages/About';
import Cancel from './pages/Cancel';
import Success from './pages/Success';
import Store from './pages/Store';
import CartProvider from './store/CartContext';
import ProductsProvider from './store/ProductsContext';
import './styles/style.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: 'product/:productId',
    element: <Product />,
    loader: productLoader,
  },
  {
    path: 'cancel/',
    element: <Cancel />,
  },
  {
    path: 'success/',
    element: <Success />,
  },
  {
    path: 'store/',
    element: <Store />,
  },
]);

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <CartProvider>
          <Header />
          <RouterProvider router={router} />
          <Footer />
        </CartProvider>
      </ProductsProvider>
    </div>
  );
}

export default App;
