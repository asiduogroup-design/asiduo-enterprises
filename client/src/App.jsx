import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Clients from "./pages/Clients.jsx";
import Services from "./pages/Services.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";
import Careers from "./pages/Careers.jsx";
import News from "./pages/News.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Projects from "./pages/Projects.jsx";
import AdminLogin from "./admin/AdminLogin.jsx";
import AdminDashboard from "./admin/AdminDashboard.jsx";
import SeoManager from "./components/SeoManager.jsx";

const App = () => (
  <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
  >
    <SeoManager />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/news" element={<News />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
