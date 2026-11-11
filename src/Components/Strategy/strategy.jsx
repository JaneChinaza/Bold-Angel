import React from 'react';
import './Strategy.css';
import strategyImage from '../../assets/StratergyImage.png';

const steps = [
  ['Discover', 'We immerse ourselves in your brand, your audience, and your goals before we create a single thing.', <><circle cx="10" cy="10" r="6" /><path d="m15 15 6 6" /></>],
  ['Strategize', 'We build a bespoke, data informed strategy every element intentional, every decision audience-first.', <><path d="m4 20 4-1L20 7l-3-3L5 16l-1 4Zm10-13 3 3" /></>],
  ['Execute', 'Our specialists bring the plan to life with precision, creativity, and unwavering commitment to excellence.', <><path d="m4 10 12-5v14L4 14v-4Zm12-3 4 2v6l-4 2M6 15l2 6h3l-2-5" /></>],
  ['Optimise', 'We track, analyse, report transparently, and continuously refine to maximise your return on investment.', <><path d="M3 21h18M5 17v-5h3v5M11 17V8h3v9M17 17V3h3v14" /></>],
];

const Strategy = () => (
  <section id="strategy" className="strategy-section">
    <div className="strategy-header">
      <span className="subtitle">OUR STRATEGY</span>
      <h2>The Bold Angel Approach</h2>
    </div>
    <div className="strategy-layout">
      <div className="strategy-image"><img src={strategyImage} alt="Black woman seated at a laptop against a plain light gray background" loading="lazy" /></div>
      <ol className="strategy-container">
      {steps.map(([title, description, icon], index) => (
        <li className="strategy-card" key={title}>
          <div className="strategy-card-face">
            <div className="strategy-card-top">
              <svg className="strategy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icon}</svg>
              <span className="strategy-step-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </li>
      ))}
      </ol>
    </div>
  </section>
);

export default Strategy;
