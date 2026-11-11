import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const targets = [
  'h1', 'h2', 'h3', 'p', 'article', 'figure',
  '.about-media-block', '.about-action-row', '.mv-card',
  '.core-values-panel', '.strategy-header', '.strategy-image', '.strategy-card',
  '.services-orbit-heading', '.services-orbit-interactive', '.services-orbit-link',
  '.service-showcase-card', '.team-section-header', '.testimonials-intro',
  '.footer-top-cta', '.footer-col', '.footer-bottom', '.blog-content',
].join(',');

export default function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!('IntersectionObserver' in window) || !Element.prototype.animate) return;
    const animations = new Set();
    let observer;

    const stop = () => {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    const start = () => {
      stop();
      if (preference.matches) return;
      const elements = [...document.querySelectorAll(targets)].filter((element) => {
        // Animate content groups once, preserving carousel transforms and form controls.
        if (element.closest('nav, dialog, [aria-hidden="true"], .service-details-overlay')) return false;
        return !element.parentElement.closest(targets);
      });
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          const siblings = [...entry.target.parentElement.children];
          const delay = Math.min(siblings.indexOf(entry.target) % 4, 3) * 65;
          const animation = entry.target.animate(
            [{ opacity: 0, translate: '0 22px' }, { opacity: 1, translate: '0 0' }],
            { duration: 600, delay, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'backwards' },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        });
      }, { threshold: 0.08 });
      elements.forEach((element) => observer.observe(element));
    };

    // Wait for the route's content and scroll reset to commit.
    const frame = requestAnimationFrame(start);
    preference.addEventListener('change', start);
    return () => {
      cancelAnimationFrame(frame);
      preference.removeEventListener('change', start);
      stop();
    };
  }, [pathname]);

  return null;
}
