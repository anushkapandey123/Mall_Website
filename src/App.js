import React from 'react';  
import Footer from "./Footer.js";
import Header from "./Header.js";
import Services from './MallServices.js';
import Food from "./mainFile.js";
import Fashion from "./Fashion.js"
import './App.css';
import Movies from "./Movies.js"
function Home() {
  return (
    <div >
        <Header />
        <Services />
        <Food />
        <Fashion />
        <Movies />
        <Footer/>
    </div>
    
  );
}

export default Home;
