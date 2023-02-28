import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import { Routes,Route } from 'react-router-dom';    
import Slider  from './Components/Slider/Slider';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import Clients from './Components/Our Clients/Clients';


function App() {
  return (
  
  <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/Slider' element={<Slider /> }/>
      <Route path='/' element={<Home /> }/>
      <Route path='/About' element={<About /> }/>
      <Route path='/Services' element={<Services/> }/>
      <Route path='/Projects' element={<Projects/> }/>
      <Route path='/Contact' element={<Contact/> }/>
      <Route path='/Clients' element={<Clients/> }/>
    </Routes>
    <Footer />
    </div>
   
  );
}

export default App;
