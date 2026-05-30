import React from "react";
import Home from "./pages/Home";
import Doners from "./pages/Doners";
import Register from "./pages/Register";
import DonorDetails from "./components/DonorDetails";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
    <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="donor" element={<Doners />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singledonor/:id" element={<DonorDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

