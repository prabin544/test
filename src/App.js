import React from 'react';
import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
import Contact from './Components/Contact';
import Presentation from './Components/Presentation';
import aboutimage from './images/Frame_191.png';
import aboutimage1 from './images/download.png';
import { Routes ,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
      <Feature />
      <About image={aboutimage} title='Comes with all you need' button='Get the App' />
      <Presentation />
      <About image={aboutimage1} title='Download and Get the App Now' button='Download' />
      <Contact/>
    </div>
  );
}

export default App;
