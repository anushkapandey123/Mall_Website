import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './App';
import EventReg from './form';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Eventreg" element={<EventReg />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
