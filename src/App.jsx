import React, { useEffect } from 'react'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Title from './Components/Title/Title'
import Services from './Components/Services/Services'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Team from './Components/Team/Team'
import Client from './Components/Client/Client'
import Strategy from './Components/Strategy/strategy'
import MissionVision from './Components/MissionVision/MissionVision'
import Blog from './Components/Blog/Blog'
import './PageAccents.css'
import ScrollReveal from './Components/ScrollReveal'


const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target || target === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const timer = setTimeout(() => {
      document.querySelector(`.${target}, #${target}`)?.scrollIntoView({ behavior: 'smooth' });
    }, 50);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <div className="hero-about-background">
        <Hero/>
        <About/>
      </div>
      <MissionVision/>
      <Services/>
      <Team/>
      <Strategy/>
      <Testimonials/>
      <Contact/>
    </>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

const App = () => {

  return (
    <HashRouter>
      <ScrollToTop/>
      <ScrollReveal/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/services" element={<main className="standalone-page services-page"><Services showAll/><Contact/></main>}/>
        <Route path="/blog" element={<main className="standalone-page blog-page"><Blog/><Contact/></main>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
