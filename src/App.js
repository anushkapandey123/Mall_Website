import React from 'react';  
import Footer from "./Footer.js";
import Header from "./Header.js";
import Services from './MallServices.js';
import Food from "./mainFile.js";
import Fashion from "./Fashion.js"
import './App.css';
function Home() {
  return (
    <div >
        <Header />
        <Services />
        <Food />
        <Fashion />
        </div>
    
  );
}

export default Home;
