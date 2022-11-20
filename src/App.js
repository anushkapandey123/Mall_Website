import React from 'react';  
import Footer from "./Footer.js";
import Header from "./Header.js";
import Food from "./mainFile.js";
import Fashion from "./Fashion.js"
import './App.css';

function App() {
  return (
    <div >
     
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Header />
        <Food />
        <Fashion />
        {/* <Footer /> */}
     
    
      
        </div>
    
  );
}

export default App;
