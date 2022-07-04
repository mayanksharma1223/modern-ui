import React,{useEffect} from 'react';
import './brand.css';
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'
import Aos from 'aos'
import "aos/dist/aos.css"

const Brand = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
  })
  return (
    <div className="brand section__padding" data-aos="fade-up">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brand