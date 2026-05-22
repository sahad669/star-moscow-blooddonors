import React from "react";
import Home from "./pages/Home";
import Doners from "./pages/Doners";
import Register from "./pages/Register";
import DonorDetails from "./components/DonorDetails";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="donor" element={<Doners />} />
        <Route path="/" element={<Home />} />
        <Route path="/singledonor/:id" element={<DonorDetails/>} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
