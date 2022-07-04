import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';
import { useEffect } from 'react';
import Aos from 'aos'
import "aos/dist/aos.css"

const Possibility = () =>{

  const container= function (e) {
    let X=e.pageX;
    let Y=e.pageY;
    let layer=document.querySelector('.posssibilty-img')
    layer.style.transform='translate('+ X/100*2 +'px,'+ Y/100*2 +'px)'
    }
    useEffect(()=>{
      Aos.init({duration:1000});
    })
  return (
  <div className="possibility section__padding" id="possibility">
    <div className="possibility-image" data-aos="fade-right"  onMouseMove={container} >
      <img className='posssibilty-img' src={possibilityImage} alt="possibility" />
    </div>
    <div className="possibility-content" data-aos="fade-left">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);
  }

export default Possibility;