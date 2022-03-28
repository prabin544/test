import React from "react";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Presentation from "./Components/Presentation";
import aboutimage from "./images/Frame_191.png";
import aboutimage1 from "./images/download.png";
import { Routes, Route } from "react-router-dom";
import AutomationBox from "./Page/AutomationBox";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/automation" element={<AutomationBox />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
