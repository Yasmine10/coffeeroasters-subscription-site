import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './App.css'

import Header from "./components/general/Header";
import Footer from "./components/general/Footer";

import Home from "./views/Home";
import About from "./views/About";
import Subscribe from "./views/Subscribe";

function App() {

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="about-us" element={<About />} />
        <Route path="create-your-plan" element={<Subscribe />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
