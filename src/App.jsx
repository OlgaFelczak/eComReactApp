import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product, { loader as productLoader } from './pages/Product';

import Cancel from './pages/Cancel';
import Success from './pages/Success';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'product/:productId',
    element: <Product />,
    loader: productLoader,
  },
  {
    path: "cancel/",
    element: <Cancel />,
  },
  {
    path: "success/",
    element: <Success />,
  },
]);

function App() {
  return (
    <div className='App'>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
