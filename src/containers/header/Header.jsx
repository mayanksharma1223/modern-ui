import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import { useEffect } from 'react';
import Aos from 'aos'
import "aos/dist/aos.css"

const Header = () => {
useEffect(()=>{
  Aos.init({duration:2500});
})


const container= function (e) {
let X=e.pageX;
let Y=e.pageY;
let layer=document.querySelector('.header-img')
layer.style.transform='translate('+ X/100*2 +'px,'+ Y/100*2 +'px)'
}



  return (
    <div className="header section__padding" id='home'>
      <div className="header-content" data-aos="fade-right">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className="header-content__input">
          <input type='email' placeholder='Your Email Address'/>
          <button type='button'>Get Started</button>
        </div>
        <div className="header-content__people">
          <img src={people} alt='people'/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
        <div className="header-image" data-aos="fade-left" onMouseMove={container}>
          <img className='header-img' src={ai} alt="ai" />
        </div>

    </div>
  )
}

export default Header