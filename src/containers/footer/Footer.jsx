import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';
import { useEffect } from 'react';
import Aos from 'aos'
import "aos/dist/aos.css"

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
  })
  return(
  <div className="footer section__padding">
    <div className="footer-heading" data-aos="fade-up">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="footer-btn" data-aos="fade-up">
      <p>Request Early Access</p>
    </div>

    <div className="footer-links" data-aos="fade-right">
      <div className="footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="footer-copyright" >
      <p>@2021 GPT-3. All rights reserved.</p>
    </div>
  </div>
);}

export default Footer;