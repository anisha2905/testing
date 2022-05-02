import React from 'react'
import './body.css';
import { ImageList } from '@material-ui/core';
import image1 from '../assets/1.jpg'
import image2 from '../assets/2.jpg'
import image3 from '../assets/3.jpg'
import image4 from '../assets/4.jpg'
import image5 from '../assets/5.jpg'



const Siderbarright = () => {
  return (
      
    <div>
    <ImageList>
    <img src={image1} alt=" " className="sliderimg1"/>
    <img src={image2} alt=" " className="sliderimg1"/>
    <img src={image3} alt=" " className="sliderimg1"/>
    <img src={image4} alt=" " className="sliderimg1"/>
    <img src={image5} alt=" " className="sliderimg1"/>
    </ImageList>
</div>
    
  )
}

export default Siderbarright