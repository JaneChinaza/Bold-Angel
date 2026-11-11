import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import about_img from '../../assets/about.png';

const About = () => {
  const sectionRef = useRef(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggles true when visible, false when scrolled away
        setHasRevealed(entry.isIntersecting);
      },
      {
        threshold: 0.15, 
        rootMargin: "0px 0px -30px 0px" 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`about-section-container ${hasRevealed ? 'animate-reveal' : ''}`} 
      id="about"
    >
      <div className="about-split-wrapper">
        
        {/* Left Side: Media Display Block (Slides from Left) */}
        <div className="about-media-block">
          <div className="about-img-zoom-container">
            <img src={about_img} alt="Bold Angel Team Working" className="about-hero-img" />
          </div>
        </div>

        {/* Right Side: Content Block (Slides from Right) */}
        <div className="about-content-block">
          <div className="about-text-content-inner">
            <span className="about-pre-heading">About us</span>
            
            <h2 className="about-main-heading">
              Why we are the partner your brand has been waiting for
            </h2>

            <div className="about-description">
              <p>Every service connects to a larger strategic vision. When you work with Bold Angel, everything works together. We bring a perspective that is empathetic, culturally intelligent, and deeply human, because we understand diverse audiences from the inside out.</p>
              <p>Pretty campaigns that don't perform are expensive hobbies. We build for outcomes, measurable, meaningful, business-driving outcomes. Our clients are not accounts. We invest in truly understanding your business because that is the only way to serve you excellently.</p>
            </div>

            {/* Action Button Row */}
            <div className="about-action-row">
              <button
                type="button"
                className="about-explore-cta-btn"
                onClick={() => document.getElementById('mission-vision')?.scrollIntoView({ behavior: 'smooth' })}
              >
                More about us
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
