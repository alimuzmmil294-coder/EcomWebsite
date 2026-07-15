import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Teas from "./Pages/Teas";
import Blooms from "./Pages/Blooms";
import About from "./Pages/About";
import Extras from "./Pages/Extras";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Arrivals from "./Components/Arrivals";
import Products from "./Components/Products";
import BlogSection from "./Components/BlogSection";
import ReviewSecion from "./Components/ReviewSecion";
import Footer from "./Components/Footer";
import Visit from "./Pages/Visit";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/teas" element={<Teas />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/extras" element={<Extras />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Blooms />} />
        <Route path="/visit" element={<Visit />} />
      </Routes>
      {/* <HeroSection />
      <Arrivals />
      <Products />
      <BlogSection />
      <ReviewSecion />
      <Footer /> */}
    </React.Fragment>
  );
};

export default App;
