import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import SearchItem from './components/searchItem/SearchItem'
import Footer from './components/footer/Footer'
import React from 'react'
function App() {
  

  return (
    <>
      <Navbar />
      <Header />
      <SearchItem />
      <Home />
      <Footer />
    </>
  )
}

export default App
