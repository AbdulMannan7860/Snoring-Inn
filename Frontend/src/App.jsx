import Footer from "./components/common/Footer.jsx";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/common/Header.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Home from "./components/home/Home.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import BookingPage from "./pages/BookingPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import RoomPage from "./pages/RoomPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import TestimomialPage from "./pages/TestimonialPage.jsx";
import TeamPage from "./pages/TeamPage.jsx";


import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/animate.min.css";
import "./css/animate.css";
import "./App.css";

export default function App() {
  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<PageNotFound />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/testimonial" element={<TestimomialPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/rooms" element={<RoomPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}
