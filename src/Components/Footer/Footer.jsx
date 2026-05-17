import React from 'react'
import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='footer'>
      <p>&copy; {currentYear} Bold Angel. All Rights Reserved.</p>
      <ul>
        <li>Service of Terms</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  )
}

export default Footer
