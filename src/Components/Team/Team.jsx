import React from 'react'
import './Team.css'
import team_1 from '../../assets/team-1.jpeg'
import team_2 from '../../assets/team-2.jpeg'
import team_3 from '../../assets/team-3.png'

function Team() {
  return (
    <div className='teams'>
      {/* Member 1 */}
      <div className='team'>
        <div className="team-img-container">
          <img src={team_1} alt="Loveth Ugwu" />
        </div>
        <div className="team-info">
          <h1>Loveth Ugwu</h1>
          <p>Founder & Creative Director</p>
          <button className="meet-btn">MEET LOVETH</button>
        </div>
      </div>

      {/* Member 2 */}
      <div className='team'>
        <div className="team-img-container">
          <img src={team_2} alt="Euphemia Ojukwu" />
        </div>
        <div className="team-info">
          <h1>Euphemia Ojukwu</h1>
          <p>Creative Partner & Content Marketer</p>
          <button className="meet-btn">MEET EUPHEMIA</button>
        </div>
      </div>

      {/* Member 3 */}
      <div className='team'>
        <div className="team-img-container">
          <img src={team_3} alt="Eke Jane" />
        </div>
        <div className="team-info">
          <h1>Eke Jane</h1>
          <p>Software Developer</p>
          <button className="meet-btn">MEET JANE</button>
        </div>
      </div>
    </div>
  )
}

export default Team