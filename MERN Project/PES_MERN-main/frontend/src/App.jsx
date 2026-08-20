import React from 'react'

import User from './components/User'
import State from './components/State'
import From from './components/From'
import Effect from './components/Effect'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'

import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'


const App = () => {

  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/service" element={<Service />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/form" element={<From />} />

        <Route path="/effect" element={<Effect />} />

        <Route path="/state" element={<State />} />

        <Route path="/user" element={<User />} />

        <Route path="/products" element={<Products />} />

        <Route path="/products/:id" element={<ProductDetails />} />

      </Routes>
    </>
  )
}

export default App