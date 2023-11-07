
import React from "react";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import './App.css';
import Nav from "./Components/nav/Nav";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer"
import Admission from "./Components/Admission/Admission";
import Contact from "./Components/Contact/Contact";
import AboutUs from "./Components/About Us/AboutUs";
import ApplyOnline from "./Components/applyOnline/ApplyOnline";
import Event from "./Components/Events/Event";
import Staff from "./Components/Staff/Staff";

function App() {
  return (
  
    
    
    <BrowserRouter>
    <Nav/>
      
      <Routes>
        <Route  path="/"  element={<Home/>}/>
        <Route path="/Admission" element={<Admission/>} />
        <Route path="/ApplyOnline" element={<ApplyOnline/>} />
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Event" element={<Event/>}/>
        <Route path="/staff" element={<Staff/>}/>
        <Route path="/ContactUs" element={<Contact/>} />
       
      </Routes>
      <Footer/>

    </BrowserRouter>
  
  );
}

export default App;
