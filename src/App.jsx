import React from 'react'
import './App.css'
import Header from './components/Header'
import LatestProducts from "./components/LatestProducts"
import Carousel from "./components/Carousel"
import Footer from "./components/Footer"

function App() {
 return (
    <div className="App">
      <Header />
      <LatestProducts />
      <Carousel /> 
      <Footer />
    </div>
  )
}

export default App
