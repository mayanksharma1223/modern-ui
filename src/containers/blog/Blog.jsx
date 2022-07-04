import React from 'react';
import Article from '../../components/article/Article';
import blog01 from '../../assets/blog01.png';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.png';
import './blog.css';
import { useEffect } from 'react';
import Aos from 'aos'
import "aos/dist/aos.css"

const Blog = () =>{
  useEffect(()=>{
    Aos.init();
  })
  return (
  <div className="blog section__padding" id="blog">
    <div className="blog-heading" data-aos="fade-right" data-aos-duration="700">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="blog-container">
      <div className="blog-container_groupA"  data-aos="fade-right" data-aos-duration="900">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="blog-container_groupB" data-aos="fade-up" data-aos-duration="1000">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article  imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);}

export default Blog;