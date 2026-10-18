import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroContent";
import ShopByOccasion from "./components/ShopByOccasion";
import About from "./components/About";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
       <ShopByOccasion />
      <About />
      <Products />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
