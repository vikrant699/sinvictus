import React from 'react';
import { Navbar } from '../landingPage/Navbar';
import { Hero } from '../landingPage/Hero';
import { Services } from '../landingPage/Services';
import { FinalTestimonials } from '../landingPage/Testimonials';
import { Pricing } from '../landingPage/Pricing';
import { About } from '../landingPage/About';
import { Footer } from '../landingPage/Footer';
import { Element } from 'react-scroll';

function LandingPage() {
  return (
    <>
      <Element id="top" name="top">
        <Navbar />
      </Element>
      <Element id="Home" name="Home">
        <Hero />
      </Element>
      <Element id="Services" name="Services">
        <Services />
      </Element>
      <Element id="Testimonials" name="Testimonials">
        <FinalTestimonials />
      </Element>
      <Element id="Pricing" name="Pricing">
        <Pricing />
      </Element>
      <Element id="About" name="About">
        <About />
        <Footer />
      </Element>
    </>
  );
}

export default LandingPage;
