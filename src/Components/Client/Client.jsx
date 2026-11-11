import React from 'react';
import './Client.css';

// Absolute imports from your assets/client folder path context
import googleLogo from '../../assets/client/google.png';
import handsLogo from '../../assets/client/hands.png';
import kingsLogo from '../../assets/client/kings.png';
import opayLogo from '../../assets/client/opay.png';
import raizLogo from '../../assets/client/raiz.png';

const Client = () => {
  // Ordered array tracking raw assets and accessibility parameters
  const brandLogos = [
    { id: 'google', src: googleLogo, alt: 'Google' },
    { id: 'hands', src: handsLogo, alt: 'Hands Drinks' },
    { id: 'kings', src: kingsLogo, alt: 'Kings Oil' },
    { id: 'opay', src: opayLogo, alt: 'Opay' },
    { id: 'raiz', src: raizLogo, alt: 'Raiz' }
  ];

  return (
    <section className="client-ticker-section">
      <div className="client-ticker-container">
        
        {/* Left Side: Dynamic Text Header Block */}
        <div className="client-text-meta">
          <p>
            More than 50 world class brands trust <span>BACM</span>
          </p>
        </div>

        {/* Right Side: Masked Window with Uninterrupted Infinite Animation */}
        <div className="client-carousel-window">
          <div className="client-infinite-track">
            
            {/* First complete pass of brand items */}
            {brandLogos.map((logo) => (
              <div className="client-logo-item" key={`loop-1-${logo.id}`}>
                <img src={logo.src} alt={`${logo.alt} Brand Logo`} />
              </div>
            ))}

            {/* Duplicated pass ensures a seamless, non-stuttering loop transition */}
            {brandLogos.map((logo) => (
              <div className="client-logo-item" key={`loop-2-${logo.id}`}>
                <img src={logo.src} alt={`${logo.alt} Brand Logo`} />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Client;