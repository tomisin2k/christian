import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/Hero';
// import './components/hero.css'; 
import Socialproof from './components/socialproof';
import Testimonial from './components/testimonial';
import Faq from './components/faq';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Socialproof />
      <Testimonial />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
