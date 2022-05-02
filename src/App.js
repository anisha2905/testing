import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import Body from './components/Body'
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Body/>
      <Footer/>
      
    </BrowserRouter>
  );
}

export default App;
