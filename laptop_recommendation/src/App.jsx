import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductCarousel from "./components/ProductCarousel";
import Gaming from "./components/Gaming";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ProductCarousel />
      <Gaming />  
      <About />
      <Footer />
    </>
  );
}

export default App;
