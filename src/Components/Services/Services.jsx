import React from 'react'
import './Services.css'
import public_icon from '../../assets/public-relaton.png'
import media_icon from '../../assets/media-management.png'
import photo_icon from '../../assets/photo.png'
import web_icon from '../../assets/web.png'

const Services = () => {
  return (
    <div className='services'>
      <div className='services-container'>
        <div className="service-card">
          <div className="icon-circle">
            <img src={public_icon} alt="Public Relation" />
          </div>
          <h3>PUBLIC RELATION</h3>
          <p>End-to-end PR management — media relations, press releases,
            crisis communications, and reputation building. We connect your brand to the right voices.</p>
        </div>

        <div className="service-card">
          <div className="icon-circle">
            <img src={media_icon} alt="Social media icon" />
          </div>
          <h3>SOCIAL MEDIA MANAGEMENT</h3>
          <p>Data-driven, creatively led social media strategies that build audiences,
            drive engagement, and turn followers into brand advocates.</p>
        </div>

        <div className="service-card">
          <div className="icon-circle">
            <img src={photo_icon} alt="Photography" />
          </div>
          <h3>PHOTOTGRAPHY & VIDEOGRAPHY</h3>
          <p>Premium visual content creation that brings your brand story to life.
            From product shoots to brand films, we capture the essence of what makes you different.</p>
        </div>

        <div className="service-card">
          <div className="icon-circle">
            <img src={web_icon} alt="Web development" />
          </div>
          <h3>WEBSITE DESIGN & MANAGEMENT</h3>
          <p>Visually stunning, strategically structured websites that are built to convert. 
            Your digital front door deserves to make a lasting impression.</p>
        </div>
      </div>
    </div>
  )
}

export default Services