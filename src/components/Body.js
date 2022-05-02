import React from 'react'
import './body.css';
import Siderbar from './Siderbar';
import Main from './Main';
import Siderbarright from './Siderbarright';
import Navbar from './Navbar';
import Footer from './Footer';

const Body = () => {
  return (
  
    <div className="container">
      
      <Siderbar/>
        <Main/>
        <Siderbarright/>
        
      </div>
    
    
      
    
  )
}

export default Body