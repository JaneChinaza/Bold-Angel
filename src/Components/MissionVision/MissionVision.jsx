import './MissionVision.css';

const values = [
  { name: 'Boldness', path: 'm13 2-9 12h7l-1 8 10-12h-7l1-8Z' },
  { name: 'Integrity', path: 'M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6l-8-3Zm-4 9 3 3 5-6' },
  { name: 'Excellence', path: 'm12 3 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6Z' },
  { name: 'Innovation', path: 'M9 18h6m-5 3h4M8 14a6 6 0 1 1 8 0c-1 1-1 2-1 2H9s0-1-1-2Z' },
];

const Icon = ({ path }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={path} />
  </svg>
);

const MissionVision = () => (
  <section id="mission-vision" className="mission-vision-container" aria-labelledby="identity-title">
    <div className="identity-heading">
      <h2 id="identity-title"><span>Our vision, mission and</span><br />core values</h2>
    </div>

    <div className="identity-panel">
      <div className="mission-vision-grid">
        <article className="mv-card">
          <h3 className="mv-title">
            <Icon path="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Zm13 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            Our vision
          </h3>
          <p className="mv-text">To be Africa's most trusted brand communications agency where bold ideas are born and powerful brands are built.</p>
        </article>
        <article className="mv-card">
          <h3 className="mv-title">
            <Icon path="M21 12a9 9 0 1 1-9-9m5 0h4v4m0-4-9 9m4 0a4 4 0 1 1-4-4" />
            Our mission
          </h3>
          <p className="mv-text">To empower brands to communicate with clarity, connect with authenticity, and grow with purpose through innovative, data informed, and creatively excellent marketing solutions.</p>
        </article>
      </div>
      <div className="core-values-panel">
        <h3>Our core values</h3>
        <ul className="core-values-list">
          {values.map((value) => (
            <li key={value.name}>
              <Icon path={value.path} />
              <span>{value.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default MissionVision;
