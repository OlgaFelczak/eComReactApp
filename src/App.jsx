import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'Product',
    element: <Product />,
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
