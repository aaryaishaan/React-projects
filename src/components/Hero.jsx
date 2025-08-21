import React from 'react'
import './Hero.css';
const Hero = () => {
  return (
   <div className="hero-container">

<div className="containeer-text">
     {/* Container related text */}
    <div className="text-header">YOUR FEET DESERVE THE BEST </div>
    <div className="description">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</div>
    <div className="shop-category">
         
          {/* In this class shop-category is further other two classes/button  */}
        <button id="shop-now"> Shop Now </button>
        <button id="category"> Category </button>
        
         </div>
         <div className="also-shop-on"> 
            <div id="also-text"> Also Available On </div>
            <div id="also-logos"> 
                <img src="/flpkrt-logo.png" alt="Flipkart" id="flipkart" />
                <img src="/amazon-logo.png" alt="Amazon" id="amazon" />
            </div>
         </div>
     </div>
 <div className="shoe-image">
    <img src="/shoe-image.png" alt="Shoe-Image" className='image-shoe' />
     </div>

   </div>
  )
}

export default Hero