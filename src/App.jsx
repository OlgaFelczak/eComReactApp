import React from 'react';
import Header from './components/Header';
import LatestProducts from './components/LatestProducts';
import ShopCarousel from './components/ShopCarousel';
import Footer from './components/Footer';
import HomeJumbotron from './components/Jumbotron';

function App() {
  return (
    <div className='App'>
      <Header />
      <HomeJumbotron />
      <LatestProducts />
      <ShopCarousel />
      <Footer />
    </div>
  );
}

export default App;
