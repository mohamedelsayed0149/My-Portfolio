import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Services from "./components/Services";
import About from "./components/About";
import Prices from "./components/Prices";
import Contact from "./components/Contact";
import { BrowserRouter , Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Banner />
        <Nav />
        <Services />
        <About />
        <Prices />
        <Contact />
      </div>
    
    </BrowserRouter>
  );
}

export default App;