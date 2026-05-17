import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  }
  const closeMenu = () => {
    setMobileMenu(false);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo'/>
      
   
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to="hero" smooth={true} offset={0} duration={500} onClick={closeMenu}>Home</Link></li>
        <li><Link to="about" smooth={true} offset={-120} duration={500} onClick={closeMenu}>About Us</Link></li>
        <li><Link to="services" smooth={true} offset={-240} duration={500} onClick={closeMenu}>Service</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-240} duration={500} onClick={closeMenu}>Testimonials</Link></li>
        <li><Link to="contact" smooth={true} offset={-230} duration={500} className='btn' onClick={closeMenu}><span>Contact us</span></Link></li>
      </ul>
      
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar