import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Title from './Components/Title/Title'
import Services from './Components/Services/Services'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/Videoplayer/Videoplayer'
import Team from './Components/Team/Team'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
      <About setPlayState={setPlayState}/>
      <Title subTitle='Our Services' title='Brand Storytelling Services' />
      <Services/>
      <Title subTitle='Meet The Bold Team' title='The Talent Behind Your Success' />
      <Team/>
      <Title subTitle='Testimonials' title='what Clients Says' />
      <Testimonials/>
      <Title subTitle='Contact Us' title='Get in Touch' />
      <Contact/>
      <Footer/>
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
