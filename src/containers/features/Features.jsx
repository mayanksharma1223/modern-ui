import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';
import { useEffect } from 'react';
import Aos from 'aos'
import "aos/dist/aos.css"

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
];



const Features = () => {
  useEffect(()=>{
    Aos.init();
  })
  return (
    <div className="features section__padding" id="features">
      <div className="features-heading" data-aos="fade-right" data-aos-duration="700">
        <h1 className="gradient__text">
          The Future is Now and You Need To Realize it. Step into Future Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="features-container" data-aos="fade-up" data-aos-duration="800" >
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
      </div>
    </div>
  )
}

export default Features