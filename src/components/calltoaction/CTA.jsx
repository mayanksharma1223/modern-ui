import React from 'react';
import './cta.css';
import { useEffect } from 'react';
import Aos from 'aos'
import "aos/dist/aos.css"

const CTA = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
  })
  return(
  <div className="cta" data-aos="fade-up">
    <div className="cta-content">
      <p>Request Early Access to Get Started</p>
      <h3>Register Today & start exploring the endless possibilities.</h3>
    </div>
    <div className="cta-btn">
      <button type="button">Get Started</button>
    </div>
  </div>
);}

export default CTA;