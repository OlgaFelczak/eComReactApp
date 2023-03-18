import React from 'react';
import LatestProducts from '../components/LatestProducts';
import ShopCarousel from '../components/ShopCarousel';
import HomeJumbotron from '../components/Jumbotron';

const Home = () => {
  return (
    <>
      <HomeJumbotron />
      <LatestProducts />
      <ShopCarousel />
    </>
  );
};

export default Home;
