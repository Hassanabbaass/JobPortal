import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  
  Routes,

} from 'react-router-dom';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Service/Services';

import Navbar from './Components/Navbar/Navbar';


const App = () => {
  return (
    
    
   <Router>

     <>
        <Navbar/>
     </>
    
      <Routes>
        
        <Route exact path="/" element={<Home/>} />
  
        <Route exact path="/about" element={<About/>} /> 
       
        <Route exact path="/contact" element={<Contact/>} />
        
        <Route exact path="/service" element={<Services/>}/>

      </Routes>
    
   </Router>
  );
}

   

export default App;
