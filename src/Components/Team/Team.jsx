import React from 'react';
import './Team.css';
import team_1 from '../../assets/team-1.jpeg';
import team_2 from '../../assets/team-2.jpeg';
import team_3 from '../../assets/team-3.jpeg';
import instagramIcon from '../../assets/socials/instagram.png';
import linkedinIcon from '../../assets/socials/linkedin.png';
import twitterIcon from '../../assets/socials/twitter.png';

const teamData = [
  {
    id: 1,
    name: 'Loveth Ugwu',
    role: 'Founder & Creative Director',
    image: team_1,
    socials: {
      instagram: 'mailto:loveth@boldangelagency.com',
      twitter: 'mailto:loveth@boldangelagency.com',
      linkedin: 'mailto:loveth@boldangelagency.com',
    },
  },
  {
    id: 2,
    name: 'Euphemia Ojukwu',
    role: 'Creative Partner & Content Marketer',
    image: team_2,
    socials: {
      instagram: 'mailto:euphemia@boldangelagency.com',
      twitter: 'mailto:euphemia@boldangelagency.com',
      linkedin: 'mailto:euphemia@boldangelagency.com',
    },
  },
  {
    id: 3,
    name: 'Eke Jane',
    role: 'Partner\nWeb Developer',
    image: team_3,
    socials: {
      instagram: 'mailto:jane@boldangelagency.com',
      twitter: 'mailto:jane@boldangelagency.com',
      linkedin: 'mailto:jane@boldangelagency.com',
    },
  },
];

function Team() {
  return (
    <section className="team-section-container">
      <div className="team-section-header">
        <span className="team-subtitle">Our Team</span>
        <h2 className="team-main-heading">
          The Women Behind <span className="brand-highlight">the Bold</span>
        </h2>
      </div>
      <div className="teams">
        {teamData.map((member) => (
          <article key={member.id} className="team-card-wrapper">
            <div className="team-portrait">
              <img src={member.image} alt={member.name} loading="lazy" />
            </div>
            <div className="team-info-block">
              <h3>{member.name}</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{member.role}</p>
              <div className="team-card-actions">
                {[
                  ['twitter', 'X', twitterIcon],
                  ['linkedin', 'LinkedIn', linkedinIcon],
                  ['instagram', 'Instagram', instagramIcon],
                ].map(([platform, label, icon]) => (
                  <a key={platform} className="team-social-link" href={member.socials[platform]} aria-label={`${member.name} on ${label}`}>
                    <img src={icon} alt="" />
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Team;
