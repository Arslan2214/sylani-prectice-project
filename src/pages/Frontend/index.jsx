import React from "react";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Route, Routes } from "react-router-dom";
// import 'Frontend.scss'

function index() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Main Section */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="*"
          element={<h2 className="text-center display-2">404 | Not Found</h2>}
        />
      </Routes>
      {/* Footer  */}
      <Footer />
    </>
  );
}

export default index;
