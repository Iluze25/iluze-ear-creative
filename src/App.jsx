import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Experience } from './components/Experience/Experience';
import { Skills } from './components/Skills/Skills';
import { Services } from './components/Services/Services';
import { Testimonials } from './components/Testimonials/Testimonials';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[#F7E7CE]">
        {/* Paper Grain Overlay Effect */}
        <div className="grain-overlay" />

        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Services />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}