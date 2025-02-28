import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      
      <div className="divider"></div>
      <section id="cards">
        <Cards />
      </section>
      <div className="divider"></div>
      <section id="aboutus">
        <AboutUs />
      </section>
      <div className="divider"></div>
      <section id="contactus">
        <ContactUs />
      </section>
      <Footer />
    </div>
  );
}

export default App;