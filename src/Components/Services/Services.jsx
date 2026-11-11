import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import ServicesCarousel from './ServicesCarousel';

// Absolute imports from your assets/service folder context
import advertImg from '../../assets/service/advert.png';
import brandingImg from '../../assets/service/branding.png';
import contentImg from '../../assets/service/content.png';
import mediaImg from '../../assets/service/media.png';
import eventImg from '../../assets/service/event.png';
import photoImg from '../../assets/service/photo.png';
import aiImg from '../../assets/service/ai.png';
import editorialImg from '../../assets/service/editorial.png';
import corporateImg from '../../assets/service/corperate.png';
import outreachImg from '../../assets/service/outreach.png';
import brandImg from '../../assets/service/brand.png';

const Services = ({ showAll = false }) => {
  const allServices = [
    {
      id: '01',
      title: 'Advertising &\nMarketing',
      image: advertImg,
      desc: "We don't spray and pray. We research, target, craft, and optimise with surgical precision connecting your brand to the right audience, at the right moment, through the right channels.",
      bullets: [
        'Integrated campaign strategy & planning',
        'Digital advertising (Meta, Google, TikTok, YouTube, Programmatic)',
        'Traditional media buying (Radio, TV, Print, OOH)',
        'Performance marketing & lead generation',
        'Campaign analytics & optimisation'
      ]
    },
    {
      id: '02',
      title: 'Branding &\nIdentity',
      image: brandingImg,
      desc: 'Your brand is the feeling people have when they think of you. We build identities so compelling and cohesive they become impossible to replicate because they are entirely, uniquely you.',
      bullets: [
        'Brand strategy & positioning',
        'Logo design & visual identity systems',
        'Brand voice, tone & messaging guides',
        'Brand refresh & rebranding'
      ]
    },
    {
      id: '03',
      title: 'Content &\nCreative Production',
      image: contentImg,
      desc: 'Only exceptional content earns attention. We create content that stops the scroll, sparks conversation, and builds communities beautiful, strategic, and effective.',
      bullets: [
        'Content strategy & editorial planning',
        'Copywriting web, ads, email, social, longform',
        'Graphic design, animation & motion graphics',
        'Branded & sponsored content production'
      ]
    },
    {
      id: '04',
      title: 'Media &\nCommunications (PR)',
      image: mediaImg,
      desc: 'Your reputation is your most valuable asset. We protect it, elevate it, and amplify it through strategic media relations and communications that keep your narrative controlled, compelling, and credible.',
      bullets: [
        'PR strategy & execution',
        'Press release writing & media distribution',
        'Crisis communications & reputation management',
        'Executive & thought leadership positioning'
      ]
    },
    {
      id: '05',
      title: 'Event Planning\n& Management',
      image: eventImg,
      desc: 'Events are where brands come alive where your story stops being told and starts being experienced. We design and deliver events that create unforgettable impressions and measurable outcomes.',
      bullets: [
        'End-to-end event production & logistics',
        'Product launches & corporate events',
        'Experiential marketing events',
        'Virtual & hybrid event management'
      ]
    },
    {
      id: '06',
      title: 'Photography &\nVideography',
      image: photoImg,
      desc: 'Before a word is read, your audience sees you. Our visual production team creates images and films that are more than beautiful they are strategic brand assets that communicate your essence at a glance.',
      bullets: [
        'Brand, product & commercial photography',
        'Event & corporate photography',
        'Brand films & commercial video production',
        'Video editing & post-production'
      ]
    },
    {
      id: '07',
      title: 'AI Automation &\nDigital Innovation',
      image: aiImg,
      desc: 'The future of marketing is intelligent, automated, and deeply personalised. We help brands leverage AI to work smarter, move faster, and engage deeper before the competition catches up.',
      bullets: [
        'Marketing automation strategy & setup',
        'CRM automation & lead nurturing flows',
        'Chatbot design & conversational marketing',
        'Workflow automation for brand operations'
      ]
    },
    {
      id: '08',
      title: 'Editorial Coverage',
      image: editorialImg,
      desc: 'Getting into the right publications is not luck it is strategy. We secure high-impact editorial placements that build credibility, expand reach, and position your leadership where it matters most.',
      bullets: [
        'Media targeting & editorial strategy',
        'Feature article pitching & placement',
        'Podcast, broadcast & online media features',
        'Award nominations & industry recognition'
      ]
    },
    {
      id: '09',
      title: 'Corporate &\nInfluencer-Led Activations',
      image: corporateImg,
      desc: "Activations are when your audience doesn't just see your brand they become part of it. We design and execute experiences that generate buzz, drive engagement, and create genuine brand advocates.",
      bullets: [
        'Corporate activation concept & execution',
        'Influencer identification, briefing & management',
        'Co-branded & community activation campaigns',
        'Post-activation ROI reporting'
      ]
    },
    {
      id: '10',
      title: 'Outreach &\nEngagement',
      image: outreachImg,
      desc: 'Growth is directly proportional to the strength of your relationships. We build outreach strategies that connect you meaningfully with the audiences, partners, and communities that matter most.',
      bullets: [
        'Community building & engagement strategy',
        'Email marketing & newsletter management',
        'Stakeholder & partner outreach',
        'Loyalty & brand advocacy programme design'
      ]
    },
    {
      id: '11',
      title: 'Brand Experiences',
      image: brandImg,
      desc: 'A brand experience is strategy, creativity, and emotion colliding in a moment your audience will never forget. We design immersive experiences that permanently shift how people think and feel about your brand.',
      bullets: [
        'Immersive pop-ups & experiential installations',
        'OOH & phygital brand experiences',
        'Brand festivals & consumer experience events',
        'Sensory & interactive brand environments.'
      ]
    }
  ];

  const [activeCardId, setActiveCardId] = useState(null);
  const [hasRevealed, setHasRevealed] = useState(false);
  
  const sectionRef = useRef(null);
  const gridContainerRef = useRef(null);

  const displayedServices = showAll ? allServices : allServices.slice(0, 3);

  // Scroll Reveal Observer Setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Keeps state accurate based on viewport visibility
        setHasRevealed(entry.isIntersecting);
      },
      { 
        threshold: 0.05, // Lowered threshold to guarantee it fires early when scrolling down
        rootMargin: "0px 0px -20px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        activeCardId !== null && 
        gridContainerRef.current && 
        !gridContainerRef.current.contains(event.target)
      ) {
        setActiveCardId(null);
      }
    };

    document.addEventListener('pointerdown', handleOutsideClick);
    return () => {
      document.removeEventListener('pointerdown', handleOutsideClick);
    };
  }, [activeCardId]);

  const toggleOverlay = (id, event) => {
    event.stopPropagation(); 
    setActiveCardId(activeCardId === id ? null : id);
  };

  if (!showAll) return <ServicesCarousel services={allServices} />;

  return (
    <section 
      ref={sectionRef}
      /* Clean string interpolation for the activation trigger class */
      className={`services-section-wrapper ${hasRevealed ? 'animate-reveal' : ''} ${showAll ? 'services-full-page' : 'services-home'}`}
    >
      <div className="services-split-layout">
        
        {/* Left Side Column: Transitions Up */}
        <div className="services-left-meta">
          <h2 className="services-section-heading">What We Do</h2>
          <p className="services-section-lead">
            Our services are designed to work independently or in powerful combination, because the most impactful brands don't communicate in silos.
          </p>
        </div>

        {/* Right Side Column: Transitions Left to Right */}
        <div className="services-right-container-block">
          <div className="services-right-grid" ref={gridContainerRef}>
            {displayedServices.map((service) => {
              const isExpanded = activeCardId === service.id;
              return (
                <div
                  key={service.id}
                  className={`service-showcase-card ${isExpanded ? 'is-active' : ''}`}
                  onPointerEnter={(event) => {
                    if (event.pointerType === 'mouse') setActiveCardId(service.id);
                  }}
                  onPointerLeave={(event) => {
                    if (event.pointerType === 'mouse') setActiveCardId(null);
                  }}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) setActiveCardId(null);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Escape') {
                      setActiveCardId(null);
                      event.currentTarget.querySelector('.service-card-toggle-btn').focus();
                    }
                  }}
                >
                  
                  <div className="service-card-banner">
                    <img src={service.image} alt={service.title.replace('\n', ' ')} />
                  </div>

                  <div className="service-card-body">
                    <h3 className="service-card-title">
                      {service.title.split('\n').map((line, idx) => (
                        <span key={idx}>{line}<br /></span>
                      ))}
                    </h3>

                    <p className="service-card-excerpt">{service.desc}</p>

                    <button 
                      onClick={(e) => toggleOverlay(service.id, e)} 
                      className={`service-card-toggle-btn ${isExpanded ? 'active' : ''}`}
                      aria-expanded={isExpanded}
                      aria-controls={`service-details-${service.id}`}
                      aria-label={`View details about ${service.title.replace('\n', ' ')}`}
                    >
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M7 17 17 7M8 7h9v9" />
                      </svg>
                    </button>

                  </div>

                  <div
                    id={`service-details-${service.id}`}
                    className="service-details-overlay"
                    role="region"
                    aria-label={`${service.title.replace('\n', ' ')} details`}
                    aria-hidden={!isExpanded}
                    inert={!isExpanded}
                  >
                    <h3 className="service-overlay-title">{service.title.replace('\n', ' ')}</h3>
                    <p className="service-expanded-desc">{service.desc}</p>
                    <ul className="service-expanded-bullet-list">
                      {service.bullets.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slider Pagination Layout System Container */}
          {!showAll && <div className="services-slider-nav-group">
            <div className="slider-explore-subtext-wrapper">
              <Link to="/services" className="slider-explore-subtext-btn">
                Explore more of our services
                <svg 
                  className="up-pointing-arrow-icon" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>}

        </div>

      </div>
    </section>
  );
};

export default Services;
