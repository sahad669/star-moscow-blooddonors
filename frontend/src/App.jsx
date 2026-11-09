
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
// import Error from "./pages/Error";
import Signup from "./pages/signUp";
import Signin from "./pages/signIn";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="donor" element={<Doners />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singledonor/:id" element={<DonorDetails />} />

        {/* Admin protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route
            path="/admin/dashboard"
            element={<AdminDashboard />}
          />
        </Route>

        {/* Error route */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>

      <Footer />
    </>
  );
};

export default App;
