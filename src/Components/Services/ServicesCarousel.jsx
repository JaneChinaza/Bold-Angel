import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ServicesCarousel({ services }) {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef(null);
  const touchStart = useRef(null);
  const count = services.length;
  const move = (step) => setCurrent((index) => (index + step + count) % count);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncPreference = () => setReducedMotion(preference.matches);
    syncPreference();
    preference.addEventListener('change', syncPreference);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 });
    observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      preference.removeEventListener('change', syncPreference);
    };
  }, []);

  useEffect(() => {
    if (!visible || reducedMotion || paused) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setCurrent((index) => (index + 1) % count);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [visible, reducedMotion, paused, count]);

  return (
    <section id="services" className="services-orbit" ref={sectionRef} aria-label="Our services" aria-roledescription="carousel">
      <div className="services-orbit-heading">
        <span className="services-orbit-eyebrow">OUR SERVICES</span>
        <h2>Solutions Designed to<br />accelerate your Brand Growth.</h2>
      </div>
      <div
        className="services-orbit-interactive"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault();
            move(event.key === 'ArrowRight' ? 1 : -1);
          }
        }}
      >
        <div className="services-orbit-stage"
          onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
          onTouchEnd={(event) => {
            if (touchStart.current === null) return;
            const distance = touchStart.current - event.changedTouches[0].clientX;
            if (Math.abs(distance) > 40) move(distance > 0 ? 1 : -1);
            touchStart.current = null;
          }}
          onTouchCancel={() => { touchStart.current = null; }}
        >
          {services.map((service, index) => {
            let offset = (index - current + count) % count;
            if (offset > count / 2) offset -= count;
            const depth = Math.abs(offset);
            return (
              <button key={service.id} type="button"
                className={`services-orbit-card ${offset === 0 ? 'is-centered' : ''}`}
                style={{ '--offset': offset, '--depth': depth, zIndex: count - depth }}
                aria-label={`Show ${service.title.replace('\n', ' ')}`}
                aria-current={offset === 0 ? 'true' : undefined}
                aria-hidden={depth > 2}
                tabIndex={offset === 0 ? 0 : -1}
                onClick={() => setCurrent(index)}
              >
                <img src={service.image} alt="" draggable="false" />
                <span>{service.title.replace('\n', ' ')}</span>
              </button>
            );
          })}
        </div>
        <button className="services-orbit-arrow services-orbit-prev" type="button" onClick={() => move(-1)} aria-label="Previous service">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m14 6-6 6 6 6" /></svg>
        </button>
        <button className="services-orbit-arrow services-orbit-next" type="button" onClick={() => move(1)} aria-label="Next service">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m10 6 6 6-6 6" /></svg>
        </button>
      </div>
      <div className="services-orbit-count">{String(current + 1).padStart(2, '0')} / {count}</div>
      <Link className="services-orbit-link" to="/services">Learn more about our services</Link>
    </section>
  );
}
