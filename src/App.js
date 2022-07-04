import React, {useState, useEffect} from 'react';
import './App.css';
import Brand from './components/brand/Brand'
import CTA from './components/calltoaction/CTA'
import Navbar from './components/navbar/Navbar'
import Footer from './containers/footer/Footer'
import Header from './containers/header/Header'
import Blog from './containers/blog/Blog'
import Possibility from './containers/possibility/Possibility'
import Features from './containers/features/Features'
import WhatGPT3 from './containers/whatGPT3/WhatGPT3'
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";

const override = css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align:center;
  width:100%;
  height:100vh;
  margin: auto auto;
  border-color: red;
`;

function App() {
  const [loading,setLoading]=useState(false);

useEffect(()=>{
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  }, 5000);
},[])

  return (
    <>
    {
      loading?
<HashLoader className='loader' css={override} color={"#4A90E2"} loading={loading} size={70} />
      :

    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
    }
    </>
  );
}

export default App;
