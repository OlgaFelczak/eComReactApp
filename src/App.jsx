import React from 'react'
import './App.css'
import Header from './components/Header'
import Main from "./components/Main"
import Carousel from "./components/Carousel"
import Footer from "./components/Footer"

function App() {
 return (
    <div className="App">
      <Header />
      <Main />
      <Carousel /> 
      <Footer />
    </div>
  )
}

export default App