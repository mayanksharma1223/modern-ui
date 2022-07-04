import React from 'react';
import './whatGPT3.css';
import Feature from '../../components/feature/Feature';
import { useEffect } from 'react';
import Aos from 'aos'
import "aos/dist/aos.css"

const WhatGPT3 = () => {
  useEffect(()=>{
    Aos.init({duration:800});
  })
  return (
    <div  className="whatgpt3 section__margin" id='wgpt3'>
      <div className="whatgpt3-feature" data-aos="fade-up">
        <Feature title='What is GPT-3' text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
      </div>
      <div className="whatgpt3-heading">
        <h1 className="gradient__text" data-aos="fade-right">The possibilities are beyond your imagination</h1>
        <p data-aos="fade-left">Explore the Library</p>
      </div>
      <div className="whatgpt3-container" data-aos="fade-down">
      <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments " />
      <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments " />

      </div>
    </div>
  )
}

export default WhatGPT3