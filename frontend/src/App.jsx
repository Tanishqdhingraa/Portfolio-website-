import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Pro from './components/pro'; // Component names must be capitalized
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <main className="font-light text-white antialiased selection:bg-lime-300 selection:text-black">
      <Navbar />
      <Hero />
      <Marquee />
      <Pro />
      <About/>
      <Work/>
      <Contact/>
    </main>
  );
};

export default App;
