import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import instagram_icon from '../../assets/instagram.png'
import linkedin_icon from '../../assets/linkedin.png'
import twitter_icon from '../../assets/twitter.png'
import facebook_icon from '../../assets/facebook.png'

const Hero = () => {

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

return (
  <div className='hero container'>
    <div className='hero-text'>
      <h1 data-aos="fade-up">
        Telling Africa's Brand Stories to the World
      </h1>
      
      <p data-aos="fade-up" data-aos-delay="200">
        We create bold brand experiences through storytelling, creative strategy,
        and impactful communication designed to help businesses stand out and grow.
      </p>

  
      <button className='btn' onClick={handleScrollToAbout} data-aos="fade-up" data-aos-delay="400"> 
        <span>Explore more</span> 
        <img src={dark_arrow} alt="" />
      </button>

  
      <div className="social-icons" data-aos="fade-up" data-aos-delay="600">
        <a href="https://www.linkedin.com/company/bold-angel-media-communications/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin_icon} alt="LinkedIn" className='fab' />
        </a>
        <a href="https://www.instagram.com/boldangelagency?igsh=MWR5Z25zajBhNHVmOQ==" target="_blank" rel="noopener noreferrer">
          <img src={instagram_icon} alt="Instagram" className='fab' />
        </a>
        <a href="/" onClick={(e) => e.preventDefault()}>
          <img src={twitter_icon} alt="twitter" className='fab' />
        </a>
        <a href="/" onClick={(e) => e.preventDefault()}>
          <img src={facebook_icon} alt="facebook" className='fab' />
        </a>
      </div>
    </div>
  </div>
)
}

export default Hero