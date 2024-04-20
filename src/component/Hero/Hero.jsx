import React from 'react'
import './Hero.css' 
//import hand_icon from '../Assets/Assets/hand_icon.png'
import arrow from '../Assets/Assets/arrow.png'

 const Hero = () => {
  return (
    <div className='hero'>
<div className="hero-left">
    <h1>JULIVIN TEXTILES AND RTW</h1>
    <div>
        <div className='hero-hand-icon'>
            <p>new</p>
            <img src= {"https://thumbs.dreamstime.com/b/beautiful-girl-wearing-fashion-dress-field-lavender-beautiful-girl-wearing-fashion-dress-field-lavender-provence-309984333.jpg?w=768"}alt="" />
        </div>
        <p>products</p>
        
        <p>for everyone</p>
    </div>
    <div className="hero-latest-btn">
        <div>LATEST ARRIVAL</div>
        <img src={arrow} alt="" />
    </div>
    </div>
    <div className="hero-right">
  <img src= "https://p7.hiclipart.com/preview/643/503/608/textile-india-woven-fabric-printing-retail-fabric.jpg" alt=''/>
   
    </div>
    </div>
  )
}
export default Hero;
//"https://cdn.iconscout.com/icon/premium/png-512-thumb/login-2651140-2198240.png?f=webp&w=256"
//https://cdn.iconscout.com/icon/premium/png-512-thumb/marketing-1715371-1456153.png?f=webp&w=256