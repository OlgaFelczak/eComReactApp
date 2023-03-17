import React from 'react';
import Header from './components/Header';
import LatestProducts from './components/LatestProducts';
import ShopCarousel from './components/ShopCarousel';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <LatestProducts />
      <ShopCarousel />
      <Footer />
    </div>
  );
}

export default App;
