import React, { useEffect, useRef, useState } from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import heroImage1 from '../../assets/heroImage1.png'

const Hero = () => {
  const heroRef = useRef(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHasRevealed(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) observer.disconnect();
    };
  }, []);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={heroRef} 
      className={`hero ${hasRevealed ? 'animate-reveal' : ''}`}
    >
      <img className="hero-background-image" src={heroImage1} alt="" fetchPriority="high" />

      <div className="hero-container">
        {/* Centered Copy and Actions */}
        <div className='hero-text'>
          <h1>
            We Don't Just Build Brands, We Build <em>Legacies</em>
          </h1>
          
          <p>
            Bold Angel Communications Media is a full service brand communications agency powered by three women with one mission:{' '}
            amplify your brand, command your audience, and grow your business with boldness, strategy, and soul.
          </p>

          <button className='btn' onClick={handleScrollToAbout}> 
            <span>Learn more</span>
            <img src={dark_arrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
