import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about' id='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} />
      </div>
      <div className="about-right">
        <h1>Why Bold Angel?</h1>
        <p>We don’t just build brands — we give them a voice that
          cannot be ignored. Bold Angel Agency helps businesses
          across Africa and beyond tell compelling stories through
          creative strategy, branding, media, and communications
          that inspire real connection and lasting impact.</p>
            <p>Built for brands that want to lead, not follow.
              Bold Angel Agency delivers creative communication
              solutions designed to elevate brands, shape perception,
              and create meaningful impact across diverse audiences.</p>
      </div>
    </div>
  )
}

export default About
