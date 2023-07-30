import React from "react";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import Navbar from "../../components/Navbar";
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
      <footer className="bg-dark text-white mt-5 p-3 fs-5 text-center">&copy;{new Date().getFullYear().toString(10)} | All Rights Reserved.</footer>
    </>
  );
}

export default index;
