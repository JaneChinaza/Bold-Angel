import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo1.png';
import scrolledLogo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    // Scroll event handler
    const handleScroll = () => {
      window.scrollY > 30 ? setSticky(true) : setSticky(false);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setMobileMenu(!mobileMenu);
  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <>
      {/* Liquid SVG filter definition layer injected into DOM for the Gooey Nav Effect */}
      <svg className="gooey-filter-container" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="gooey-nav-blend">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" 
              result="gooey" 
            />
            <feBlend in="SourceGraphic" in2="gooey" />
          </filter>
        </defs>
      </svg>

      <header className={`header-wrapper-root ${sticky ? 'sticky-active' : ''} ${location.pathname !== '/' ? 'navbar-solid' : ''}`}>
        
        {/* ─── MAIN NAVIGATION CONTAINER ─── */}
        <nav className="navbar-wrapper">
          <div className="navbar-container">
            <img src={sticky || location.pathname !== '/' ? scrolledLogo : logo} alt="BACM Logo" className='logo'/>
            
            <div className="nav-navigation-box">
              <ul className={`nav-links-list ${mobileMenu ? 'show-mobile-menu' : ''}`}>
                <li>
                  <Link to="/" state={{ scrollTo: 'hero' }} onClick={closeMenu} className={location.pathname === '/' ? 'active' : ''}>
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/" state={{ scrollTo: 'about' }} onClick={closeMenu}>
                    About us
                  </Link>
                </li>

                <li>
                  <Link to="/services" onClick={closeMenu} className={location.pathname === '/services' ? 'active' : ''}>
                    Services
                  </Link>
                </li>

                <li>
                  <Link to="/" state={{ scrollTo: 'testimonials' }} onClick={closeMenu}>
                    Testimonials
                  </Link>
                </li>

                <li className="nav-menu-button-item nav-contact-mobile">
                  <Link to="/" state={{ scrollTo: 'contact' }} onClick={closeMenu} className="nav-action-btn">
                    Contact us
                  </Link>
                </li>

                {/* Blog navigation is hidden until blog content is ready. */}

              </ul>
            </div>

            <Link to="/" state={{ scrollTo: 'contact' }} className='nav-action-btn nav-contact-desktop'>
              Contact us
            </Link>
            
            <img src={menu_icon} alt="Toggle Menu" className='menu-icon' onClick={toggleMenu}/>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
